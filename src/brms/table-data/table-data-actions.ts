import {ChapterListType, GoodsDataType} from './table-data.types'

export enum ACTIONS_TYPE {
    CHANGE_AMOUNT_GOODS_TYPE = 'TableData/CHANGE_AMOUNT_GOODS_TYPE',
    SET_PRODUCTS = 'TableData/SET_PRODUCTS',
    CALCULATE_TOTAL = 'TableData/CALCULATE_TOTAL',
    GET_PRODUCTS = 'TableData/GET_PRODUCTS',
    ADD_PRODUCT = 'TableData/ADD_PRODUCT'
}

export type ChangeAmountGoodsActionType = {
    type: ACTIONS_TYPE.CHANGE_AMOUNT_GOODS_TYPE
    payload: {
        chapterId: string
        goodsId: string
        amount: number
    }
}
export type SetProductsActionType = {
    type: ACTIONS_TYPE.SET_PRODUCTS
    payload: {
        chapterList: ChapterListType
    }
}
export type CalculateTotalActionType = { type: ACTIONS_TYPE.CALCULATE_TOTAL, payload: {}}
export type GetProductsActionType = {type: ACTIONS_TYPE.GET_PRODUCTS}
export type AddProductActionType = {type: ACTIONS_TYPE.ADD_PRODUCT, payload:{selectedProducts:GoodsDataType[]}}


export const changeAmountGoodsAC = (chapterId: string, goodsId: string, amount: number): ChangeAmountGoodsActionType => ({
    type: ACTIONS_TYPE.CHANGE_AMOUNT_GOODS_TYPE,
    payload: {chapterId, goodsId, amount}
})
export const setProductsAC = (chapterList: ChapterListType): SetProductsActionType => ({
    type: ACTIONS_TYPE.SET_PRODUCTS,
    payload: {chapterList}
})
export const calculateTotalAC = ():CalculateTotalActionType => ({type: ACTIONS_TYPE.CALCULATE_TOTAL, payload: {}})
export const getProductsAC = ():GetProductsActionType => ({type: ACTIONS_TYPE.GET_PRODUCTS})
export const addProductAC = (selectedProducts:GoodsDataType[]): AddProductActionType => ({type: ACTIONS_TYPE.ADD_PRODUCT, payload:{selectedProducts}})

export type TableDataActionsType = ChangeAmountGoodsActionType | SetProductsActionType | CalculateTotalActionType | AddProductActionType