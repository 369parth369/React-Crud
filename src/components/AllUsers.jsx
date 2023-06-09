import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button} from '@mui/material';

import { getUsers, deleteUser } from '../service/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
width: 75%;
margin: 50px auto 0px auto;
`
const THead = styled(TableRow)`
background: #000;
& > th {
  color: #eee;
  font-size: 25px;
}
`

const TBody = styled(TableRow)`
& > td {  
  font-size: 20px;
}
` 

const AllUsers = () => {

  const [users ,setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, [])

  const getUsersDetails = async() => {
    let response = await getUsers();
    console.log(response)
    setUsers(response.data);
  }

  const deleteUserData = async(id) => {
    await deleteUser(id);
    getUsersDetails();
  }

  return (
    <StyledTable>
     <TableHead>
      <THead>
       <TableCell>Id</TableCell>
       <TableCell>Name</TableCell>
       <TableCell>Username</TableCell>
       <TableCell>Email</TableCell>
       <TableCell>Contact</TableCell>
       <TableCell></TableCell>
      </THead>
     </TableHead>
     <TableBody>
      {
        users.map(user => (
          <TBody>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" color="secondary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
              <Button variant="contained" color="error" onClick={() => deleteUserData(user.id)}>Delete</Button>
            </TableCell>

</TBody>
        )
          
          )
      }
     </TableBody>
    </StyledTable>
  )
}

export default AllUsers
