package com.acelin.magicbox.controller;


import com.acelin.magicbox.dto.UserDto;
import com.acelin.magicbox.service.IUserService;
import com.acelin.magicbox.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 04:37:16
 */
@RestController
@RequestMapping("/user")
public class UserController {
    final IUserService userService;
    @Autowired
    public UserController(IUserService userService) {
        this.userService = userService;
    }
    @GetMapping("/login")
    public Result<UserDto> loginUser(@RequestParam String username, @RequestParam String password) {
        return userService.login(username, password);
    }
    @GetMapping("/getUserList")
    public Result<List<UserDto>> getUserList() {
        return userService.getUserList();
    }
    @PostMapping("/register")
    public Result<Object> registerNewUser(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String email = request.get("email");
        String password = request.get("password");

        return userService.register(username, email, password);
    }
}
