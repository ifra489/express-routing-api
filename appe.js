const express=require('express');
const app=express();
const userRouter=require('./routes/Userroutes');
const PostRouter = require('./routes/postRoutes');

// Instance  express 
app.use(express.json());
const port=3000;

//Static mock Data
// app.use('/users',userRouter)

// app.use('/posts',PostRouter)
app.use(express.static('public'));
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});