import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addApplication } from "../features/applicationSlice";
import '../styles/form.css'

const Form = () => {
  const [documentName, setDocumentName] = useState("");
  const [constructorId, setConstructorId] = useState("");

  const constructors = useSelector((state) => state.constructors.list);
  const applications = useSelector((state) => state.applications.list);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const existingApplication = applications.find(
      (app) => app.constructorId === Number(constructorId) && app.documentName === documentName
    );

    if (existingApplication) {
      alert("Вы уже отправляли заявку на этот документ, она уже была учтена");
    } else {
      dispatch(addApplication({ constructorId: Number(constructorId), documentName }));
      setDocumentName("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        ФИО конструктора:
        <select
          value={constructorId}
          onChange={(e) => setConstructorId(e.target.value)}
          required
        >
          <option value="">Выберите конструктора</option>
          {constructors.map((constructor) => (
            <option key={constructor.id} value={constructor.id}>
              {constructor.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Наименование документа:
        <input
          type="text"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
