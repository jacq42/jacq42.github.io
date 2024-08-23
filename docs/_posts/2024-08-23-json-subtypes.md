---
layout: post
title:  Json Subtypes
tags: [ Java, json, jackson ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

<!--more-->

Die Erstellung von Objekte aus einem Json kann abhängig von einem Parameter sein, der selbst im Json enthalten ist.

Ein einfaches Beispiel nur zur Verdeutlichung: ein Fahrzeug kann entweder ein Auto oder ein Fahrrad sein. Die Unterscheidung erfolgt anhand der Anzahl der Räder.
Je nach Wert des definierten Parameters (Anzahl Räder) soll entweder der eine Typ (Auto) oder ein anderer Typ (Fahrrad) erstellt werden.

In einer OpenApi Definition kann dies mit einer `oneOf` Beziehung und einem `discriminator` angegeben werden:

```json
        vehicle:
            oneOf:
              - $ref: "#/components/schemas/Car"
              - $ref: "#/components/schemas/Bike
            discriminator:
              propertyName: wheelsCount
              mapping:
                TWO: '#/components/schemas/Bike'
                FOUR: '#/components/schemas/Car'
```

Im Sourcecode kann dies mittels Annotation umgesetzt werden:

```kotlin
@JsonTypeInfo(
    use = JsonTypeInfo.Id.NAME,
    include = JsonTypeInfo.As.EXISTING_PROPERTY,
    property = "wheelsCount",
    visible = true
)
@JsonSubTypes(
    JsonSubTypes.Type(value = Car::class, names = ["FOUR"]),
    JsonSubTypes.Type(value = Bike::class, names = ["TWO"])
)
interface VehicleDTO {
    val id: Int
    
    enum class WHEELS_COUNT {
        @JsonProperty("TWO") TWO,
        @JsonProperty("FOUR") FOUR,
    }
}

data class CarDTO @JsonCreator constructor(
    @JsonProperty("id")
    override val id: Int
): VehicleDTO {}

data class BikeDTO @JsonCreator constructor(
    @JsonProperty("id")
    override val id: Int
): VehicleDTO {}
```