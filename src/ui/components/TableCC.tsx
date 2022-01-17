/***********************Table**************************/
import React, {useState} from 'react';
import {ChapterDataType} from '../../brms/table-data/table-data.types';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {TableRowCC} from './TableRowCC';

export const TableCC: React.FC<TablePropsType> = ({products, chapterId}) => {

    console.log('table')

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align={'center'} colSpan={5}>{products.chapterName}</TableCell>
                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Название товара</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Количество</TableCell>
                        <TableCell align="right">Сумма</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.goods.map((row) => <TableRowCC chapterId={chapterId} key={row.id} rowData={row}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

type TablePropsType = {
    products: ChapterDataType
    chapterId: string
}

/**********************************************************/