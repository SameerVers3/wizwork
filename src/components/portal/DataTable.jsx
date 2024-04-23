import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'fullName', headerName: 'Full Name', width: 250 },
  { field: 'hiringStage', headerName: 'Hiring Stage', width: 250 },
  { 
    field: 'appliedDate', 
    headerName: 'Applied Date', 
    width: 250,  
  },
  { field: 'jobRole', headerName: 'Job Role', width: 150}
];


const rows = [
  { id: 1, fullName: 'Snow', hiringStage: 'Jon', appliedDate: '01/24', jobRole: 'Developer' },
  { id: 2, fullName: 'Lannister', hiringStage: 'Cersei', appliedDate: '02/24', jobRole: 'Developer' },
  { id: 3, fullName: 'Lannister', hiringStage: 'Jaime', appliedDate: '02/24', jobRole: 'Developer' },
  { id: 4, fullName: 'Stark', hiringStage: 'Arya', appliedDate: '02/24', jobRole: 'Developer' },
  { id: 5, fullName: 'Targaryen', hiringStage: 'Daenerys', appliedDate: '02/24', jobRole: 'Developer' },
  { id: 6, fullName:'Melisandre', hiringStage: 'hello', appliedDate: '02/24', jobRole: 'Developer' },
  { id: 7, fullName: 'Clifford', hiringStage: 'Ferrara', appliedDate: '02/24', jobRole: 'Developer' },
  { id: 8, fullName: 'Frances', hiringStage: 'Rossini', appliedDate: '02/24', jobRole: 'Developer' },
  { id: 9, fullName: 'Roxie', hiringStage: 'Harvey', appliedDate: '02/24', jobRole: 'Developer' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '98%'}} className='border p-6 ml-4'>
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
