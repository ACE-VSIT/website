import { IUser } from '../../../interfaces/user.interface'

type FilterHelperProps = {
  data: IUser[]
  property: string
  token: string
}

export const getNestedValue = (obj: any, key: string) => {
  const keys = key.split('.')
  let value = obj
  for (let i = 0; i < keys.length; i++) {
    value = value[keys[i]]
  }
  return value
}

export const filterEquals = ({ data, property, token }: FilterHelperProps) => {
  let filteredData: IUser[] = data.filter(obj => {
    return getNestedValue(obj, property) === token
  })
  return filteredData
}

export const filterNotEquals = ({
  data,
  property,
  token,
}: FilterHelperProps) => {
  let filteredData: IUser[] = data.filter(obj => {
    return getNestedValue(obj, property) !== token
  })
  return filteredData
}

export const filterIncludes = ({
  data,
  property,
  token,
}: FilterHelperProps) => {
  let filteredData: IUser[] = data.filter(obj => {
    return getNestedValue(obj, property)?.toLowerCase()?.includes(token)
  })
  return filteredData
}

export const filterNotIncludes = ({
  data,
  property,
  token,
}: FilterHelperProps) => {
  let filteredData: IUser[] = data.filter(obj => {
    return !getNestedValue(obj, property)?.toLowerCase()?.includes(token)
  })
  return filteredData
}
