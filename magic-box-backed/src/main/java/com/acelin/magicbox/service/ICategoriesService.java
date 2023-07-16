package com.acelin.magicbox.service;

import com.acelin.magicbox.dto.CategoriesDto;
import com.acelin.magicbox.entity.Categories;
import com.acelin.magicbox.utils.Result;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 10:31:40
 */
public interface ICategoriesService extends IService<Categories> {
   Result<List<CategoriesDto>> getCategories();
}
