package com.acelin.magicbox.controller;


import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 10:32:48
 */
@RestController
@RequestMapping("/magicbox/resources")
public class ResourcesController {
    final IResourcesService iResourcesService;

    @Autowired
    public ResourcesController(IResourcesService iResourcesService) {
        this.iResourcesService = iResourcesService;
    }
    @GetMapping("/getResource/{id}")
    public Result<List<Resources>> getResources(@PathVariable("id") long id){
        return iResourcesService.getResources();
    }
}
