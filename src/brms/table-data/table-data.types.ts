export type GoodsDataType = {
    id: string
    nameGoods:string
    price: number
    amount: number
    cellTotal: number
}

export type ChapterDataType = {
    chapterName: string
    goods: Array<GoodsDataType>
}

export type ChapterListType = {
    [chapterId:string]: ChapterDataType
}

export type TableDataStateType = {
    chapterList: ChapterListType
    total: number
    basket: Array<GoodsDataType>
}
