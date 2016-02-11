//@apiParam {Number} [limit=200] Кол-во объектов на странице
//@apiParam {Number} [skip=0] Отступ от начала
//@apiParam {String} sort поле для сортировки(id,date,updatedAt,status)
//@apiParam {String} sortType тип сортировки (ASC or DESC)
//@apiParam {String} dateFrom  Срок исполнения задачи С (строка YYYY-MM-DD)
//@apiParam {String} dateTo  Срок исполнения задачи По (строка YYYY-MM-DD)
//@apiParam {Array} status  Массив статусов задачи ("new" - новая, "progress" -  в работе, "done" - Выполнена, "check" - На проверке, "date" - Перенос срока) - статусы относятся к исполнителю
//@apiParam {Number} no_date  Фильтр по дате (по умолчанию 0. установить 1, если нужны задачи без дат)
//@apiParam {Number} responsible  ID исполнителя
//@apiParam {Number} author  ID автора

import EndPoint from './EndPoint';

export default class APIUser extends EndPoint {
    constructor(request, broadcast) {
        super(request, broadcast);

        try{
            this.setProfile(JSON.parse(localStorage.getItem('user')));
        }catch (e){
            console.log(e);
        }
    }

    login(email, password, token) {
        const data = {
            email: email,
            password: password
        };
        const options = {
            headers: {
                'Token': token
            }
        };

        return this.request.post('/api/user/login', data, options)
            .then(res => res.data)
            .then(data => JSON.parse(data))
            .then(data => {
                this.setProfile(data);
                return data;
            });
    }

    setProfile(data){
        localStorage.setItem('user', JSON.stringify(data));
        this.profile = data;
        this.broadcast('user', data);
    }
}
