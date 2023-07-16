package com.acelin.magicbox.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author Ace Lin
 * @since 2023-07-15 10:31:40
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("categories")
public class Categories implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("id")
    private Integer id;

    @TableField("name")
    private String name;

    @TableField("description")
    private String description;

    @TableField("parent_id")
    private Integer parentId;

    @TableField("is_parent")
    private Boolean isParent;

    @TableField("created_time")
    private LocalDateTime createdTime;

    @TableField("updated_time")
    private LocalDateTime updatedTime;

    @TableField("status")
    private String status;

    @TableField("is_delete")
    private Boolean isDelete;


}
