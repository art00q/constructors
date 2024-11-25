import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchConstructors } from "./features/constructorSlice.js";
import { fetchApplications } from "./features/applicationSlice.js";
import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConstructors());
    dispatch(fetchApplications());
  }, [dispatch]);

  return (
    <Router>
      <nav className="tabs">
        <Link to="/">Форма для заявки</Link>
        <Link to="/table">Сводная таблица</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
};

export default App;
