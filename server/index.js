import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors(
   {
    origin: ['http://localhost:5173',

    'http://localhost:5174',
    'http://localhost:3000',
     // add production URL here when deploying

      ],
      credentials: true,
      //methods: ['GET', 'POST'],
     // allowedHeaders: ['Content-Type', 'Authorization'],

   }
));
app.use(express.json());

// API route
app.get("/api/message" , (req,res)=>{
    res.json({message: "Hello from the server!"});
});

const PORT = 4000;
app.listen(PORT, "0.0.0.0" ,  () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});