package com.acelin.magicbox.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class CategoriesDto {
    private int id;
    private String name;
    private int parentId;
    private List<CategoriesDto> children;
    public static List<CategoriesDto> buildCategoriesDtoTree(List<CategoriesDto> categories) {
        Map<Integer, CategoriesDto> categoryMap = new HashMap<>();
        List<CategoriesDto> roots = new ArrayList<>();
        // 创建一个以id为键的分类映射表
        for (CategoriesDto category : categories) {
            categoryMap.put(category.id, category);
        }
        // 遍历分类并将子分类分配给父分类
        for (CategoriesDto category : categories) {
            int parentId = category.parentId;
            if (parentId != 0) {
                CategoriesDto parent = categoryMap.get(parentId);
                if (parent != null) {
                    if (parent.children == null) {
                        parent.children = new ArrayList<>();
                    }
                    parent.children.add(category);
                }
            } else {
                roots.add(category);
            }
        }
        return roots;
    }
}
