
# MIDAS FRONT TEST VAZQUEZ


**Para correr la aplicacion:** 
* Clonar el repositorio, dentro del mismo ejecutar comando `npm install`.
* Una vez instalado podemos proceder a ejecutar el comando `npm start`.
* La aplicacion se abrira por defecto en el puerto 3000. http://localhost:3000

La aplicacion cuenta con 3 pantallas:
Detector de mutante, Crear nuevo mutante y Mis mutantes, estiladas a partir de los diseños dados.

**Consideraciones:**
En la pantalla Detector de mutante se debera ingresar una secuencia de adn valida para ser enviada al endpoint dado, sino nos enviara un mensaje de error.
En la pantalla de crear un nuevo mutante se debe ingresar un nombre distinto para cada mutante.

**Cosas a mejorar:** 
La aplicacion no es responsive, si bien fue estilada con flexbox no cuenta con breakpoints.
Los estilos podrian refactorizarse a css modules para mas practicidad.
Si la aplicacion crece deberia considerarse reemplazar context por redux.
Si la aplicacion crece deberia considerarse crear un routeFactory para las rutas.
Deberian realizarse tests unitarios sobre los componentes.
