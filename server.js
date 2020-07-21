const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

app.listen(PORT, () => {

    console.log(`Server listening on: http://localhost:${ PORT}`);
});