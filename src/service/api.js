import axios from 'axios'; // AXIOS It is API that allows to fetch data 
//  npm run json-server

const API_URL = 'http://localhost:3002/users';

export const addUser = async (data) => {
  try {
    axios.post(API_URL, data)
} catch (error) {
    console.log('Error while calling addUser api ', error.message)
}
} 
// this is to fetch data to server from add user

export const getUsers = async () => {
  try {
      return await axios.get (API_URL);
  } catch (error) {
    console.log('Error while calling getUsers api ', error.message)
  }
} 
// this is to fetch data from api to all user data

export const getUser = async (data) => {
  try {
      return await axios.get (`${API_URL}/${data}`);
  } catch (error) {
    console.log('Error while calling getUser api ', error.message)
  }
} 

// get perticular user data from API to edit user page

export const editUser = async (data, id) => { //(data, id)= info to send after edit and that id also for which perticular user 
  try {
      return await axios.put (`${API_URL}/${id}`, data);
  } catch (error) {
    console.log('Error while calling editUser api', error.message)
  }
} 

export const deleteUser = async (id) => {
  try {
      return await axios.delete (`${API_URL}/${id}`);
  } catch (error) {
    console.log('Error while calling deleteUser api ', error.message)
  }
} 
