Este es mi TP final de la materia de Testing.
Se realizo lo siguiente:

Jira:
    -En Jira se agrego casos de pruebas utilizando la herramienta QAlity.
    -Se realizaron los casos de pruebas de ejemplo que dio la profesora. En jira son  SCRUM-28 y SCRUM-29
    -La tarea era redactar en Jira 4 casos de pruebas. En este TP agregue 6 casos (4 de BackEnd y 2 de FrontEnd)
    -Una vez redactados los casos de pruebas, se realizaron los dichos Tests.
    -En cada caso de prueba en los comentarios, se agregaron las imagenes que prueban que se realizaron los Test.

Cypress:
    -En Cypress en la carpeta e2e se crearon 6 archivos .cy.js los cuales corresponden a los ejercicios de caso de pruebas de Jira.
    -Tambien en la carpera e2e se agregaron los 2 ejercicios de la profesora resueltos.
    -Estos archivos corresponden a 2 de front y 4 de back.
    -Front:
        ~Caso 1: se testeo la lista de deseos del sistema, se va realizando paso a paso. Iniciando sesion, agregando el libro de "Steve Jobs" a lista de deseos, dirigirse a esa lista, agregarlo al carrito y por ultimo elimiarlo de la lista de deseos.
        ~Caso 2: este caso es mas sencillo, simplemente se visita la web a testear, se filta por categoria "Fantasy" y por ultimo se agrega el filtro de precios.
    -Back:
        ~Caso 3: realiza una peticion POST esperando un codigo 200
        ~Caso 4: realiza una peticion GET esperando un codigo 200
        ~Caso 5: realiza una peticion PUT esperando un codigo 405
        ~Caso 6: realiza una peticion DELETE esperando un codigo 200
    -En todos los ejercicios de Cypress, se Refactorizo el codigo de prueba, utilizando fixtures .json, objetos funcionales y se crearon Commands. Todo esto con el fin de mejorar el codigo y que sea reutilizable. 


PD: El caso 1 de pruebas de BE es el de la profesora, el caso 2 de prueba BE no existe, se realizo una idea y luego fue descartada y no se cambio la enumeracion de las pruebas.

PD2: Las imagenes utilizadas como pruebas de que se realizaron los test, son 2, la primera es mostrando el resultado en la consola de cypress mediante una ventana de google chrome y la segunda es mostrando el codigo utilizado, esta ultima imagen es una screenshot del codigo ANTES de refactorizar. 


Espero que el TP cumpla con lo pedido y que le guste! 
Gracias por sus explicaciones, muy buena materia y la profe enseña perfecto!

Atte: Ezequiel Di lallo.
