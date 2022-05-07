const expresss = require('express');
const app = express();
const hbs = require('express-handlebars');

app.set("view-engine", "handlebars");

app.use("/bootstrap", express.static(`${__dirname}/node_modules/bootstrap/dist/`))

app.engine(
    "handlebars",
    hbs.engine({
        layoutsDir: `${__dirname}/views`,
        partialsDir: `${__dirname}/views/partials`
    })
);

app.listen(3000, () => console.log("Servidor activo http://localhost:3000"));

app.get("/", (req, res) => {
    res.render("main");
});