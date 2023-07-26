package com.acelin.magicbox.service.impl;

import com.acelin.magicbox.entity.Resources;
import com.acelin.magicbox.mapper.CategoriesMapper;
import com.acelin.magicbox.mapper.ResourcesMapper;
import com.acelin.magicbox.service.IResourcesService;
import com.acelin.magicbox.utils.Result;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 10:32:48
 */
@Service
public class ResourcesServiceImpl extends ServiceImpl<ResourcesMapper, Resources> implements IResourcesService {
   final
   ResourcesMapper resourcesMapper;
   @Autowired
   public ResourcesServiceImpl(ResourcesMapper resourcesMapper) {
       this.resourcesMapper = resourcesMapper;
   }

    @Override
    public Result<List<Resources>> getResources(long id) {
        QueryWrapper<Resources> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("category_id", id);
        return Result.success(resourcesMapper.selectList(queryWrapper));
    }
}
