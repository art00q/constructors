import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const applications = useSelector((state) => state.applications.list);

  const documentCounts = applications?.reduce((acc, app) => {
    acc[app.documentName] = (acc[app.documentName] || 0) + 1;
    return acc;
  }, {});

  const sortedDocuments = Object.entries(documentCounts).sort((a, b) => b[1] - a[1]);

  return (
    <table>
      <thead>
        <tr>
          <th>Наименование документа</th>
          <th>Количество заявок</th>
        </tr>
      </thead>
      <tbody>
        {sortedDocuments?.map(([name, count]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
