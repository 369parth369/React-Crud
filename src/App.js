import logo from './logo.svg';
import './App.css';

// components
import NavigationBar from './components/NavigatonBar'
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
   <NavigationBar />
   <Routes>
    <Route path="/" element={<Home />} />
   <Route path="/all" element={<AllUsers />} />
   <Route path="/add" element={<AddUser />} />
   <Route path="/edit/:id" element={<EditUser />} />
   {/* // :id"= : is for declaring variable  */}
   
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
