package com.acelin.magicbox;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@OpenAPIDefinition(
        info=@Info(
                title = "magic-box",
                version = "1.0.0",
                description = "这是后台Api文档",
                termsOfService = "runcodenow",
                contact = @Contact(
                        name = "Ace Lin",
                        email = "xoxosos666@gmail.com"
                ),
                license = @License(
                        name = "license",
                        url = "runcodenow"
                )
        ),
        servers = {
                @Server(
                        description = "local ENV",
                        url = "http://localhost:8090"
                ),
                @Server(
                        description = "PROD ENV",
                        url = "http://106.75.210.243/magic-box"
                )
        }
)
@SpringBootApplication
// Property 'mapperLocations' was not specified.
@MapperScan("com.acelin.magicbox.mapper")
public class MagicBoxApplication {

    public static void main(String[] args) {
        SpringApplication.run(MagicBoxApplication.class, args);
    }

}
