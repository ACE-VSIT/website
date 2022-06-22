export interface INavbar {
  img: string
  userImg: string
  itemList: IItemList[]
}

export interface IItemList {
  url: string
  text: string
  target: '_blank' | '_self'
}
