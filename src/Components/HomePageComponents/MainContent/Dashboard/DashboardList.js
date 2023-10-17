import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { useUserContext } from '../../../../Utils/UserContext';

const columns = [
  {
    width: 200,
    label: 'Company',
    dataKey: 'company_name',
  },
  {
    width: 120,
    label: 'Job Title',
    dataKey: 'job_title',
  },
  {
    width: 120,
    label: 'Compensation',
    dataKey: 'compensation',
  },
  {
    width: 120,
    label: 'Job Description',
    dataKey: 'job_description',
  },
  {
    width: 120,
    label: 'Status',
    dataKey: 'status',
  },
  {
    width: 120,
    label: 'Link to Posting',
    dataKey: 'link_to_posting',
  },
  {
    width: 120,
    label: 'Date Applied',
    dataKey: 'date_applied',
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow style={{ zIndex: 0 }}>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(index, row) {
  return (
    <TableRow
      key={index}
      onClick={() => handleRowClick(row)}
      style={{ cursor: 'pointer' }}
    >
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </TableRow>
  );
}

const handleRowClick = (row) => {
  console.log('Row clicked:', row);
};


export default function DashboardList() {
  const { applicationList } = useUserContext();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(applicationList);
  }, [applicationList]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Paper style={{ height: '100%', width: '100%' }}>
        <TableContainer style={{ maxHeight: '100%', overflow: 'auto' }}>
          <Table stickyHeader>
            <TableHead style={{zIndex: '0'}}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.dataKey}
                    style={{ width: column.width }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => rowContent(index, row))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}