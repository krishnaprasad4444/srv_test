import { MDBDataTableV5 } from 'mdbreact';

const columns = [
  { label: 'Name', field: 'name', width: 150, attributes: { 'aria-controls': 'DataTable', 'aria-label': 'Name', }, },
  { label: 'Position', field: 'position', width: 270, },
  { label: 'Office', field: 'office', width: 200, },
  { label: 'Age', field: 'age', sort: 'asc', width: 100, },
  { label: 'Salary', field: 'salary', sort: 'disabled', width: 100, },
];

const EmployeeList = ({ data }) => {
  return <MDBDataTableV5
    hover entriesOptions={[5, 20, 25]}
    entries={5} pagesAmount={5}
    data={{ columns, rows: data }} materialSearch />
};

export default EmployeeList;
