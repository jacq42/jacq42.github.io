---
layout: post
title:  Json (De-)Serialization
tags: [ Java, json ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

<!--more-->

Um ein Objekt in einen Json-String zu wandeln und vice versa braucht es einen (De-)Serializer:

Java-Objekt -> Serializer -> Json-String -> Deserializer -> Java-Objekt

Um diesen zu verwenden, muss dieser lediglich am Objekt selbst per Annotation konfiguriert werden:

```java
@JsonSerialize(using = CurrencySerializer.class)
@JsonDeserialize(using = CurrencyDeserializer.class)
```

Gibt es im [Jackson databind](https://github.com/FasterXML/jackson-databind) keinen entsprechenden (De-)Serializer, muss man sich einen
eigenen schreiben.

Um ein Objekt in ein Json zu wandeln, braucht es einen Serializer:
```java
import java.io.IOException;
import java.util.Currency;
import java.util.Objects;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

@SuppressWarnings("serial")
public class CurrencySerializer extends StdSerializer<Currency> {

   public CurrencySerializer() {
     this(null);
   }

   public CurrencySerializer(final Class<Currency> t) {
     super(t);
   }

   @Override
   public void serialize(final Currency currency, final JsonGenerator generator, final SerializerProvider provider) throws IOException {
     if(Objects.nonNull(currency)) {
            generator.writeString(currency.getCurrencyCode());
     }
   }
}
```

Um aus einem Json-String wieder ein Objekt zu erstellen, braucht es einen Deserializer:
```java
import java.io.IOException;
import java.util.Currency;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

@SuppressWarnings("serial")
public class CurrencyDeserializer extends StdDeserializer<Currency> {

   public CurrencyDeserializer() {
     this(null);
   }

   public CurrencyDeserializer(final Class<?> vc) {
     super(vc);
   }

   @Override
   public Currency deserialize(final JsonParser parser, final DeserializationContext ctxt) throws IOException, JsonProcessingException {
     final JsonNode jsonNode = parser.getCodec().readTree(parser);
     final String currencyCode = jsonNode.isValueNode() ? jsonNode.asText() : jsonNode.get("currency").asText();

     final boolean validCurrencyCode = Currency.getAvailableCurrencies().stream()
        .map(Currency::getCurrencyCode)
        .anyMatch(cc -> cc.equals(currencyCode));
     return validCurrencyCode ? Currency.getInstance(currencyCode) : null;
   }
}
```

Dieses Beispiel dient als Vorlage zum Schreiben eines eigenen (De-)Serializers. Für Currency wird kein eigener benötigt, da hierfür
der [FromStringDeserializer](https://github.com/FasterXML/jackson-databind/blob/2.14/src/main/java/com/fasterxml/jackson/databind/deser/std/FromStringDeserializer.java) verwendet werden kann.