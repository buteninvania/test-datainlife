import {TableDataStateType} from './table-data.types';
import {ACTIONS_TYPE, TableDataActionsType} from './table-data-actions';

const initialState:TableDataStateType = {
    chapterList: {},
    total: 0,
    basket: []
}

export const tableReducer = (state: TableDataStateType = initialState, action: TableDataActionsType): TableDataStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_AMOUNT_GOODS_TYPE:
            return {
                ...state,
                chapterList: {
                    ...state.chapterList,
                    [action.payload.chapterId]: {
                        ...state.chapterList[action.payload.chapterId],
                        goods: state.chapterList[action.payload.chapterId].goods
                            .map(g => g.id === action.payload.goodsId
                                ? {...g, amount: action.payload.amount, cellTotal: action.payload.amount * g.price} : g)
                    }
                }
            }
        case ACTIONS_TYPE.SET_PRODUCTS:
            return {...state, chapterList: action.payload.chapterList}
        case ACTIONS_TYPE.CALCULATE_TOTAL:
            let totalsInRows: Array<number> = []
            for (let chapterId in state.chapterList) {
                totalsInRows = [...totalsInRows, ...state.chapterList[chapterId].goods.map(g => g.cellTotal !== 0 ? g.cellTotal : 0)]
            }
            return {...state, total: totalsInRows.reduce((cur, prev) => cur + prev)}
        default:
            return state
    }
}


