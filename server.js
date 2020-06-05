// index.js

/**
 * Required External Modules
 */
const express=require('express')
const path = require("path");

/**
 * App Variables
 */
app=express()
const port = process.env.PORT || "3000"
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(available=(req,res,next)=>{
    const day= new Date()
    console.log(day.getHours())
    if((day.getDate()==(1||6))||day.getHours()<9||day.getHours()>=17) 
    res.send("Sorry,this web site is only available in working time (Monday to Friday,  from 9 to 17) Thank you for your understanding ")
    else
    next()
})
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
  });
  app.get("/home", (req, res) => {
    res.render("home", { title: "Home" });
  });
  app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
  });
  app.get("/services", (req, res) => {
    res.render("services", { title: "Services" });
  });
/**
 * Server Activation
 */
app.listen(port,()=>{ console.log(`server is running in port ${port}`)
})


