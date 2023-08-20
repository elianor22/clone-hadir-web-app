export interface IHistoryItem {
  imgUrl?: string
  fullname: string
  time: string
  type: string
}

export interface IHistory {
  data: IHistoryItem[]
}
