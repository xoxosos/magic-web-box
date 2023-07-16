package com.acelin.magicbox.controller;


import com.acelin.magicbox.dto.CategoriesDto;
import com.acelin.magicbox.dto.UserDto;
import com.acelin.magicbox.service.ICategoriesService;
import com.acelin.magicbox.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 10:31:40
 */
@RestController
@RequestMapping("/categories")
public class CategoriesController {
    final ICategoriesService iCategoriesService;

    @Autowired
    public CategoriesController(ICategoriesService iCategoriesService) {
        this.iCategoriesService = iCategoriesService;
    }
    @GetMapping("/getCategories")
    public Result<List<CategoriesDto>> getCategories(){
        return iCategoriesService.getCategories();
    }
}
