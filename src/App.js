import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import InventoryDetails from './Pages/Home/InventoryDetails/InventoryDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Manageinventory from './Pages/Manageinventory/Manageinventory';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItem from './Pages/MyItem/MyItem';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Updateitem from './Pages/Updateitem/Updateitem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <InventoryDetails></InventoryDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventorys"
          element={
            <RequireAuth>
              <Manageinventory></Manageinventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/updateitem/:updateitemId"
          element={
            <RequireAuth>
             <Updateitem></Updateitem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
