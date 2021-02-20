import { format } from 'date-fns'
import { ColumnFilter } from '../Column/ColumnFilter'

export const HeaderColumns = [
  {Header: 'ID', Footer:'ID', 
  accessor: 'id',
  Filter: ColumnFilter,
  disableFilters: true
  
  },

  {Header: 'First Name', 
  Footer:'First Name', 
  accessor: 'first_name',
  Filter: ColumnFilter
 },
  {Header: 'Last Name', 
  Footer: 'Last Name', 
  accessor:'last_name',
  Filter: ColumnFilter
 },
  {Header: 'Country', 
  Footer:'Country', 
  accessor:'country',
  Filter: ColumnFilter
},
  {Header: 'Telephone', 
  Footer: 'Telephone', 
  accessor: 'telephone',
  Filter: ColumnFilter
},
  {Header: 'Date of Birth', 
  Footer: 'Date of Birth', 
  accessor: 'date_of_birth',
   Cell: ({value}) => {return format(new Date(value), 'dd/MM/yyy')},
   Filter: ColumnFilter
  },
  {Header: 'Age', 
  Footer: 'Age', 
  accessor: 'age',
  Filter: ColumnFilter
 },
  {Header: 'Email', 
  Footer: 'Email', 
  accessor: 'email',
  Filter: ColumnFilter
}
]