/***********************TableRowCC**************************/
import React, {useEffect, useState} from 'react'
import {TableCell, TableRow} from '@mui/material';
import {useDispatch} from 'react-redux';
import {GoodsDataType} from '../../brms/table-data/table-data.types';
import {calculateTotalAC, changeAmountGoodsAC} from '../../brms/table-data/table-data-actions';

export const TableRowCC: React.FC<TableRowCCPropsType> = ({rowData, chapterId}) => {

    const dispatch = useDispatch()

    const onChangeCallBack = (value: string) => {
        dispatch(changeAmountGoodsAC(chapterId, rowData.id, +value))
        dispatch(calculateTotalAC())
    }

    return (
            <TableRow key={rowData.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                <TableCell scope="row">{rowData.id}</TableCell>
                <TableCell align="right">{rowData.nameGoods}</TableCell>
                <TableCell align="right">{rowData.price}</TableCell>
                <TableCell align="right">
                    <input type="text" value={rowData.amount} onChange={(e) => onChangeCallBack(e.currentTarget.value)}/>
                </TableCell>
                <TableCell align="right">{rowData.cellTotal}</TableCell>
            </TableRow>
    )
}

type TableRowCCPropsType = {
    rowData: GoodsDataType
    chapterId: string
}

/**********************************************************/