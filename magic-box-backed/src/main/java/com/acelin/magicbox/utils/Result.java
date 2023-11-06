package com.acelin.magicbox.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * @author AceLin
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Result<T> {
    private int code;
    private String message;
    private T data;

    // 定义一个枚举或常量类来管理错误码和对应的消息
    @Getter
    public enum ErrorCode {
        SUCCESS(0, "Success"),
        GENERAL_ERROR(500, "An error occurred");

        private final int code;
        private final String message;

        ErrorCode(int code, String message) {
            this.code = code;
            this.message = message;
        }

    }

    // 使用 ErrorCode 定义错误码
    public static <T> Result<T> error(int code, String message) {
        return new Result<>(code, message, null);
    }

    public static <T> Result<T> error500(String message) {
        return new Result<>(ErrorCode.GENERAL_ERROR.getCode(), message, null);
    }

    public static <T> Result<T> success(T data) {
        return new Result<>(0, "success", data);
    }
    public static <T> Result<T> success(String message) {
        return new Result<>(0, message,null);
    }

    public static <T> Result<T> success(String message, T data) {
        return new Result<>(0, message, data);
    }


}