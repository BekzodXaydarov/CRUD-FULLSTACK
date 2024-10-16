const express = require("express")
require("dotenv").config()
const sequelize = require("./config/database")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const user = require("./routes/user.route")
app.use("/api",user)

const PORT = process.env.PORT || 7585

sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log(`app listening http://localhost:${PORT}`);
    })
})