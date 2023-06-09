import React from 'react';
import { FormGroup, FormControl, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import { useState } from 'react';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
import Home from './Home';


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
   & > div {
    margin-top: 30px;
   }
    `
const initialValues = {
        name: '',
        username: '',
        email: '',
        phone: '',
}

const AddUser = () => {

    const [user,setUser] = useState(initialValues);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        
        setUser({ ...user, [e.target.name]: e.target.value }) //  [e.target.name]: e.target.value = key: value
        console.log(user);
    } 

    const addUserDetails = async () => {
           await addUser(user ); // it will add data to api
           navigate('/all'); // after adding user it will nevigate & reload the page to All user
    }

  return (
    
    <Container>
        <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                    <Input onChange={(e) =>onValueChange(e)} name="name" />
            </FormControl>
<br />
            <FormControl>
                <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) =>onValueChange(e)} name="username"/>
            </FormControl>
<br />
            <FormControl>
                <InputLabel>Email Id</InputLabel>
                    <Input onChange={(e) =>onValueChange(e)} name="email"/>
            </FormControl>
<br />
            <FormControl>
                <InputLabel>Contact No.</InputLabel>
                    <Input onChange={(e) =>onValueChange(e)} name="phone"/>
            </FormControl>
<br />
            <FormControl> <Button onClick={() => addUserDetails()} variant="contained">Add USer</Button></FormControl>
    </Container>
  )
}

export default AddUser
