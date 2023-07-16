package com.acelin.magicbox.service;

import com.acelin.magicbox.dto.UserDto;
import com.acelin.magicbox.entity.User;
import com.acelin.magicbox.utils.Result;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 04:37:16
 */
public interface IUserService extends IService<User> {
    Result<UserDto> login(String username, String password);
    Result<List<UserDto>> getUserList();
    Result<Object> register(String username, String email, String password);
}
