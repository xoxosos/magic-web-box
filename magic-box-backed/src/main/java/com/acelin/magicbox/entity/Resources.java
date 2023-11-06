package com.acelin.magicbox.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serial;
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
 * @since 2023-07-15 10:32:48
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("resources")
public class Resources implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @TableId("id")
    private Integer id;

    @TableField("name")
    private String name;

    @TableField("link")
    private String link;

    @TableField("type")
    private String type;

    @TableField("category_id")
    private Integer categoryId;

    @TableField("click_count")
    private Integer clickCount;

    @TableField("image")
    private String image;

    @TableField("created_time")
    private LocalDateTime createdTime;

    @TableField("updated_time")
    private LocalDateTime updatedTime;

    @TableField("is_delete")
    private Boolean isDelete;


}
