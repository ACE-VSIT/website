import { ITableHeader } from '../interfaces/table.interface'

export const columns: ITableHeader[] = [
  {
    Header: 'Profile',
    accessor: 'photoURL',
    type: "image"
  },
  {
    Header: 'Name',
    accessor: 'name',
    type: "string"
  },
  {
    Header: 'UID',
    accessor: 'uid',
    type: "string"
  },
  {
    Header: 'User',
    accessor: 'user',
    type: "string"
  },
  {
    Header: 'Mobile',
    accessor: 'personalDetails.mobile',
    type: "string"
  },
  {
    Header: 'DoB',
    accessor: 'personalDetails.dob',
    type: "date"
  },
  {
    Header: 'Enrollment No',
    accessor: 'personalDetails.enrollmentNo',
    type: "string"
  },
  {
    Header: 'Section',
    accessor: 'personalDetails.section',
    type: "string"
  },
  {
    Header: 'Update',
    accessor: '',
    type: "update"
  },
]
