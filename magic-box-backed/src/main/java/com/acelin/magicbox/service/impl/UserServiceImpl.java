package com.acelin.magicbox.service.impl;

import cn.dev33.satoken.secure.SaSecureUtil;
import cn.dev33.satoken.stp.StpUtil;
import com.acelin.magicbox.dto.UserDto;
import com.acelin.magicbox.entity.User;
import com.acelin.magicbox.mapper.UserMapper;
import com.acelin.magicbox.service.IUserService;
import com.acelin.magicbox.utils.Result;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 04:37:16
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {
    final UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }
    public String formatTime(LocalDateTime time,String format){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format);
        return time.format(formatter);
    }
    @Override
    public Result<UserDto> login(String username, String password) {
        User user = userMapper.selectOne(new LambdaQueryWrapper<User>().eq(User::getUsername, username));

        if (user == null) {
            return Result.error500("用户不存在!");
        }
        if (!SaSecureUtil.sha256(password).equals(user.getPassword())) {
            return Result.error500("用户名或密码不正确!");
        }
        // StpUtil.login(id) 方法利用了 Cookie 自动注入的特性，省略了你手写返回 Token 的代码
        StpUtil.login(user.getId());
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        userDto.setCreateTime(formatTime(user.getCreatedTime(),"yyyy-MM-dd HH:mm:ss"));
        userDto.setUpdateTime(formatTime(user.getUpdatedTime(),"yyyy-MM-dd HH:mm:ss"));
        // 获取token
        userDto.setToken(StpUtil.getTokenInfo().tokenValue);
        System.out.println("111");
        return Result.success("登录成功!", userDto);
    }

    @Override
    public Result<List<UserDto>> getUserList() {
        try {
            List<User> userList = userMapper.selectList(null); // 自动过滤已逻辑删除的记录

            // 使用流操作将 User 转换为 UserDto
            List<UserDto> userDtoList = userList.stream()
                    // 转化为userDto
                    .map(user -> {
                        UserDto userDto = new UserDto();
                        userDto.setUserId(user.getId());
                        userDto.setUsername(user.getUsername());
                        userDto.setCreateTime(formatTime(user.getCreatedTime(),"yyyy-MM-dd HH:mm:ss"));
                        userDto.setEmail(user.getEmail());
                        // 设置其他属性
                        return userDto;
                    })
                    // 将流中的元素收集到一个 List中
                    .collect(Collectors.toList());

            return Result.success("查询成功", userDtoList);
        } catch (Exception e) {
            return Result.error500("系统出现错误");
        }
    }

    @Override
    public Result<Object> register(String username, String email, String password) {
        User existingUser = userMapper.selectOne(new LambdaQueryWrapper<User>().eq(User::getUsername, username));
        if (existingUser != null) {
            return Result.error500("用户名已存在!");
        }

        existingUser = userMapper.selectOne(new LambdaQueryWrapper<User>().eq(User::getEmail, email));
        if (existingUser != null) {
            return Result.error500("该邮箱已被注册!");
        }

        User newUser = new User();
        newUser.setUsername(username);
        newUser.setEmail(email);
        newUser.setPassword(SaSecureUtil.sha256(password));
        userMapper.insert(newUser);

        return Result.success("注册成功!");
    }

}

