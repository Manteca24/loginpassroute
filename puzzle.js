// Snippets de código para poder componer el programa

//Usado?: YES
  const middlewares = require('./middlewares');
//--- Explicación: Importa el módulo 'middlewares' desde el archivo 'middlewares.js' en el 
// mismo directorio. Este módulo probablemente contiene funciones middleware que se utilizan para procesar
// las solicitudes en la aplicación Express. 
// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación:  importa el módulo `body-parser` y lo asigna a la variable `bodyParser`. 
// `body-parser` se usa para analizar el cuerpo de las solicitudes HTTP y extraer datos de formularios y JSON.
// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:  importa el módulo `express-session` y lo asigna a la variable `session`. 
// `express-session` se usa para manejar sesiones en aplicaciones Express, permitiendo almacenar datos del usuario 
// entre solicitudes.
// -------------------------------------------------------------------------------------

//Usado?: YES
const express = require('express');
//--- Explicación: Importa el módulo 'express' y lo asigna a la variable 'express'.
// 'express' es un framework de Node.js para construir aplicaciones web y APIs. 
// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación:  importa el módulo `body-parser` y lo asigna a la variable `bodyParser`. 
// `body-parser` se usa para analizar el cuerpo de las solicitudes HTTP y extraer datos de formularios y JSON.
// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:  importa el módulo `express-session` y lo asigna a la variable `session`. 
// `express-session` se usa para manejar sesiones en aplicaciones Express, permitiendo almacenar datos del usuario 
// entre solicitudes.
// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación: importa el módulo `dotenv`, que se utiliza para cargar variables 
// de entorno desde un archivo `.env` en el entorno de ejecución de Node.js, facilitando así la gestión de configuraciones.
// -------------------------------------------------------------------------------------

//Usado?: YES
const middlewares = require('./middlewares');
//--- Explicación: Importa el módulo 'middlewares' desde el archivo 'middlewares.js' en el 
// mismo directorio. Este módulo probablemente contiene funciones middleware que se utilizan para procesar
// las solicitudes en la aplicación Express. 
// -------------------------------------------------------------------------------------

//Usado?: YES
const routes = require('./routes');
//--- Explicación: Importa el módulo 'routes' desde el archivo 'routes.js' en el mismo 
// directorio. Este módulo probablemente define las rutas y la lógica asociada para la aplicación Express.
// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación: ejecuta la función `config` del módulo `dotenv`, cargando las variables 
// de entorno definidas en un archivo `.env` y haciéndolas disponibles en `process.env` para su uso en la aplicación.
// -------------------------------------------------------------------------------------

//Usado?: YES
const app = express();
//--- Explicación: Crea una instancia de la aplicación Express y la asigna a la variable 'app'.
// Esta instancia se usa para definir rutas y middleware en la aplicación web.
// -------------------------------------------------------------------------------------

//Usado?: YES
const PORT = 4000;
//--- Explicación: define una constante 'PORT' con el valor '4000', que generalmente se usa para 
// especificar el puerto en el que el servidor escuchará las solicitudes. 
// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación: importa el módulo `dotenv`, que se utiliza para cargar variables 
// de entorno desde un archivo `.env` en el entorno de ejecución de Node.js, facilitando así la gestión de configuraciones.
// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación: ejecuta la función `config` del módulo `dotenv`, cargando las variables 
// de entorno definidas en un archivo `.env` y haciéndolas disponibles en `process.env` para su uso en la aplicación.
// -------------------------------------------------------------------------------------

//Usado?: YES
middlewares.setupApp(app);
//--- Explicación: llama a la función `setupApp` del módulo `middlewares`, pasándole la instancia de la 
// aplicación Express (`app`). Esto configura los middlewares necesarios en la aplicación, 
// como el análisis del cuerpo de las solicitudes y el manejo de sesiones.
// -------------------------------------------------------------------------------------

//Usado?: YES
routes.setup(app);
//--- Explicación: llama a la función `setup` del módulo `routes`, pasándole la instancia de la aplicación Express (`app`). 
// Esto configura las rutas y la lógica asociada definidas en el módulo `routes`.
// -------------------------------------------------------------------------------------

//Usado?: YES
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: Esta función validarPalabraMiddleware compara el valor de 'req.body.palabra' con 'palabraCorrecta', 
// que se obtiene de las variables de entorno. 
// Si coinciden, guarda req.body.palabra en la sesión y llama a next(); si no, redirige al usuario a '/?error=1'.
// -------------------------------------------------------------------------------------


//Usado?: YES
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: configura una ruta para el endpoint '/' en la aplicación Express. 
// Verifica si hay un parámetro de error en la consulta y muestra un mensaje basado en él. 
// Si req.session.palabraSecreta existe, redirige al usuario a la ruta /profile. 
// El comentario sugiere que se debe agregar más código dentro de esta función para completar su funcionalidad.


// -------------------------------------------------------------------------------------


//Usado?: YES
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: envía una respuesta HTML que muestra una página de inicio. Incluye un mensaje de error 
// opcional (`mensajeError`), un formulario para introducir una palabra y un botón para enviarla a la 
// ruta `/profile` mediante un POST.
// -------------------------------------------------------------------------------------

//Usado?: YES
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//Explicación: configura middleware para la aplicación Express. Usa `bodyParser` para analizar datos de 
// formularios URL-encoded y `session` para manejar sesiones, configurando un secreto para la sesión 
// y opciones para no reescribir la sesión en cada solicitud y guardar sesiones no inicializadas.
// -------------------------------------------------------------------------------------

//Usado?: YES
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: define una ruta POST para `/profile` en la aplicación Express. Primero, aplica el middleware 
// `validarPalabraMiddleware` para validar la palabra secreta. Si la validación es exitosa, 
// envía una respuesta HTML que muestra un formulario con un botón para cerrar sesión (`/logout`).
// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: configura el middleware `bodyParser` para analizar los datos de los formularios en formato URL-encoded. 
// La opción { extended: true } permite usar objetos anidados en los datos del formulario.
// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: configura el middleware de sesiones para la aplicación Express. 
// Utiliza un secreto de sesión, que puede ser obtenido de las variables de entorno o un valor predeterminado. 
// Establece `resave` en `false` para no guardar la sesión si no ha habido cambios, y `saveUninitialized` en `true` 
// para guardar sesiones nuevas que aún no han sido modificadas.
// -------------------------------------------------------------------------------------

//Usado?: YES
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: inicia el servidor Express para que escuche en el puerto 4000 (en este caso). Al iniciar,
// muestra un mensaje en la consola indicando que el servidor está en ejecución y proporciona la URL para acceder a él. 
// -------------------------------------------------------------------------------------

//Usado?: YES
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: Es un middleware que verifica si 'req.session.palabraSecreta' está presente. 
// Si lo está, llama a next() para pasar al siguiente middleware o ruta; si no, redirige al usuario a '/?error=2'.

// -------------------------------------------------------------------------------------


//Usado?: YES
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: define una ruta GET para `/profile` en la aplicación Express. Primero, aplica el middleware 
// `verificarSesionMiddleware` para verificar la sesión activa. Si la sesión es válida, envía una respuesta HTML 
// que muestra una página de perfil con un formulario para cerrar sesión (`/logout`).

// -------------------------------------------------------------------------------------


//Usado?: YES
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: define una ruta POST para `/logout` en la aplicación Express. Al recibir una solicitud, destruye 
// la sesión del usuario y, en caso de error, lo registra en la consola. Luego, redirige al usuario a la página de inicio ('/').
// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  setup,
};
//--- Explicación: exporta la función 'setup' desde el módulo actual para que pueda ser importada
// y utilizada en otros archivos.
// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación: exporta las tres funciones desde el módulo actual para que puedan ser importadas
// y utilizadas en otros archivos.
// -------------------------------------------------------------------------------------

