export const registrationTableHeader: {
  Header: string
  accessor: string
  type: string
  readonly?: boolean
}[] = [
  {
    Header: 'Task Name',
    accessor: 'taskname',
    type: 'text',
    readonly: true,
  },
  {
    Header: 'File Name',
    accessor: 'name',
    type: 'text',
    readonly: true,
  },
  {
    Header: 'GDrive Url',
    accessor: 'url',
    type: 'link',
    readonly: true,
  },
  {
    Header: 'File Download',
    accessor: 'downloadUrl',
    type: 'link',
    readonly: true,
  },
  {
    Header: 'ID',
    accessor: 'id',
    type: 'text',
    readonly: true,
  },
  {
    Header: 'Upload State',
    accessor: 'uploadState',
    type: 'text',
    readonly: true,
  },
  {
    Header: 'Last Edited',
    accessor: 'lastEditedUtc',
    type: 'date',
    readonly: true,
  },
  {
    Header: 'Mime Type',
    accessor: 'mimeType',
    type: 'text',
    readonly: true,
  },
  {
    Header: 'Type',
    accessor: 'type',
    type: 'text',
    readonly: true,
  },
  {
    Header: 'Selection Status',
    accessor: 'selectionStatus',
    type: 'checkbox',
    readonly: false,
  },
]
