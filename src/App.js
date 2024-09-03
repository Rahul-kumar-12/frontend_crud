
import './App.css';
import User from './getUser/User'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './addUser/AddUsers.js'
import Update from './updateUser/Update.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
