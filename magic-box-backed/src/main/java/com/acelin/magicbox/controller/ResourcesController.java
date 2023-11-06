package com.acelin.magicbox.controller;


import com.acelin.magicbox.entity.Resources;
import com.acelin.magicbox.service.IResourcesService;
import com.acelin.magicbox.utils.Result;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 10:32:48
 */
@RestController
@RequestMapping("/resources")
public class ResourcesController {
    final IResourcesService iResourcesService;

    @Autowired
    public ResourcesController(IResourcesService iResourcesService) {
        this.iResourcesService = iResourcesService;
    }

    /**
     *
     * @param id id
     */
    @GetMapping("/getResource")
    public Result<List<Resources>> getResources(@RequestParam("id") long id){
        System.out.println(id);
        return iResourcesService.getResources(id);
    }
}
