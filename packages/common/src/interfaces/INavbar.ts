export interface INavbar {
  img: string
  userImg: string
  itemList: IItemList[]
  profileList?: IProfileList[]
}

export interface IItemList {
  url: string
  text: string
  target: '_blank' | '_self'
}

export interface IUserProfileList {
  profileList: IProfileList[]
  setState: (e: boolean) => void
}

export interface IProfileList {
  name: string
  onClick: (e?: any) => void
}
