import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPages from "./components/pages/loginPages"; // เส้นทางที่ถูกต้อง
import HomePages from "./components/pages/homePages";
import Profile from "./components/pages/form/profile";
import LeaveForm from "./components/pages/form/leave-form";
import Home from "./components/pages/form/home";
import Doc from "./components/pages/form/doc";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/LoginPages" element={<LoginPages />} />
        <Route path="/profile" element={<Profile />} />{" "}
        {/* เส้นทางสำหรับ Profile */}
        <Route path="/Home" element={<Home />} /> 
        <Route path="/leave-form" element={<LeaveForm />} />
        <Route path="/Doc" element={<Doc />}/>
      </Routes>
    </Router>
  );
}

export default App;
