import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from 'os';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'Full Name', width: 130 },
  { field: 'hiringStage', headerName: 'Hiring Stage', width: 130 },
  {
    field: 'appliedDate',
    headerName: 'Applied Date',
    width: 130,
  },
  {
    // field: 'fullName',
    // headerName: 'Full name',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    // width: 160,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, fullName: 'Snow', hiringStage: 'Jon', appliedDate: "01/24" },
  { id: 2, fullName: 'Lannister', hiringStage: 'Cersei', appliedDate: 42 },
  { id: 3, fullName: 'Lannister', hiringStage: 'Jaime', appliedDate: 45 },
  { id: 4, fullName: 'Stark', hiringStage: 'Arya', appliedDate: 16 },
  { id: 5, fullName: 'Targaryen', hiringStage: 'Daenerys', appliedDate: null },
  { id: 6, fullName:'Melisandre', hiringStage: null, appliedDate: 150 },
  { id: 7, fullName: 'Clifford', hiringStage: 'Ferrara', appliedDate: 44 },
  { id: 8, fullName: 'Frances', hiringStage: 'Rossini', appliedDate: 36 },
  { id: 9, fullName: 'Roxie', hiringStage: 'Harvey', appliedDate: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%'}} className='border p-4'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
