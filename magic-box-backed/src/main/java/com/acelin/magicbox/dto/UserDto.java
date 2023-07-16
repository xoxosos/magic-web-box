package com.acelin.magicbox.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserDto {
    private Integer userId;
    private String username;
    private String email;
    private String token;
    private String createTime;
    private String updateTime;
}
