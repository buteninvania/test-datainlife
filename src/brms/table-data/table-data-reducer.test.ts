import {ChapterDataType, TableDataStateType} from './table-data.types';
import {tableReducer} from './table-data-reducer';
import {calculateTotalAC, changeAmountGoodsAC, setProductsAC} from './table-data-actions';

let initialState: TableDataStateType

beforeEach(() => {
    initialState = {
        chapterList: {},
        total: 0,
        basket: []
    }
})

test('The list of products should be added to the state', () => {
    const list = {
        '218': {
            chapterName:'Манжеты гидравлические для поршня',
            goods: [
                {id: '261',nameGoods: 'K01-P', price: 8377.00,amount: 0, cellTotal: 0},
                {id: '263',nameGoods: 'K02-P', price: 9079.00,amount: 0, cellTotal: 0},
            ]
        },
        '221': {
            chapterName:'Пневматические манжеты',
            goods: [
                {id: '272',nameGoods: 'К05-P', price: 6042.00,amount: 0, cellTotal: 0},
                {id: '316',nameGoods: 'S05-P', price: 2611.00,amount: 0, cellTotal: 0},
            ]
        }
    }

    const newState = tableReducer(initialState, setProductsAC(list))

    expect(newState).not.toBe(initialState)
    expect(Object.keys(newState.chapterList).length).toBe(2)
    expect(Object.keys(newState.chapterList)[0]).toBe('218')
    expect(Object.keys(newState.chapterList)[1]).toBe('221')
    expect(newState.chapterList['218'].chapterName).toBe('Манжеты гидравлические для поршня')
    expect(newState.chapterList['218'].goods[0].cellTotal).toBe(0)
})

test('The number of goods and the amount for the goods in the cell should change, and the total amount will also change', () => {

    const list = {
        '218': {
            chapterName:'Манжеты гидравлические для поршня',
            goods: [
                {id: '261',nameGoods: 'K01-P', price: 8377.00,amount: 0, cellTotal: 0},
                {id: '263',nameGoods: 'K02-P', price: 9079.00,amount: 0, cellTotal: 0},
            ]
        },
        '221': {
            chapterName:'Пневматические манжеты',
            goods: [
                {id: '272',nameGoods: 'К05-P', price: 6042.00,amount: 0, cellTotal: 0},
                {id: '316',nameGoods: 'S05-P', price: 2611.00,amount: 0, cellTotal: 0},
            ]
        }
    }

    const newStateWitchData = tableReducer(initialState, setProductsAC(list))
    //chapterId
    // goodsId
    // amount
    const newStateWitchChangedData = tableReducer(newStateWitchData, changeAmountGoodsAC('218', '261', 1))

    expect(newStateWitchChangedData).not.toBe(newStateWitchData)
    expect(newStateWitchChangedData.chapterList['218'].goods[0].amount).toBe(1)
    expect(newStateWitchChangedData.chapterList['218'].goods[0].cellTotal).toBe(8377.00)
    expect(newStateWitchChangedData.chapterList['218'].goods[1].cellTotal).toBe(0)
    expect(newStateWitchChangedData.chapterList['218'].goods[1].amount).toBe(0)
})

test('Total must be calculated', () => {

    const list = {
        '218': {
            chapterName:'Манжеты гидравлические для поршня',
            goods: [
                {id: '261',nameGoods: 'K01-P', price: 8377.00,amount: 1, cellTotal: 8377.00},
                {id: '263',nameGoods: 'K02-P', price: 9079.00,amount: 0, cellTotal: 0},
            ]
        },
        '221': {
            chapterName:'Пневматические манжеты',
            goods: [
                {id: '272',nameGoods: 'К05-P', price: 6042.00,amount: 1, cellTotal: 6042.00},
                {id: '316',nameGoods: 'S05-P', price: 2611.00,amount: 0, cellTotal: 0},
            ]
        }
    }

    const newStateWitchData = tableReducer(initialState, setProductsAC(list))
    const newStateWitchCalculatedTotal = tableReducer(newStateWitchData, calculateTotalAC())

    expect(newStateWitchCalculatedTotal).not.toBe(newStateWitchData)
    expect(newStateWitchCalculatedTotal.chapterList['218'].goods[0].amount).toBe(1)
    expect(newStateWitchCalculatedTotal.chapterList['218'].goods[0].cellTotal).toBe(8377.00)
    expect(newStateWitchCalculatedTotal.chapterList['218'].goods[1].cellTotal).toBe(0)
    expect(newStateWitchCalculatedTotal.chapterList['218'].goods[1].amount).toBe(0)
    expect(newStateWitchCalculatedTotal.total).toBe(14419.00)
})

