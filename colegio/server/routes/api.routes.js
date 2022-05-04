const AsignatureController = require("../controllers/asignature.controller");
const UserController = require('../controllers/user.controller');
const authenticate = require('../config/authenticate');

module.exports = app => {

    app.post("/api/asignature/create/", AsignatureController.createAsignature);
    // app.post("/api/pirate/create/", ApiController.createPirate);
    app.get("/api/asignature/", AsignatureController.getAllAsignature);
    app.get("/api/asignature/:id", AsignatureController.getSingleAsignature);
    app.delete("/api/asignature/delete/:id", AsignatureController.deleteAsignature);
    app.put("/api/asignature/update/:id", AsignatureController.updateAsignature);

    app.post("/api/register", UserController.Register);
    app.post("/api/login", UserController.Login);
    app.post("/api/logout", UserController.Logout);
    //Para acceder a estas rutas hay que estar autenticado.
    app.put("/api/user/update/:id", authenticate, UserController.updateUser);
    app.delete("/api/delete/:id", authenticate, UserController.deleteUser);
    app.get("/api/user", authenticate, UserController.getAll);
    app.get('/api/user/:id', authenticate, UserController.getUser);

  }