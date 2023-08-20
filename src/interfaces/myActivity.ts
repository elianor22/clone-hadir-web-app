export interface IActivityItem {
  imgUrl?: string
  name: string
  count: string | number
}

export interface IMyactivity {
  data: Array<IActivityItem>
}
