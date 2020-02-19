const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema');
const cors = require('cors');
const path = require('path')

const app = express();

//Allow cross-origin
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === "production"){
    app.use(express.static( 'client/build'))

    app.get('*', () => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')) // relative path
    })
}


app.listen(PORT, () => console.log(`server started on port ${PORT}`))