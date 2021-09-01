---
layout: post
title:  "Bean validation"
tags: [ Java, CleanCode, Validierung ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Validierung von Inputparametern

<!--more-->

## Annotation

Beans können mit verschiedenen Annotationen versehen werden, die für die Validierung genutzt werden. Beispiele sind `@Valid`, `@NotNull`, `@Null`, `@Size` oder `@Pattern`

Man kann auch eigene Annotationen erstellen, um einen eigenen Validator zu verwenden.

## Integration

Am besten erstellt man einen ValidationService und bindet diesen ein über 
```java
@Inject
private ValidationService validationService;

..

validationService.validate(zuValidierendesObjekt);
```
Im Service passiert die Validierung über:
```java
ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
Validator validator = factory.getValidator();
Set<ConstraintViolation<T>> violations = validator.validate(entity);
```

## Groups

Ein Objekt kann unterschiedlich validiert werden. Wenn z.B. für Verträge in einem Fall ein Attribut gesetzt werden soll und für eine andere Vertragsart nicht, können Gruppen verwendet werden, um dies umzusetzen.
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
```

## Custom Validator

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
```
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

Testen lässt es sich in einem JUnit Test:
```java
Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

BeanKlasse zuValidierendesObjekt = ...

Set<ConstraintViolation<T>> violations = validator.validate(zuValidierendesObjekt);
assertTrue(violations.isEmpty());
```

Man kann auch durch alle Violations iterieren und nach einer bestimmten Violation anhand des PropertyPath oder der Message suchen.

## Komplexere Validierungen

tbd
