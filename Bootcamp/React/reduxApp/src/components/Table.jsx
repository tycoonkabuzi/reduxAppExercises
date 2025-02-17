import { useDispatch, useSelector } from "react-redux";
import { selectRow, selectAllRows, addRow } from "../store/tableSlice";
import { useState } from "react";
const Table = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.table.rows);

  const selectedRowIds = useSelector((state) => state.table.selectedRowIds);

  console.log(selectedRowIds);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAddRow = (e) => {
    e.preventDefault();
    if ((name.trim(), lastName.trim())) {
      dispatch(addRow({ name, lastName }));
      setName("");
      setLastName("");
    }
  };
  const handleSelectRow = (id) => {
    dispatch(selectRow(id));
  };
  const handleSelectAllRows = (e) => {
    dispatch(selectAllRows(e.target.checked));
  };

  const isRowSelected = (id) => selectedRowIds.includes(id);
  return (
    <div>
      <h2>Table </h2>
      <form onSubmit={handleAddRow}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name..."
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name..."
        />
        <button type="submit"> Add row</button>
      </form>
      <label>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={handleSelectAllRows}
          checked={selectedRowIds.length === rows.length && rows.length > 0}
        />
        Select All
      </label>
      <table border="1" cellPadding="10" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lasname</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: isRowSelected(row.id) ? "lightblue" : "white",
              }}
            >
              <td>
                <input
                  type="checkbox"
                  checked={isRowSelected(row.id)}
                  onChange={() => handleSelectRow(row.id)}
                />
              </td>
              <td>{row.name}</td>
              <td>{row.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
