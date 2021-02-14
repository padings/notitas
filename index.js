const express = require("express");
const app = express();
const path = require("path");

const methodOverride = require("method-override");

const indexRouter = require("./src/routes/router");

app.use(express.json())
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride("_method")); 
app.use(express.static(path.join(__dirname, '/public'))); 

app.use("/", indexRouter);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/src/views")); 

app.listen(3000, function(){
    console.log("El servidor está corriendo en el puerto 3000")
}); 