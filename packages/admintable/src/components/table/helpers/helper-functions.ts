import { IUser } from '../../../interfaces/user.interface'

type FilterHelperProps = {
  data: IUser[]
  property: string
  token: string
}

export const getNestedValue = (obj: any, key: string) => {
  const keys = key.split('.')
  let value = obj
  for (let i = 0; i < keys.length; i += 1) {
    value = value[keys[i]]
  }
  return value
}

export const filterEquals = ({ data, property, token }: FilterHelperProps) => {
  const filteredData: IUser[] = data.filter(
    obj => getNestedValue(obj, property) === token
  )
  return filteredData
}

export const filterNotEquals = ({
  data,
  property,
  token,
}: FilterHelperProps) => {
  const filteredData: IUser[] = data.filter(
    obj => getNestedValue(obj, property) !== token
  )
  return filteredData
}

export const filterIncludes = ({
  data,
  property,
  token,
}: FilterHelperProps) => {
  // eslint-disable-next-line max-len
  const filteredData: IUser[] = data.filter(obj =>
    getNestedValue(obj, property)?.toLowerCase()?.includes(token)
  )
  return filteredData
}

export const filterNotIncludes = ({
  data,
  property,
  token,
}: FilterHelperProps) => {
  const filteredData: IUser[] = data.filter(
    obj => !getNestedValue(obj, property)?.toLowerCase()?.includes(token)
  )
  return filteredData
}
