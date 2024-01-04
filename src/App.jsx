import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyPayment from "./pages/ApplyPayment";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "./pages/Dashboard";
import DatabaseInput1 from "./pages/DatabaseInput1";
import DeleteSample from "./pages/DeleteSample";
import DeleteMult from "./pages/DeleteMult";
import EditProfile from "./pages/EditProfile";
import GettingStarted1 from "./pages/GettingStarted1";
import GettingStarted2 from "./pages/GettingStarted2";
import InProgress from "./pages/InProgress";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import MetabaseInput1 from "./pages/FileUpload";
import MetabaseInput3 from "./pages/MetabaseInput3";
import MetabaseInput4 from "./pages/MetabaseInput4";
import MetabaseInput5 from "./pages/MetabaseInput5";
import MyProfile from "./pages/MyProfile";
import MyFiles1 from "./pages/MyFiles1";
import MyFiles2 from "./pages/MyFiles2";
import Payment1 from "./pages/Payment1";
import Payment2 from "./pages/Payment2";
import Complete from "./pages/Complete";
import CostUsage from "./pages/CostUsage";
import Register from "./pages/Register";
import Submitted from "./pages/Submitted";
import Support from "./pages/Support";
import VerifyCode from "./pages/VerifyCode";
import FileUpload from "./pages/FileUpload";
import Excel from "./pages/ExcelComponent"
import React from 'react';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
        <Route path="/apply_payment" element={<PrivateRoute><ApplyPayment /></PrivateRoute>}></Route>
        <Route path="/fileupload" element={<PrivateRoute><FileUpload /></PrivateRoute>}></Route>
        <Route path="/verify_code" element={<PrivateRoute><VerifyCode /></PrivateRoute>}></Route>
        <Route path="/delete_sample" element={<PrivateRoute><DeleteSample /></PrivateRoute>}></Route>
        <Route path="/delet_emult" element={<PrivateRoute><DeleteMult /></PrivateRoute>}></Route>
        <Route path="/edit_profile" element={<PrivateRoute><EditProfile /></PrivateRoute>}></Route>
        <Route path="/my_files_1" element={<PrivateRoute><MyFiles1 /></PrivateRoute>}></Route>
        <Route path="/change_password" element={<PrivateRoute><ChangePassword /></PrivateRoute>}></Route>
        <Route path="/Complete" element={<PrivateRoute><Complete /></PrivateRoute>}></Route>
        <Route path="/CostUsage" element={<PrivateRoute><CostUsage /></PrivateRoute>}></Route>
        <Route path="/my_files_2" element={<PrivateRoute><MyFiles2 /></PrivateRoute>}></Route>
        <Route path="/getting_started_1" element={<PrivateRoute><GettingStarted1 /></PrivateRoute>}></Route>
        <Route path="/getting_started_2" element={<PrivateRoute><GettingStarted2 /></PrivateRoute>}></Route>
        <Route path="/metabase_input_1" element={<PrivateRoute><MetabaseInput1 /></PrivateRoute>}></Route>
        <Route path="/metabase_input_3" element={<PrivateRoute><MetabaseInput3 /></PrivateRoute>}></Route>
        <Route path="/metabase_input_4" element={<PrivateRoute><MetabaseInput4 /></PrivateRoute>}></Route>
        <Route path="/metabase_input_5" element={<PrivateRoute><MetabaseInput5 /></PrivateRoute>}></Route>
        <Route path="/my_profile" element={<PrivateRoute><MyProfile /></PrivateRoute>}></Route>
        <Route path="/database_input_1" element={<PrivateRoute><DatabaseInput1 /></PrivateRoute>}></Route>
        <Route path="/payment_1" element={<PrivateRoute><Payment1 /></PrivateRoute>}></Route>
        <Route path="/payment_2" element={<PrivateRoute><Payment2 /></PrivateRoute>}></Route>
        <Route path="/submitted" element={<PrivateRoute><Submitted /></PrivateRoute>}></Route>
        <Route path="/support" element={<PrivateRoute><Support /></PrivateRoute>}></Route>
        <Route path="/in_process" element={<PrivateRoute><InProgress /></PrivateRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('persist-crs-token');
  return token ? children : <Navigate to="/login" />;
};


export default App;
