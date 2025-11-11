// import OpenAI from 'openai';
import express from "express";
import 'dotenv/config'; // This helps to access env. variable from .env file

const app = express();
const port = 8080;

// add some basic middlewares that are useful while interacting with frontend 
// app.use(express.json());
// app.use(express.cors());

app.listen(port,()=>{
     console.log(`Server is running on port : ${port}`);
});

// Now we use openAi end-point APIs 
app.get("/home",(req,res)=>{
    res.send("Hi!I am your ai assistant,how may i help you");
})


// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, 
// });

// const response = await client.responses.create({
//   model: 'gpt-4o-mini',
// //   instructions: 'You are a coding assistant that talks like a pirate',
//   input: 'what is coding. why do we need it?? and how does it helps us in build ml model',
// });

// console.log(response.output_text);

