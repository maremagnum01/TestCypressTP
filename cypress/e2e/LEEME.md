# Trabajo Práctico Final – Testing

Este proyecto corresponde al Trabajo Práctico Final de la materia Testing.  
El objetivo fue aplicar los conocimientos adquiridos en la cursada utilizando Jira y Cypress para la planificación, ejecución y automatización de casos de prueba.

---

## Contenido del trabajo

### Jira

En Jira se realizaron las siguientes tareas:

- Se agregaron casos de prueba utilizando la herramienta QAlity.
- Se ejecutaron los casos de prueba de ejemplo proporcionados por la profesora:
  SCRUM-28 y SCRUM-29.
- La consigna solicitaba redactar 4 casos de prueba, pero se agregaron 6 casos en total:
  - 4 de BackEnd  
  - 2 de FrontEnd
- Una vez redactados los casos, se realizaron los tests correspondientes.
- En cada caso de prueba se adjuntaron imágenes en los comentarios que demuestran la ejecución exitosa de los tests.

---

### Cypress

En Cypress, dentro de la carpeta e2e, se desarrollaron 6 archivos con extensión .cy.js, correspondientes a los casos de prueba creados en Jira.

También se agregaron los 2 ejercicios de ejemplo de la profesora, totalmente resueltos.

#### Estructura de pruebas

FrontEnd:
- Caso 1:  
  Se testeó la lista de deseos del sistema paso a paso: iniciar sesión, agregar el libro "Steve Jobs" a la lista de deseos, ir a la lista, agregarlo al carrito y eliminarlo de la lista de deseos.  
- Caso 2:  
  Se visitó la web a testear, se filtró por categoría "Fantasy" y luego se aplicó el filtro de precios.

BackEnd:
- Caso 3: Petición POST, esperando código 200.  
- Caso 4: Petición GET, esperando código 200.  
- Caso 5: Petición PUT, esperando código 405.  
- Caso 6: Petición DELETE, esperando código 200.

#### Refactorización del código

- Se refactorizó todo el código de prueba.
- Se implementaron archivos fixtures .json, objetos funcionales y commands personalizados.
- Esto permitió mejorar la legibilidad, reutilizar código y mantener una estructura limpia y escalable.

---

## Evidencias de ejecución

Se utilizaron dos imágenes principales para evidenciar la ejecución de los tests:

1. Resultado en consola de Cypress, mostrando la ejecución exitosa mediante Google Chrome.  
2. Código fuente utilizado, screenshot tomado antes de la refactorización.

---

## Aclaraciones

- El caso 1 de BackEnd corresponde al ejemplo de la profesora.  
- El caso 2 de BackEnd fue una idea descartada, por lo que no se modificó la numeración final de las pruebas.

---

## Agradecimientos

Espero que el trabajo práctico cumpla con lo solicitado y sea de su agrado.  
Muchas gracias por las explicaciones durante la cursada.  
Excelente materia y una profesora que enseña de manera clara y práctica.  

Atentamente,  
Ezequiel Di Lallo
