export const registrationTableHeader: {
  Header: string
  accessor: string
  type: string
}[] = [
  {
    Header: 'Upload State',
    accessor: 'uploadState',
    type: 'text',
  },
  {
    Header: 'Last Edited',
    accessor: 'lastEditedUtc',
    type: 'date',
  },
  {
    Header: 'URL',
    accessor: 'url',
    type: 'link',
  },
  {
    Header: 'Mime Type',
    accessor: 'mimeType',
    type: 'text',
  },
  {
    Header: 'Type',
    accessor: 'type',
    type: 'text',
  },
  {
    Header: 'Name',
    accessor: 'name',
    type: 'text',
  },
  {
    Header: 'ID',
    accessor: 'id',
    type: 'text',
  },
  {
    Header: 'Download Url',
    accessor: 'downloadUrl',
    type: 'link',
  },
]
