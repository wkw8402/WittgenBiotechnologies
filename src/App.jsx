import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DatabaseInput1 from "./pages/DatabaseInput1";
import GettingStarted1 from "./pages/GettingStarted1";
import GettingStarted2 from "./pages/GettingStarted2";
import InProgress from "./pages/InProgress";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import MetabaseInput1 from "./pages/MetabaseInput1";
import MetabaseInput2 from "./pages/MetabaseInput2";
import MetabaseInput3 from "./pages/MetabaseInput3";
import MetabaseInput4 from "./pages/MetabaseInput4";
import MetabaseInput5 from "./pages/MetabaseInput5";
import MyFiles1 from "./pages/MyFiles1";
import MyFiles2 from "./pages/MyFiles2";
import Payment1 from "./pages/Payment1";
import Payment2 from "./pages/Payment2";
import Register from "./pages/Register";
import Submitted from "./pages/Submitted";
import VerifyCode from "./pages/VerifyCode";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {/* <Route path="/register" element={<Register />}></Route>
        <Route path="/verify_code" element={<VerifyCode />}></Route> */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/my_files_1" element={<MyFiles1 />}></Route>
        {/* <Route path="/my_files_2" element={<MyFiles2 />}></Route>
        <Route path="/getting_started_1" element={<GettingStarted1 />}></Route>
        <Route path="/getting_started_2" element={<GettingStarted2 />}></Route> */}
        <Route path="/metabase_input_1" element={<MetabaseInput1 />}></Route>
        {/* <Route path="/metabase_input_2" element={<MetabaseInput2 />}></Route>
        <Route path="/metabase_input_3" element={<MetabaseInput3 />}></Route>
        <Route path="/metabase_input_4" element={<MetabaseInput4 />}></Route>
        <Route path="/metabase_input_5" element={<MetabaseInput5 />}></Route>
        <Route path="/database_input_1" element={<DatabaseInput1 />}></Route> */}
        {/* <Route path="/payment_1" element={<Payment1 />}></Route>
        <Route path="/payment_2" element={<Payment2 />}></Route> */}
        <Route path="/submitted" element={<Submitted />}></Route>
        {/* <Route path="/in_progress" element={<InProgress />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
