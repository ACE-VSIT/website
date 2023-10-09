export interface IToolbarOptions {
  year: string
  category: string
  course: "MCA" | "BCA" | "Other" | ""
}

export interface IToolbar {
  options: IToolbarOptions
  setOptions: React.Dispatch<React.SetStateAction<IToolbarOptions>>
}
