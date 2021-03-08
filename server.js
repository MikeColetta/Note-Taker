const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Accesses the public folder to use our JavaScript and CSS
app.use(express.static('public'));

//Grabs our Routes from the routes folder
require('./routes/htmlRoutes')(app);
// require('./routes/apiRoutes')(app);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});