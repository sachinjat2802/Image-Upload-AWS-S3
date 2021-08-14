import express, { Request, Response, NextFunction } from 'express';
import { uploadToS3 } from './controller/middleware';



const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('pong');
});


router.post('/upload', uploadToS3, function (req, res, next) {
    res.send({
        data: req.files,
        msg: 'Successfully uploaded ' + req.files + ' files!'
    })
})






export default router;