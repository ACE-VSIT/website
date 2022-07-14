import {
  Th,
  Tbody,
  Table,
  Thead,
} from './components/inputs/styles/table-elements.styles'
import { InputText, InputDate, InputImage } from './components/inputs'
import { IInput } from '../../interfaces/input.interface'
import { IUser } from '../../interfaces/user.interface'
import Updater from './components/updater/Updater'
import useUserInfo from '../../contexts/UserInfoContext'
import { ITableHeader } from '../../interfaces/table.interface'
import useTableProps from '../../contexts/TableContext'

type TablePropTypes = {
  headers: ITableHeader[]
  data: IUser[]
}

export default function TableComponent({ headers, data }: TablePropTypes) {
  const { setUserInfo } = useUserInfo()
  const { loading } = useTableProps()

  const getRow = (obj: any) => {
    const inputs: JSX.Element[] = []
    const getNestedValue = (obj: any, key: string) => {
      const keys = key.split('.')
      let value = obj
      for (let i = 0; i < keys.length; i++) {
        value = value[keys[i]]
      }
      return value
    }

    for (let i = 0; i < headers.length; i++) {
      let inputProps: IInput = {
        customVal: getNestedValue(obj, headers[i].accessor) ?? '',
        cellId: headers[i].accessor ?? '',
      }

      let currentInput = getInputComponent({
        inputProps: inputProps,
        type: headers[i].type,
      })

      if (currentInput !== null) inputs.push(currentInput)
    }

    return inputs
  }

  return (
    <>
      {!loading ? (
        <Table>
          <Thead>
            {headers.map(header => (
              <Th key={header.Header}>{header.Header}</Th>
            ))}
          </Thead>
          <Tbody>
            {data?.map(obj => (
              <tr onClick={() => setUserInfo!(obj)} key={obj.uid}>
                {getRow(obj).map(input => input)}
                <Updater />
              </tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <div>Please wait...</div>
      )}
    </>
  )
}

function getInputComponent({
  inputProps: { customVal, cellId },
  type,
}: {
  inputProps: IInput
  type: string
}): JSX.Element | null {
  switch (type) {
    case 'string':
      return <InputText customVal={customVal} cellId={cellId} />
    case 'date':
      return <InputDate customVal={customVal} cellId={cellId} />
    case 'image':
      return <InputImage customVal={customVal} cellId={cellId} />
    default:
      return null
  }
}
