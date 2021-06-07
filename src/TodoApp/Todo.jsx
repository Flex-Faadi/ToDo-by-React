import React, { useState } from "react";
import { InputGroup, FormControl, Alert } from "react-bootstrap";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import TodoLogo from "./images/todologo.svg";
import "./todo.css";
function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState(0);

  //   Add items method
  const addItems = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
      setMessage(1);
      setTimeout(()=>{
        setMessage(0)
      }, 2000)
    }
  };

  //   Delete items method
  const deleteItems = (id) => {
    //   console.log(id)
    const updatedData = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedData);
    setMessage(2);
    setTimeout(()=>{
      setMessage(0)
    }, 2000)
  };

  //   removeAll all method
  const removeAll = () => {
    setItems([]);
    setMessage(2);
    setTimeout(()=>{
      setMessage(0)
    }, 2000)
  };

  return (
    <div className="myMainDiv">
      <div className="message">
        {message==1 ? (
          <Alert variant="success">Successfully Add todo!</Alert>
        ) : message==2 ? (
          <Alert variant="danger">Deleted your todo!</Alert>
        ) : console.log()
      }
      </div>
      <div className="main_TodoDiv py-5">
        <div className="childTodoDiv my-5">
          <figure className="d-flex  align-items-center flex-column">
            <img width="150px" src={TodoLogo} alt="logo" />
            <figcaption className="my-2 fw-bold text-white">
              Add Your Todo List ✌️
            </figcaption>
          </figure>

          <div className="inputSection">
            <InputGroup className="mb-5">
              <FormControl
                className="text-capitalize"
                placeholder="✍️ Add your Todo"
                aria-label="✍️ Add your Todo"
                type="text"
                value={inputData}
                aria-describedby="basic-addon"
                onChange={(e) => setInputData(e.target.value)}
              />
              <Button onClick={addItems} variant="contained">
                <AddIcon color="primary" />
              </Button>
            </InputGroup>
          </div>

          <div className="todoItem">
            {items.map((val, ind) => {
              return (
                <div key={ind} className="eachitem mb-2 text-capitalize">
                  <span>{val}</span>
                  <DeleteIcon
                    id="deleteIcon"
                    onClick={() => deleteItems(ind)}
                  />
                </div>
              );
            })}
          </div>

          <div className="clearAll my-3">
            <Button
              onClick={removeAll}
              className="fw-bold text-danger"
              variant="contained"
            >
              <span>Remove All</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
