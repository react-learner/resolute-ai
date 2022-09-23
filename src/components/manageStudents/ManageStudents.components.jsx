import React from "react";
import "./ManageStudents.styles.css";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useState } from "react";

const ManageStudents = ({ setStudents, students }) => {
  const [popup, setPopup] = useState(false);
  const [indexs, setIndex] = useState(0);
  const [view, setView] = useState(false);
  console.log(students);
  const removeHandler = (id) => {
    setPopup(false);
    setStudents((oldData) => {
      return oldData.filter((ele, index) => {
        return index !== id;
      });
    });
  };
  const viewHandler = (id) => {
    students.map((student, index) => {
      index === id;
      return setIndex(!view);
    });
  };

  return (
    <div className="students-container">
      <table>
        <tr className="table-heading">
          <th>Name</th>
          <th>Class</th>
          <th>Roll No.</th>
          <th>View / Edit / Delete</th>
        </tr>
        {students.map(({ firstName, selectClass, division, rollNo }, index) => {
          return (
            <tr
              className="table-row"
              style={{
                backgroundColor: `${index % 2 ? "#feeeef" : "#fff"}`,
              }}
              key={index}
            >
              <td>{firstName}</td>
              {view ? (
                <>
                  <td>
                    {selectClass}-{division}
                  </td>
                  <td>{rollNo}</td>
                </>
              ) : (
                ""
              )}

              <td className="icons-container">
                <AiOutlineEye
                  onClick={() => {
                    setIndex(index);
                    viewHandler(indexs);
                  }}
                  size="33"
                  color="#FB7813"
                />
                <BsPencil size="30" color="#FB7813" />
                <AiOutlineDelete
                  onClick={() => {
                    setIndex(index);
                    setPopup(true);
                  }}
                  size="30"
                  color="#FB7813"
                />
              </td>
            </tr>
          );
        })}
      </table>
      {popup ? (
        <div className="confirmation-container">
          <h1>Are you sure you want to delete this Entry?</h1>
          <div className="button-container">
            <button
              onClick={() => viewHandler(index)}
              className="btn btn-primary"
            >
              NO
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => removeHandler(indexs)}
            >
              YES
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ManageStudents;
