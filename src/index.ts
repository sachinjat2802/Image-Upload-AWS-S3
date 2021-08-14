import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import router from "./routes";



const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.disable('x-powered-by');

app.use(router);





const PORT = process.env.PORT;


app.listen(PORT, () => (console.log(`server is started at ${PORT}`)))