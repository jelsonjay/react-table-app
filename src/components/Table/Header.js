import { format } from 'date-fns'
import { ColumnFilter } from '../Column/ColumnFilter'

export const HeaderColumns = [
  {Header: 'ID', Footer:'ID', 
  accessor: 'id',
  disableFilters: true
  
  },

  {Header: 'First Name', 
  Footer:'First Name', 
  accessor: 'first_name',
  
 },
  {Header: 'Last Name', 
  Footer: 'Last Name', 
  accessor:'last_name',
  
 },
  {Header: 'Country', 
  Footer:'Country', 
  accessor:'country',
  
},
  {Header: 'Telephone', 
  Footer: 'Telephone', 
  accessor: 'telephone',
  
},
  {Header: 'Date of Birth', 
  Footer: 'Date of Birth', 
  accessor: 'date_of_birth',
   Cell: ({value}) => {return format(new Date(value), 'dd/MM/yyy')},
  
  },
  {Header: 'Age', 
  Footer: 'Age', 
  accessor: 'age',

 },
  {Header: 'Email', 
  Footer: 'Email', 
  accessor: 'email'
}
]