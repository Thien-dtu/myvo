import React, { useState } from "react";
import { Link } from "react-router-dom";
import JsonData from "../users.json";

// function PhoneFormat(props) {
//   let phone = props.children;
//   let phoneFormat = "+84".concat(phone.replace(/-/g, ""));
//   return <td>{phoneFormat}</td>;
// }

function SortSelector({ columns, handleSort }) {
  const [selectedOption, setSelectedOption] = useState(columns[0]);

  function handleChange(event) {
    setSelectedOption(event.target.value);
    handleSort(event.target.value);
  }

  return (
    <div className="mb-3 mt-3">
      <select value={selectedOption} onChange={handleChange}>
        {columns.map((column, index) => (
          <option key={index} value={column}>
            {column}
          </option>
        ))}
      </select>
    </div>
  );
}

function JsonDataDisplay() {
  const [data, setData] = useState(changDateFormat(JsonData));
  const [dataView, setDataView] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [sortBy, setSortBy] = useState("id");

  const [postsPerPage] = useState(10);

  const [currentPage, setCurrentPage] = useState(1);

  const applyFilter = (data, filterValue) => {
    let arr = data.filter((item) => {
      for (let key in item) {
        if (item[key].toString().toLowerCase().includes(filterValue.toLowerCase())) {
          return item;
        }
      }
    });
    // setData(arr)
    return arr;
  };

  const getUserData = () => {
    fetch('../users.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'            }
    })
    .then(response => response.json())
    .then(json => {
        json.map(user => {
            let newPhone = user.phone;
            newPhone = newPhone.slice(newPhone.indexOf('-') + 1);
            newPhone = newPhone.replace(/-/g, '');
            user.phone = '+84' + newPhone;
            return user;
        });
        setData(json);
        setDataView(json);
    });
}

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filteredData = applyFilter(data, filterValue);

  let currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const columns = Object.keys(JsonData[1]);

  function changDateFormat(data) {
    return data.map((item) => ({
      ...item,
      birthday: mapDate(item.birthday),
    }));
  }

  function mapDate(date) {
    let dateObject = new Date(date);
    return dateObject;
  }

  function displayDate(dateObject) {
    let day = ("0" + dateObject.getDate()).slice(-2);
    let month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
    let year = dateObject.getFullYear();
    let formattedBirthday = `${day}/${month}/${year}`;
    return formattedBirthday;
  }

  function handleSort(field) {
    setSortBy(field);
    let sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return -1;
      else return 1;
    });
    setData(sortedData);
  }

  function nextPage() {
    setCurrentPage((currentPage) => currentPage + 1);
  }
  function previousPage() {
    setCurrentPage((currentPage) => currentPage - 1);
  }

  return (
    <div>
      <div className="float-start btn-change-page">
        <Link to="/app-list">
          <button type="button" className="btn btn-primary">
            app-list
          </button>
        </Link>
      </div>
      <h1>A simple web app</h1>
      <input
        type="text"
        value={filterValue}
        placeholder="input to search"
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <SortSelector columns={columns} handleSort={handleSort} />
      <table className="table table-striped">
        <thead>
          <tr>
            {columns.map((column, index) =>
              sortBy === column ? (
                <th key={index} style={{ color: "dodgerblue" }}>
                  {column}
                </th>
              ) : (
                <th key={index}>{column}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {/* {DisplayData} */}
          {currentPosts.map((info) => {
            return (
              <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.firstName}</td>
                <td>{info.lastName}</td>
                <td>{info.email}</td>
                <td>{info.gender}</td>
                <td>{displayDate(info.birthday)}</td>
                <td>{info.salary}</td>
                <PhoneFormat>{info.phone}</PhoneFormat>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination-button-group mb-4">
        <div className="button-group">
          {currentPage !== 1 ? (
            <button
              onClick={previousPage}
              className="btn btn-outline-primary me-3"
            >
              Previous
            </button>
          ) : (
            React.Fragment
          )}
          {currentPage !== Math.ceil(data.length / postsPerPage) ? (
            <button onClick={nextPage} className="btn btn-outline-primary">
              Next
            </button>
          ) : (
            React.Fragment
          )}
        </div>
      </div>
    </div>
  );
}

export default JsonDataDisplay;
