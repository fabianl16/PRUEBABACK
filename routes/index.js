const userRouter = require('./users.router')
function routerApi(app) {
    app.use('/user',userRouter);
}
module.exports = routerApi;

//Se creo una función que recine la app como parametro  para modularizar
//Les agrega un prefijo a las rutas 