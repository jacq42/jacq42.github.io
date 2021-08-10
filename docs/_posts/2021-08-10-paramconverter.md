---
layout: post
title:  ParamConverter
tags: [ Java, Webservice, REST, JaxRs ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Enums als QueryParam

<!--more-->

Werden ENUMs als `@QueryParams` verwendet, müssen die Parameter exakt so heißen, wie die ENUM-Werte. Es gibt keine
Unterscheidung in Groß-, Kleinbuchstaben und auch Bindestriche sind nicht zulässig. Um diese Werte dennoch als Parameter
zu ermöglichen, kann man einen `ParamConverter` verwenden.

```java
import javax.ws.rs.ext.ParamConverter;

public class EnumwertConverter implements ParamConverter<Enumwert> {

	@Override
	public Enumwert fromString(final String value) {
		// Hier der abweichende Code
		return Enumwert.valueOf(value);
	}
	
	@Override
	public String toString(final Enumwert value) {
		return value.toString();
	}
}
```

Um den Konverter zu verwenden, muss er publiziert werden. Dies geschieht mit einem `ParamConverterProvider`.

```java
import javax.ws.rs.ext.ParamConverter;
import javax.ws.rs.ext.ParamConverterProvider;
import javax.ws.rs.ext.Provider;

@Provider
public class EnumwertConverterProvider implements ParamConverterProvider {

	@Override
	public <T> ParamConverter<T> getConverter(final Class<T> rawType, final Type genericType, final Annotation[] annotations) {
		if (rawType.equals(Enumwert.class)) {
			return (ParamConverter<T>)new EnumwertConverter();
		}
		ereturn null;
	}
}
```

Das ist schon die ganze Magic und die Parameter, die mit `@QueryParam` annotiert sind, werden konvertiert.