import {AppStateType} from '../store';

export const getProductSectionsSelector = (state: AppStateType) => {
    let productSection = []

    for(let section in state.tableData.chapterList) {
        productSection.push({chapterId: section, chapterName: state.tableData.chapterList[section].chapterName})
    }

    return productSection
}

export const getProductsSelector = (state: AppStateType) => {
    return state.tableData.chapterList
}

export const getSelectedProducts = (state: AppStateType) => {
    let product = []

    for(let section in state.tableData.chapterList) {
        let filteredGoods = state.tableData.chapterList[section].goods.filter(g => g.amount > 0)
        filteredGoods.length > 0 && product.push(...filteredGoods)
    }

    return product
}
