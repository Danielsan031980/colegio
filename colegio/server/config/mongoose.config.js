// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1/pelicula_db", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	//useCreateIndex: true, //make this true

// })
// 	.then(() => console.log("Established a connection to the database"))
// 	.catch(err => console.log("Something went wrong when connecting to the database", err));




const mongoose = require("mongoose");

mongoose.connect(process.env.DB_LINK, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("BASES DE DATOS OPERACIONAL"))
	.catch(err => console.log("Algo salió mal", err));


