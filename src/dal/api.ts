import axios, {Method} from 'axios';

export const instance = axios.create({
    baseURL: 'https://datainlife.ru/junior_task/',
});

/*Реализация для санок*/

export const productsAPI = {
    getProducts() {
        return instance.get(`get_products.php`)
            .then(res =>  res.data.map((p:any) =>  ({
                chapterId: p.rid,
                chapterName: p.rname,
                goods: p.goods.map((g: any) => ({id: g.gid, nameGoods: g.gname, price: g.gprice}))
            })));
    }
}



export const apiCall = function (method: Method | undefined, url:string | undefined , data:FormData| undefined = undefined) {

    const onSuccess = function (response:any) {
        console.debug('Request Successful!', response);
        return response.data;
    }

    return instance({method, url, data}).then(onSuccess)

}