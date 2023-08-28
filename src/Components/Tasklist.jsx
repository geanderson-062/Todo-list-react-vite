import { useState } from "react";
import "../styles/main.css";
import "../App";

export default function Search() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [nametask, setNametask] = useState([]);
  const [newNametask, setNewNametask] = useState("");

  const [date, setDate] = useState([]);
  const [newDate, setNewDate] = useState("");

  const addTask = () => {
    if (
      newTask.trim() !== "" &&
      newNametask.trim() !== "" &&
      newDate.trim() !== ""
    ) {
      setTasks([...tasks, newTask]);
      setNametask([...nametask, newNametask]);
      setDate([...date, newDate]);
      setNewTask("");
      setNewNametask("");
      setNewDate("");
    } else {
      alert("Preencha todos os campos antes de adicionar a tarefa.");
    }
  };

  const addDate = () => {
    if (newDate.trim() !== "") {
      setDate([...date, newDate]);
      setNewDate("");
    }
  };

  const addNametask = () => {
    if (newNametask.trim() !== "") {
      setNametask([...nametask, newNametask]);
      setNewNametask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    const updatedNametask = nametask.filter((_, i) => i !== index);
    setNametask(updatedNametask);
    const updatedDate = date.filter((_, i) => i !== index);
    setDate(updatedDate);
  };
  return (
    <div className="container">
      <div className="d-grid gap-2 col-6 mx-auto" style={{ marginTop: 50 }}>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style={{ marginLeft: "20%", marginRight: "20%" }}
        >
          Nova tarefa
        </button>
      </div>

      <br />
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Tasklist
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input mb-3">
                <input
                  type="text"
                  value={newNametask}
                  onChange={(e) => setNewNametask(e.target.value)}
                  className="form-control"
                  placeholder="Digite o nome da tarefa"
                />
                <br />
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  className="form-control"
                  placeholder="Digite uma tarefa"
                />
                <br />
                <input
                  type="text"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="form-control"
                  placeholder="Digite a data de conclusão"
                />
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    addTask();
                    addNametask();
                    addDate();
                  }}
                >
                  Adicionar
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-info"
                  viewBox="0 0 16 16"
                >
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p className="fs-1 text-center">Nenhuma tarefa em andamento.</p>
        ) : (
          tasks.map((task, index) => (
            <>
              <br />
              <table className="table table-secondary table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nome da tarefa</th>
                    <th scope="col">Tarefa</th>
                    <th scope="col">Data</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-dark">
                    <th scope="row">{nametask[index]}</th>
                    <td>{task}</td>
                    <td>{date[index]}</td>
                    <td>
                      <button
                        href="#"
                        className="btn btn-danger"
                        onClick={() => {
                          removeTask(index);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ))
        )}
      </div>
    </div>
  );
}
