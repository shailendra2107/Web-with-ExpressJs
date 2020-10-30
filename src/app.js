const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templete_path = path.join(__dirname, "../templetes/views");
const partial_path = path.join(__dirname, "../templetes/partials");

app.set('view engine', 'hbs');
app.set("views", templete_path);
hbs.registerPartials(partial_path)

app.use(express.static(static_path));


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg:"Opps! Page Not Found !!"
    });
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);

})