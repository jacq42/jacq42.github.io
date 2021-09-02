---
layout: post
title:  "Bean Validation"
tags: [ Java, CleanCode, Validierung ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Validierung von Inputparametern

<!--more-->

## Annotation

Beans können mit verschiedenen Annotationen versehen werden, die für die Validierung genutzt werden. Beispiele sind `@Valid`, `@NotNull`, `@Null`, `@Size` oder `@Pattern`

Man kann auch eigene Annotationen erstellen, um einen eigenen Validator zu verwenden. Ein Beispiel folgt weiter unten.

## Integration

Am besten erstellt man einen **ValidationService** und bindet diesen ein über 
```java
@Inject
private ValidationService validationService;

..

validationService.validate(zuValidierendesObjekt);
```
Im Service passiert die Validierung über:
```java
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
Validator validator = factory.getValidator();
Set<ConstraintViolation<T>> violations = validator.validate(entity);
```

## Groups

Ein Objekt kann unterschiedlich validiert werden. Wenn z.B. für Verträge für eine Vertragsart ein Attribut gesetzt werden soll und für eine andere Vertragsart nicht, können Gruppen verwendet werden, um dies umzusetzen.
Dafür werden beim Aufruf der Validierung die Gruppen mitgegeben:
```java
validator.validate(entity, groups);
```
Die Gruppen selbst sind ein einfaches Interface, das an den Beans in die Annotation der Validierung geschrieben werden.
```java
public interface VertragTyp1 {}

public interface VertragTyp2 {}

@NotNull(groups = VertragTyp1.class)
@Null(groups = VertragTyp2.class)
private String variablesAttribut;
```

## Custom Validator

Die Validierung kann auch komplexer werden. Z.B. könnnen von einem Enum nur bestimmte Werte zulässig sein, wenn ein anderes Attribut gesetzt ist. Dann macht es Sinn, einen eigenen Validator zu erstellen.

Für die Verwendung eines eigenen Validators wird eine Annotation erstellt, die an den Beans verwendet wird:
```java
@Target({ElementType.ANNOTATION_TYPE, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = CustomValidator.class)
@Documented
public @interface ValidCustom {

  String eigenerParameter() default "";
  
  String message() default "";
  Class<?>[] groups() default {};
  Class<? extends Payload>[] payload() default {};
}

@ValidCustom(eigenerParameter = "blub")
public class ZuValidierendeKlasse {
..
}
```
Über die Annotation @Target lässt sich konfigurieren, an welchen Stellen die Annotation verwendet werden darf: Klasse, Feld, Parameter etc.

Der Validator sieht dann wie folgt aus:
```java
public class CustomValidator implements ConstraintValidator<ValidCustom, BeanKlasse> {

	String eigenerParameter;
	
	@Override
	public void initialize(ValidCustom contraintAnnotation) {
		eigenerParameter = constraintAnnotation.eigenerParameter();
	}
	
	@Override
	public boolean isValid(BeanKlasse zuValidierendesObjekt, ConstraintValidatorContext context) {
		// hier sollte irgendwas validiert werden
		boolean isValid = buildViolation(context, "field", "super tolle Fehlermeldung", () -> true); 
		return isValid;
	}
	
	private boolean buildViolation(ContraintValidatorContext context, String propertyNode, String msg, Supplier<Boolean> check) {
		if(!check.get()) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(msg).addPropertyNode(propertyNode).addConstraintViolation();
			return false;
		}
		return true;
	}	
}
```

## UnitTest

Testen lässt es sich in einem JUnit Test genau wie die Implementierung des Validierungsservice:
```java
Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

BeanKlasse zuValidierendesObjekt = ...

Set<ConstraintViolation<T>> violations = validator.validate(zuValidierendesObjekt);
assertTrue(violations.isEmpty());
```

Man kann auch durch alle Violations iterieren und nach einer bestimmten Violation anhand des PropertyPath oder der Message suchen.

## Komplexere Validierungen

Beispiel für eine Validierung, die sich selbst als Liste verwendet:
```java
@Target({ElementType.ANNOTATION_TYPE, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = CustomValidator.class)
@Repeatable(ValidCustom.List.class)
@Documented
public @interface ValidCustom {

  String typ() default "";
  String validValue() default = "";
	
  String message() default "";
  Class<?>[] groups() default {};
  Class<? extends Payload>[] payload() default {};
  
  @Target({ElementType.ANNOTATION_TYPE, ElementType.TYPE})
  @Retention(RetentionPolicy.RUNTIME)
  @Documented
  @interface List {
    ValidCustom[] value();
  }
}
```

Verwendung an der Klasse:
```java
@ValidCustom.List({
  @ValidCustom(typ = "blub", validValue = "blub"),
  @ValidCustom(eigenerParameter = "tada", validValue = "bla")
})
public class SuperTolleKlasse {}
```