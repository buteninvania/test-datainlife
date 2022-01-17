import {call, put, takeEvery} from 'redux-saga/effects'
import {apiCall} from '../dal/api';
import {AddProductActionType, GetProductsActionType, setProductsAC} from './table-data/table-data-actions';
import {ChapterListType} from './table-data/table-data.types';

function* fetchProducts(action:GetProductsActionType): Generator {
    try {
        let chapterList: ChapterListType = {}
        let response = yield call(apiCall, 'GET', 'get_products.php')
        // @ts-ignore
        response.forEach((p: any) => {
            chapterList[p.rid] = {
                chapterName: p.rname,
                goods: p.goods.map((g: any) => ({id: g.gid, nameGoods: g.gname, price: g.gprice, amount: 0, cellTotal: 0}))
            }
        })
        yield put(setProductsAC(chapterList));
    } catch (e) {
        console.log(e)
    }
}

function* addToShoppingCart(action:AddProductActionType): Generator {
    try {
        const requestBody = new FormData();
        action.payload.selectedProducts.forEach(p => requestBody.append(p.id, String(p.amount)))
        let response = yield call(apiCall, 'POST', 'add_basket.php', requestBody)
        debugger
        // @ts-ignore
        alert(`Ответ: ${response.success} Товары добавлены `)
    } catch (e) {
        console.log(e)
    }
}

export function* mySaga() {
    yield takeEvery('TableData/GET_PRODUCTS', fetchProducts);
    yield takeEvery('TableData/ADD_PRODUCT', addToShoppingCart);
}