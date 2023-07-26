package com.acelin.magicbox.service;

import com.acelin.magicbox.entity.Resources;
import com.acelin.magicbox.utils.Result;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;
/**
 * <p>
 *  服务类
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 10:32:48
 */
public interface IResourcesService extends IService<Resources> {
    Result<List<Resources>> getResources(long id);
}
