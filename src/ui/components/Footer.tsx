/***********************Footer**************************/
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../brms/store';
import {GoodsDataType, TableDataStateType} from '../../brms/table-data/table-data.types';
import {addProductAC} from '../../brms/table-data/table-data-actions';

export const Footer: React.FC<FooterPropsType> = ({products}) => {

    const dispatch = useDispatch()

    const state = useSelector<AppStateType, TableDataStateType>(state => state.tableData)

    return (
        <div className='footer'>
            <button onClick={() => dispatch(addProductAC(products))}>Отправить в корзину</button>
            <div>Итог: {state.total}</div>
            {products.length > 0 && products.map(p => <div key={p.id}>ID: {p.id}, название: {p.nameGoods}, колличество: {p.amount}</div>)}
        </div>
    )
}

type FooterPropsType = {
    products: Array<GoodsDataType>
}

/**********************************************************/