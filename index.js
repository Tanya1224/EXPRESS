const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const router=require("./userRoutes")

const app=express();
const port=4000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(router);



//get read the data
app.get("/",(req,res)=>{
    //console.log(path.join(__dirname+"/index.html"));
    res.sendFile(path.join(__dirname + "/index.html"));
});


// app.get("/api/v1/userdata", (req,res)=>{
//     res.json({
//         name:"Abhi",
//         email:"samle@gmail.com",
//         password:"bhunji",
//     });
// });




// app.post("/api/v1/register",(req,res)=>{
//   const userame=  req.body.name;
//   const userEmail=req.body.email;
//   const userPassword=req.body.password;

//     res.json({
//         success:true,
//     });

// });


   
//post create the data
// app.post("/api/v1/login",(req,res)=>{
//     res.send(`<h1>DONE mr. ${req.body.name}</h1> <h2>Your Email is ${req.body.email}</h2> <h2>Your Password is ${req.body.password}</h2>`);
//    console.log(req.body);
// });



app.listen(port,()=>{
    console.log(`Server is rumming on port: ${port}`);
});