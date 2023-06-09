import React from 'react';
import { FormGroup, FormControl, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import { getUser, editUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom'; 
// useState
// useEffect =  when the component loads at that time useEffect calls and provide the data
// useNavigate = used to change the location of element 
// useParams = to access perticular id or data from api params used


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

const EditUser = () => {

    const [user,setUser] = useState(initialValues);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUserData();
    }, []) // when the component loads at that time useEffect calls and provide the data

    const getUserData = async () => {
        let response = await getUser(id)
        setUser(response.data);
        console.log(response);
      } 

    const onValueChange = (e) => {
        
        setUser({ ...user, [e.target.name]: e.target.value }) //  [e.target.name]: e.target.value = key: value
        console.log(user);
    } 

    const addUserDetails = async () => {
           await editUser(user, id); // it will add data to api
  return (
    
    <Container>
        <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                    <Input onChange={(e) =>onValueChange(e)} name="name" value={user.name}/> 
                    {/* // value = to control any field.. control components */}
            </FormControl>
<br />
            <FormControl>
                <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) =>onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
<br />
            <FormControl>
                <InputLabel>Email Id</InputLabel>
                    <Input onChange={(e) =>onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
<br />
            <FormControl>
                <InputLabel>Contact No.</InputLabel>
                    <Input onChange={(e) =>onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
<br />
            <FormControl> <Button onClick={() => addUserDetails()} variant="contained">Edit USer</Button></FormControl>
    </Container>
        
   
  )
}
}
export default EditUser
