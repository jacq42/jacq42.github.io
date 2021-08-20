---
layout: post
title:  "API Dokumentation"
tags: [ Java, Gradle, API, Documentation ]
author: jacq42
excerpt_separator: <!--more-->
lastupdate: 2021-08-20
#color: rgb(0, 100,100)
---

Wie erstellt man auf einfachem Wege eine Doku der API?

<!--more-->
 
Dokumenation mit [OpenApi](https://www.openapis.org/)

Beteiligte: 
* [Swagger](https://swagger.io/): Erstellen der Dokumenation
* [Springfox](https://github.com/springfox/springfox): Integration von Swagger in Spring Projekten
* [Swagger2Markup](https://github.com/Swagger2Markup): Wandelt eine Swagger Doku in Asciidoc oder Github flavored Markup
* [Asciidoc](http://asciidoctor.org/): Asciidoc mit Wandlung in HTML, PDF, ...

## Integration in Java

Über Springfox kann Swagger in Spring Projekten verwendet werden. Stand der Beispiele war Version 2.9.2 von Springfox.

### Gradle 

```groovy
	// Springfox Swagger
    compile "io.springfox:springfox-swagger2:${springFoxVersion}"
    compile "io.springfox:springfox-spring-web:${springFoxVersion}"
    compile "io.springfox:springfox-core:${springFoxVersion}"
    compile "io.springfox:springfox-spi:${springFoxVersion}"
    compile "io.swagger:swagger-annotations:1.5.22"
```

### SwaggerConfig

SwaggerConfiguration.java:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.time.LocalDate;

@EnableSwagger2
@PropertySource({"classpath:swagger.properties"})
@Configuration
@ProfileNonProd
@ProfileNonTest
class SwaggerConfiguration {

    ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("App Title")
                .description("App Description")
                .license("Copyright")
                .licenseUrl("http://www.example.de/license")
                .termsOfServiceUrl("")
                .version("1.0.0")
                .contact(new Contact("", "", "admin@example.de"))
                .build();
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("packagename.rest.v1"))
                .build()
                .directModelSubstitute(LocalDate.class, java.util.Date.class)
                .apiInfo(apiInfo());
    }
}
```

in den swagger.properties steht z.B.:
```
springfox.documentation.swagger.v2.path=/api/v1/api-docs
```

### Annotation an den Controllern

* @Api describes the whole controller
* @ApiOperation is used for description on a methods level
* @ApiParam is used for method parameters

Der gesamte Controller kann konfiguriert werden mit:
```java
@Api("Beschreibung des Controllers")
```
Die einzelnen REST Operationen (GET, POST, DELETE etc.) im Controller können wie folgt konfiguriert werden:
```java
@ApiOperation(value = "Versionsinformationen", response = Version.class)
```
Parallel zum @RequestParam kann ein @ApiParam gesetzt werden:
```java
@ApiParam(name = "plattform", required = true, allowableValues = "android,ios")
```

## Editor

Mit Springfox kann man ein JSON File der Schnittstelle erstellen lassen: `http://localhost:8080/api/v1/api-docs` (siehe swagger.properties)

Man kann den [Editor](https://editor.swagger.io/) von Swagger online nutzen, indem man das generierte JSON importiert (File > Import file).

## Asciidoctor

Wenn man die Dokumentation der API auch in einer Asciidoc Doku verwenden möchte (z.B. einer technischen Doku), kann man dies mit Swagger2Markup tun. Dafür gibt es hier im Moment keine Beispiele, da bisher nicht verwendet.