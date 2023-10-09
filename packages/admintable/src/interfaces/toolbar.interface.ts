export interface IToolbarOptions {
  year: string
  category: string
  course: "MCA" | "BCA" | ""
}

export interface IToolbar {
  options: IToolbarOptions
  setOptions: React.Dispatch<React.SetStateAction<IToolbarOptions>>
}
