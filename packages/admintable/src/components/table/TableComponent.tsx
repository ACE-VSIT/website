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
import { memo, useState, useEffect } from 'react'
import { getNestedValue } from './helpers/helper-functions'
import useTableProps from '../../contexts/TableContext'

type TablePropTypes = {
  headers: ITableHeader[]
  data: IUser[]
}

function TableComponent({ headers, data }: TablePropTypes) {
  const [currentData, setCurrentData] = useState<IUser[]>(data)
  const { setUserInfo } = useUserInfo()
  const { filteredData } = useTableProps()

  useEffect(() => {
    if (filteredData !== undefined) {
      setCurrentData([...filteredData])
    }
  }, [filteredData])

  useEffect(() => {
    setCurrentData([...data])
  }, [data])

  const getRow = (obj: any) => {
    const inputs: JSX.Element[] = []
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
      <Table>
        <Thead>
          {headers.map(header => (
            <Th key={header.Header}>{header.Header}</Th>
          ))}
        </Thead>
        <Tbody>
          {currentData?.map(obj => (
            <tr onClick={() => setUserInfo!(obj)} key={obj.uid}>
              {getRow(obj).map(input => input)}
              <Updater />
            </tr>
          ))}
        </Tbody>
      </Table>
    </>
  )
}

export default memo(TableComponent)

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
