const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.set("view engine", "handlebars");

app.use("/bootstrap", express.static(`${__dirname}/node_modules/bootstrap/dist/`));
app.use('/jquery', express.static(`${__dirname}/node_modules/jquery/dist/`));
app.use(express.static(`${__dirname}/public`));

app.engine(
    "handlebars",
    hbs.engine({
        layoutsDir: `${__dirname}/views`,
        partialsDir: `${__dirname}/views/partials`
    })
);

app.listen(3000, () => console.log("Servidor activo http://localhost:3000"));

app.get("/", (req, res) => {
    res.render("main", {
        productos: [
            "banana",
            "cebollas",
            "pimenton",
            "papas",
            "lechuga",
            "tomate"
        ]
    });
});