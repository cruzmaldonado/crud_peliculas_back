const express =require("express");

const app=express()



const initModels=require("./models/initModel");

const db =require("./utils/database")

const productRouter=require("./products/products.router")


// validar la DB
db.authenticate()
.then(()=>console.log("DB authenticate succesfully"))
.catch((err) => console.log(err))

// sincronizar la DB
db.sync()
.then(()=> console.log("Database synced"))
.catch(err=>console.log(err))

// llamada al initModels
initModels()


const {port}=require("./config")

app.use(express.json())

app.use("/products",productRouter)

app.get("/", (req,res)=>{
    res.status(200).json({message: "OK"})
})

app.listen(9000, () =>{
    console.log(`Server startet at port ${port}`)
})