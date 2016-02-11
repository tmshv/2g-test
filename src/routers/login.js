import {Router} from 'express';
import request from 'request';

const router = new Router();
router.post('/api/user/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const token = req.headers['token'];

    request.post(
        {
            url: 'http://stage.2g-it.ru/api/user/login',
            form: {
                email: email,
                password: password
            },
            headers: {
                'Token': token
            }
        },
        function (error, response, body) {
            const c = response.headers['set-cookie'];

            res.cookie(c);
            res.json(body);
        }
    );
});

export default router;