package com.acelin.magicbox.utils;


import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.generator.FastAutoGenerator;
import com.baomidou.mybatisplus.generator.config.*;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;
import com.baomidou.mybatisplus.generator.fill.Column;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class MybatisPlusGenerator {
    public static void main(String[] args) {
        //数据库表的设置
        List<String> listTable = Arrays.asList("resources");  //设置需要自动代码生成的表名
        List<String> listTableSuffix = Collections.singletonList("_b");    //设置 过滤 表的后缀
        List<String> listTablePrefix = Arrays.asList("t_", "c_"); //设置 过滤 表的后缀

        //基本信息
        String author = "Ace Lin";    //作者
        String parent = "com.acelin";   //父包名
        String module = "magicbox";   //模块包名
        FastAutoGenerator.create("jdbc:mysql://xxx:3306/magic-box?serverTimezone=Asia/Shanghai&useSSL=false", "magic-box", "eT2nDtDhYbjTyMeH")
                // 全局配置
                .globalConfig(builder -> {
                    builder.author(author) // 设置作者
                            //.enableSwagger() // 开启 swagger 模式
                            .fileOverride() // 覆盖已生成文件
                            .commentDate("yyyy-MM-dd hh:mm:ss").outputDir(System.getProperty("user.dir") + "/src/main/java") // 指定输出目录
                            .disableOpenDir();   //禁止打开输出目录，默认打开
                })
                // 包配置
                .packageConfig(builder -> {
                    builder.parent(parent) // 设置父包名
                            .moduleName(module) // 设置父包模块名
                            // .service()  // 设置自定义service路径,不设置就是默认路径
                            .pathInfo(Collections.singletonMap(OutputFile.mapperXml, System.getProperty("user.dir") + "/src/main/resources/mapper/")); // 设置mapperXml生成路径
                })
                // 模板配置
//                .templateConfig(builder -> {
//                    builder.mapperXml("");   // 不生成xml文件，可根据需要自行调整
//                })
                // 策略配置
                .strategyConfig(builder -> {
                    builder.addInclude(listTable) // 设置需要生成的表名
                            .addTableSuffix(String.valueOf(listTableSuffix)).addTablePrefix(String.valueOf(listTablePrefix))// 设置过滤表前缀
                            .enableSkipView() //创建实体类的时候跳过视图
                            //4.1、实体类策略配置
                            .entityBuilder().enableChainModel() //开启链式模型
                            .enableTableFieldAnnotation()       // 开启生成实体时生成字段注解
                            .enableLombok() //开启 Lombok
                            .logicDeleteColumnName("deleted")   //逻辑删除字段名(数据库)
                            .logicDeletePropertyName("deleteFlag")  //逻辑删除属性名(实体)
                            // 添加表字段填充，"create_time"字段自动填充为插入时间，"modify_time"字段自动填充为插入修改时间
                            .addTableFills(new Column("create_time", FieldFill.INSERT), new Column("update_time", FieldFill.INSERT_UPDATE))
                            //4.2、Controller策略配置
                            .controllerBuilder().enableRestStyle();  //开启生成 @RestController 控制器
                }).templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker引擎模板，默认的是Velocity引擎模板
                // 执行代码生成
                .execute();
    }
}
