import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());















app.listen(3000, () => {
    console.log('Server is running on port 3000');
});