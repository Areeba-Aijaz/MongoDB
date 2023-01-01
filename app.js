const express = require("express")
const mongoose = require("mongoose")
const app = express()
mangoose.set("strictQuery",false);
mongoose.connect("mongodb+srv://admin:admin@cluster0.i6gbwom.mongodb.net/test",{
    useNewurlParser:true,
    useUnifiedTopology:true
},() =>{
    console.log("DB connected...........")
})


app.get('/',(req,res) => {
    res.send("hello world");
});

app.get('/about',(req,res) => {
    res.send("about page");
});
app.get('/details',(req,res) => {
    res.send("detail page....");
});
app.listen(9000);
console.log("server is running at 9000........");