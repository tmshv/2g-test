import {Router} from 'express';
import request from 'request';

const router = new Router();
router.get('/api/tasks', (req, res) => {
    const cookie = req.headers.cookie;
    const url = 'http://stage.2g-it.ru' + req.originalUrl;

    console.log(url);
    console.log(cookie);

    request.get(
        {
            url: url,
            headers: {
                'cookie': cookie
            }
        },
        function (error, response, body) {

            console.log(body);

            res.json(body);
        }
    );
});

export default router;