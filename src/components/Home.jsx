
import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledTable = styled(Table)`
width: 50%;
margin: 30px auto 0px auto;
`
const THead = styled(TableHead)`
background: #000;
  color: #ee5e17;
  font-size: 40px;
  width: 70%;
  margin: 0px 250px  0px 107px;
  display: flex;
  justify-content: center;
}
`

const TBody = styled(TableRow)`
background: #2222 ;
& > td {  
  font-size: 40px;
  display: inline-flex;
 }
` 

const Home = () => {

  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <StyledTable>
    <TableHead>
      <THead>CRUD Operation</THead>
       
     </TableHead>
<br />
     <TableBody>
          <TBody>
          <TableCell><Button variant="contained" style={{margin:11}} color="primary" onClick={()=> handleClick("/add")}>Add User</Button></TableCell>
            <TableCell><Button variant="contained" style={{margin:11}} color="success" onClick={()=> handleClick("/all")}>All Users</Button></TableCell>
            <TableCell><Button variant="contained" style={{margin:11}} color="secondary" onClick={()=> handleClick("/all")}>Edit User</Button></TableCell>
            <TableCell><Button variant="contained" style={{margin:12}} color="error" onClick={()=> handleClick("/all")}>Delete User</Button></TableCell>
          </TBody>
     </TableBody>
  </StyledTable>

  )
}

export default Home

//  npm run json-server