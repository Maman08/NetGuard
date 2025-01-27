import express from 'express';
const app=express();
const PORT=8000;
app.use(express.json());
app.get('/',()=>{
    console.log("Hello i am up")
})
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
})