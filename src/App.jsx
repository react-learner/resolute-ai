import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ManageStudents from "./components/manageStudents/ManageStudents.components";
import SideNavbar from "./components/sideNavbar/SideNavbar.components";
import StudentForm from "./components/studentForm/StudentForm.components";
import UserName from "./components/UserName/UserName.components";

function App() {
  const initialState = {
    firstName: "",
    middleName: "",
    lastName: "",
    selectClass: "",
    division: "",
    rollNo: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    city: "",
    pincode: "",
  };

  const [studentDetails, setStudentDetails] = useState(initialState);
  const [students, setStudents] = useState([]);
  return (
    <div className="App">
      <div className="left-container">
        <SideNavbar />
      </div>
      <div className="right-container">
        <UserName />
        <Routes>
          <Route
            path="/"
            element={
              <StudentForm
                setStudentDetails={setStudentDetails}
                studentDetails={studentDetails}
                setStudents={setStudents}
              />
            }
          />
          <Route
            path="/manage-students"
            element={
              <ManageStudents students={students} setStudents={setStudents} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
