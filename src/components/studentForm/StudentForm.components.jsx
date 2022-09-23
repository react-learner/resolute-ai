import React from "react";
import "./StudentForm.styles.css";

const StudentForm = ({
  setStudentDetails,
  studentDetails,
  setStudents,
  initialState,
}) => {
  const formHandler = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };
  const classesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const divisionsList = ["A", "B", "C", "D", "E", "F"];
  const {
    firstName,
    middleName,
    lastName,
    selectClass,
    division,
    rollNo,
    addressLine1,
    addressLine2,
    landmark,
    city,
    pincode,
  } = studentDetails;
  const submitHandler = () => {
    if (JSON.stringify(studentDetails) === JSON.stringify(initialState))
      return alert("Please enter student details");
    else {
      setStudents((value) => [...value, studentDetails]);
      setStudentDetails(initialState);
      alert("Student details recorded");
    }
  };

  return (
    <div className="form-container">
      <div className="class-details">
        <input
          onChange={formHandler}
          autocomplete="off"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
        />
        <input
          onChange={formHandler}
          autocomplete="off"
          type="text"
          placeholder="Middle Name"
          name="middleName"
          value={middleName}
        />
        <input
          onChange={formHandler}
          autocomplete="off"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
        />
        <select
          onChange={formHandler}
          autocomplete="off"
          placeholder="select Class"
          name="selectClass"
          id="selectClass"
        >
          {classesList.map((classList, index) => {
            return (
              <option key={index} value={classList}>
                {classList}
              </option>
            );
          })}
        </select>
        <select
          onChange={formHandler}
          placeholder="select Division"
          name="division"
          id="selectDivision"
        >
          {divisionsList.map((divisionsList, index) => {
            return (
              <option key={index} value={divisionsList}>
                {divisionsList}
              </option>
            );
          })}
        </select>
        <input
          onChange={formHandler}
          type="text"
          placeholder="Enter Roll Number in Digits"
          name="rollNo"
          value={rollNo}
          autocomplete="off"
          maxLength="2"
        />
      </div>
      <div className="personal-details">
        <textarea
          onChange={formHandler}
          placeholder="Address Line 1"
          name="addressLine1"
          rows="1"
          columns="100"
          value={addressLine1}
        />
        <textarea
          onChange={formHandler}
          placeholder="Address Line 2"
          name="addressLine2"
          rows="1"
          columns="100"
          value={addressLine2}
        />
      </div>
      <div className="class-details">
        <input
          onChange={formHandler}
          autocomplete="off"
          type="text"
          placeholder="Landmark"
          name="landmark"
          value={landmark}
        />
        <input
          onChange={formHandler}
          autocomplete="off"
          type="text"
          placeholder="City"
          name="city"
          value={city}
        />
        <input
          onChange={formHandler}
          autocomplete="off"
          type="text"
          placeholder="Pincode"
          name="pincode"
          value={pincode}
          maxLength="6"
        />
        <button onClick={submitHandler} className="btn">
          Add Student
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
