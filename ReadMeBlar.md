# blarteagar's Burger Queen

* [1. Dailys](#1-dailys)
* [2. Objetivos de aprendizaje](#2-objetivos-de-aprendizaje)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Recursos](#4-recursos)

***

## 1. Dailys
01/12/2020 Lectura del README de Burger Queen. Checklist del arranque del proyecto. Checklist de los 
objetivos de aprendizaje. Dibujar en papel los bocetos (de baja fidelidad) de las historias de usuario.
Esquema del JSON del menú.
02/12/2020 Q&A Burger Queen con Mayra: Chequeo del JSON. Recomendó estudiar el flujo de los datos y 
hacer diagramas de estados. Tomar en cuenta los roles desde el principio (bluuweb)
03/12/2020 Mejoramiento del JSON. Fork del repositorio y configuración del remoto en GitHub. Mirar 
Tutoriales de React+Firebase CRUD (Fazt, bluuweb, codigofacilito). Inicio prototipo de alta. Planning de 
los componentes.
04/12/2020 Configurar el proyecto en Firebase, según instrucciones del README. Chequear el arranque de 
la app: Listo, todo bello. Crear mis primeros componentes. Crear carpetas assets, components y data 
para organizar un poco la estructura de carpetas del proyecto. Subir cambios a mi rama "bqblar". 
Planning en GitHub. https://github.com/blarteagar/BOG001-burger-queen/projects/1.
Seguir mirando el video de Fazt.
05/12/2020 Según prototipo en Figma, debería tener una página de bienvenida donde mediante botones 
pueda elegir los tres roles de usuario: 1. mesero tomando orden 2. cocinero viendo pedidos pendientes 
por preparar 3. mesero viendo pedidos pendientes por entregar.
He logrado prototipar en alta fidelidad el flujo de la historia 1, pidiendo desayunos y agregando 
sandwich, cafe con leche, luego quitando el cafe con leche del pedido... 
Y ya. No prototiparé más por el día de hoy.
Hice spike de la renderización de componentes a partir de los JSONs.
Terminaré de ver el video de Fazt, revisaré uno por uno los recursos de React del README.md
06/12/2020 Cumpleaños Carmelita. Trabajaré en el pulimento de MD-Links. No pude hacerlo.
07/12/2020 Daily. Project Feedback MD-Links. Mejorar los commits: usar más verbos descriptivos, subir cualquier funcionalidad por pequeña que sea. Repasar promesas. Usar promise all. Testear MD-Links.  Que este ejercicio permita llevar un mejor tracking de lo que he hecho. OH Maia (Burger Queen): Arreglar fusión de carpetas. Plan general del proyecto. Revisión del JSON de los menú. Roles pueden estar asociados al login. Sigo con el spike sobre roles, React, Firebase, Hooks, CRUD, shopping carts. Planning Sprint 2.




VA QUEDANDO PENDIENTE
Investigar cómo hacer el CRUD con React + Firebase.
Spike sobre roles de usuario.
Spike sobre carritos de mercado. https://github.com/arnab-datta/counter-app.
Investigar qué son diagramas de estados (en REACT-JS).

Comparar las carpetas burgerqueen y burger-queen, con ayuda de algún coach. Listo!
Investigar cómo pintar los JSONs (en REACT-JS). Listo!

## 2. Objetivos de aprendizaje
El objetivo principal de este proyecto es aprender a construir una _interfaz web_
usando el _framework_ elegido (React). Todos estos frameworks de
Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado sincronizados**.
Así que esta experiencia espera familiarizarte con el concepto de _estado de pantalla_,
y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo,
cada vez que agregamos un _producto_ a un _pedido_, la interfaz debe actualizar
la lista del pedido y el total).

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] [Uso de Media Queries.](https://developer.mozilla.org/es/docs/CSS/Media_queries)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y Github

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [ ] [Firestore.](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [ ] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user) | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### React

* [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
* [ ] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
* [ ] `props`
* [ ] [Eventos en React.](https://es.reactjs.org/docs/handling-events.html)
* [ ] [Listas y keys.](https://es.reactjs.org/docs/lists-and-keys.html)
* [ ] [Renderizado condicional.](https://es.reactjs.org/docs/conditional-rendering.html)
* [ ] [Elevación de estados.](https://es.reactjs.org/docs/lifting-state-up.html)
* [ ] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
* [ ] [`CSS` modules.](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
* [ ] [React Router.](https://reacttraining.com/react-router/web)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

### 3. Consideraciones generales
Este proyecto se debe "resolver" de forma individual. Trabaja en una historia hasta terminarla
antes de pasar a la siguiente. Trabaja hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto Sí está permitido usar librerías o frameworks
(elegí [React](https://es.reactjs.org/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

Necesitamos pensar bien en el aspecto UX de de quienes van a tomar los pedidos,
el tamaño y aspecto de los botones, la visibilidad del estado actual del pedido, etc.

La aplicación desplegada debe tener 80% o más en las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Este proyecto incluye un _boilerplate_ con el código necesario para arrancar con
la parte de backend ya resuelta. El _boilerplate_ incluye los siguientes
archivos/carpetas con la configuración de Fierbase (hosting y firestore):

```text
.
├── .editorconfig
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── README.md
└── README.pt-BR.md
```

Por otro lado, la parte de la interfaz no está incluida, por lo que, deberás
definir la estructura de carpetas y archivos que consideres necesaria. Puedes
guiarte de las convenciones del _framework_ elegido. Por ende, los _tests_ y el
_setup_ necesario para ejecutarlos, serán hechos por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

### Despliegue

Cada framework incluye su propio _pipeline_ de _construcción_ o _build_. Con
esto nos referimos a que para _construir_ nuestro proyecto y producir un
_artefacto_ que podamos desplegar vamos a usar usar un script que normalmente
configuramos como una tarea de `npm-scrips` con el nombre `build` e invocamos
así:

```sh
npm run build
```

Una vez hayamos _construido_ la aplicación, tendremos un directorio que contiene
la app lista para desplegar. Dependiendo del framework que uses y tu
configuración en particular, esa carpeta puede tener un nombre distinto;
normalmente `build` o `dist`.

La herramienta de línea de comando de Firebase (`firebase-tools`) incluye un
comando que nos permite desplegar nuestro proyecto a Firebase:
`firebase deploy`. A la hora de ejecutar este comando, se usará la configuración
que tenemos en el archivo `firebase.json`. En ese archivo asegúrate de que la
_propiedad_ `public` del _objeto_ `hosting` tenga la ruta correcta a la carpeta
donde hemos _construido_ la aplicación. En este ejemplo es implemente `build`,
asumiendo que la carpeta `build` es una subcarpeta del directorio donde se
encuentra nuestro `firebase.json`.

```json
  ...
  "hosting": {
    "public": "build",
    ...
  },
  ...
```

Finalmente, estás lista para desplegar tu proyecto a Firebase :rocket::fire:!

```sh
firebase deploy
```

***

### 4. Recursos

#### Frameworks / libraries

* [React](https://es.reactjs.org/)

#### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

#### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

#### Serverless

* [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
* [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

#### Recursos que me han servido

* [Curso React Udemy por Bluuweb](https://bluuweb.github.io/react-udemy/)
* [Aplicación CRUD React+Firestore+Hooks por Bluuweb](https://www.youtube.com/watch?v=8rLs-AGn4go)
* [Curso React and Hooks por Bluuweb Youtube playlist](https://www.youtube.com/watch?v=Di4eAxkPNp0&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD)
* [React+Firebase CRUD por Fazt Youtube](https://www.youtube.com/watch?v=Y9-UkL6ent4&t=768s)
* [Load and Render JSON Data into React Components](https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components)

