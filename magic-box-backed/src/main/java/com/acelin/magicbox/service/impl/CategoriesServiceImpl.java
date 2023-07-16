package com.acelin.magicbox.service.impl;

import com.acelin.magicbox.dto.CategoriesDto;
import com.acelin.magicbox.dto.UserDto;
import com.acelin.magicbox.entity.Categories;
import com.acelin.magicbox.entity.User;
import com.acelin.magicbox.mapper.CategoriesMapper;
import com.acelin.magicbox.mapper.UserMapper;
import com.acelin.magicbox.service.ICategoriesService;
import com.acelin.magicbox.utils.Result;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 10:31:40
 */
@Service
public class CategoriesServiceImpl extends ServiceImpl<CategoriesMapper, Categories> implements ICategoriesService {
    final CategoriesMapper categoriesMapper;

    @Autowired
    public CategoriesServiceImpl(CategoriesMapper categoriesMapper) {
        this.categoriesMapper = categoriesMapper;
    }

    @Override
    public Result<List<CategoriesDto>> getCategories() {
        List<Categories> Categories = categoriesMapper.selectList(null); // 自动过滤已逻辑删除的记录
        List<CategoriesDto> CategoriesDtoList = Categories.stream().map(user -> {
                    CategoriesDto categoriesDto = new CategoriesDto();
                    if (!user.getIsParent()){
                        categoriesDto.setParentId(user.getParentId());
                    }
                    categoriesDto.setId(user.getId());
                    categoriesDto.setName(user.getName());
                    // 设置其他属性
                    return categoriesDto;
                })
                // 将流中的元素收集到一个 List中
                .collect(Collectors.toList());
        System.out.println(CategoriesDtoList);
        return Result.success(CategoriesDto.buildCategoriesDtoTree(CategoriesDtoList));
    }
}
