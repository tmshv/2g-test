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

export default class APITasks extends EndPoint{
    getTasks(params) {
        const url = this.buildUrl(params);
        return this.request.get(url)
            .then(res => res.data)
            .then(JSON.parse);
    }

    buildUrl(params) {
        const query = Object.keys(params)
            .filter(key => params[key] != null)
            .map(key => `${key}=${params[key]}`)
            .join('&');

        return `${this.baseUrl}/api/tasks?${query}`;
    }
}
