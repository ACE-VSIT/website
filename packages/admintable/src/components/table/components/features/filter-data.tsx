import {IUser} from '../../../../interfaces/user.interface'
import useTableProps from '../../../../contexts/TableContext'

export type FilterType = {
  property: string,
  conditional: string,
  value: string
}

export const getNestedValue = (obj: any, key: string) => {
  const keys = key.split(".")
  let value = obj
  for(let i = 0; i < keys.length; i++) {
    value = value[keys[i]]
  }
  return value
}

// f1, f2, 

export function useDataFilter(filterArray: FilterType[]) {
  const { tableData, setFilteredData } = useTableProps()

  let fd: IUser[] | undefined = []

  if(fd !== undefined && setFilteredData !== undefined) 
    setFilteredData(fd)
}
