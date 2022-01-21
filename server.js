const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

    sequelize.sync({ force: false }).then(() => {
        app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
    }).catch ((err) => {
    // this will show the error
    console.log('There was an error!', err);
  });
