import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import UserList from "./UserList";

Crud.propTypes = {};

// Data luc khoi tao
const dataInit = [
  {
    id: 1,
    name: "tuan",
    age: 18,
    address: "Trai Dat",
    phone: "02363113113",
  },
  {
    id: 2,
    name: "nam",
    age: 25,
    address: "Sao Hoa",
    phone: "02363114114",
  },
  {
    id: 3,
    name: "trung",
    age: 23,
    address: "Sao Thuy",
    phone: "02363115115",
  },
];

function Crud(props) {
  //state hien thi data
  const [dataView, setDataView] = useState(dataInit);

  // state quan ly cac truong nhap lieu
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // state quan ly khi validate
  const [textName, setTextName] = useState("");
  const [textAge, setTextAge] = useState("");
  const [textAddress, setTextAddress] = useState("");
  const [textPhone, setTextPhone] = useState("");

  // state id de 4 vi data khoi tao co data lon nhat la 3 roi
  const [id, setId] = useState(4);

  // state textId dung de so sanh khi edit hoac submit
  const [textId, setTextId] = useState(undefined);

  // state check dung de cap nhat tinh trang dong/mo tab input
  const [check, setCheck] = useState(true);

  // state check update de chuyen doi button trong cac truong hop
  const [checkUpdate, setCheckUpdate] = useState(true);

  // chuyen doi nut createUser thanh cancel va nguoc lai :v
  const toggleBox = () => {
    setCheck((current) => !current);
  };

  // Ham submit de them data vao dataView
  const HandlerSubmit = () => {
    validateName();
    validateAge();
    validateAddress();
    validatePhone();
    if (!validateName()) {
      setCheck(false);
      return;
    }
    if (!validateAge()) {
      setCheck(false);
      return;
    }
    if (!validateAddress()) {
      setCheck(false);
      return;
    }
    if (!validatePhone()) {
      setCheck(false);
      return;
    }
    if (textId === undefined) {
      setDataView((pre) => {
        let userIds = id + 1;
        const userId = userIds;
        setId(userId);
        let dataInit = {
          id,
          name,
          age,
          address,
          phone,
        };
        let newPre = [...pre, dataInit];

        return newPre;
      });
      alert("Succesfully. Book has been add to your cart");
    }
    setName("");
    setAge("");
    setAddress("");
    setPhone("");
    setCheck(true);
  };

  const HandlerEdit = (id) => {
    setCheck(false);
    setName(dataView[id].name);
    setAge(dataView[id].age);
    setAddress(dataView[id].address);
    setPhone(dataView[id].phone);
    setTextId(id);
    setCheckUpdate(false);
  };

  const onClickEdit = () => {
    validateName();
    validateAge();
    validateAddress();
    if (!validateName()) {
      setCheck(false);
      return;
    }
    if (!validateAge()) {
      setCheck(false);
      return;
    }
    if (!validateAddress()) {
      setCheck(false);
      return;
    }
    setDataView((prevData) =>
      prevData.map((item, key) => {
        let idUpdate = textId + 1;
        return key !== textId
          ? item
          : {
              id: idUpdate,
              name: name,
              age: age,
              address: address,
              phone: phone,
            };
      })
    );
    setCheck(true);
    setCheckUpdate(true);
  };

  const HandlerCancel = () => {
    if (window.confirm("Cancel editing? Your data maybe lost!") === true) {
      setName("");
      setAge("");
      setAddress("");
      setPhone("");
      setId(undefined);
    }
    setCheck(true);
    setCheckUpdate(true);
  };

  const HandlerDel = (id) => {
    console.log("Handel: " + id + ", check: " + check);
    if (check) {
      if (window.confirm("Are you sure you want to Remove this user?")) {
        setDataView((pre) => {
          let newPre = pre.filter((value, key) => key !== id);
          return newPre;
        });
      }
    } else {
      alert("Please turn off edit screen");
    }
  };

  const validateName = () => {
    setTextName("");
    let check = true;
    const val = name;
    let cond1 = /^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,2}$/;
    if (val === null || val === "") {
      setTextName("name is not empty!!");
      check = false;
    } else if (!cond1.test(val)) {
      setTextName("name must be alphabet");
      check = false;
    }
    return check;
  };

  const validateAge = () => {
    setTextAge("");
    let check = true;
    const val = age;
    let regex = /^[0-9]{0,60}$/;
    if (val === null || val === "") {
      setTextAge("Age is not empty!!");
      check = false;
    } else if (!regex.test(val)) {
      setTextAge("Age must be 0 to 60!!!");
      check = false;
    }
    return check;
  };

  const validateAddress = () => {
    setTextAddress("");
    let check = true;
    const val = address;
    let cond1 = /^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,2}$/;
    if (val === null || val === "") {
      setTextAddress("Address is not empty!!");
      check = false;
    } else if (!cond1.test(val)) {
      setTextAddress("Address must be alphabet!!!");
      check = false;
    }
    return check;
  };

  const validatePhone = () => {
    setTextPhone("");
    let check = true;
    const val = phone;
    let regex = /^(\+84|0[35789])+([0-9]{8,9})$/;
    if (val === null || val === "") {
      setTextPhone("Phone is not empty!!");
      check = false;
    } else if (!regex.test(val)) {
      setTextPhone("phone invalid !!!");
      check = false;
    }
    return check;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row">
      <div className="col-6">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th>name</th>
                <th>address</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {dataView.map((data, index) => (
                <UserList
                  id={index}
                  value={data}
                  key={index}
                  HandlerEdit={() => HandlerEdit(index)}
                  HandlerDel={() => HandlerDel(index)}
                />
              ))}
            </tbody>
          </table>
          {check && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={toggleBox}
            >
              create user
            </button>
          )}
          {!check && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={HandlerCancel}
            >
              cancel
            </button>
          )}
        </div>
        <div className="mt-3">
          <Link to="/product">
            <button type="button" className="btn btn-primary me-3">
              List
            </button>
          </Link>
          <Link to="/">
            <button type="button mt-20" class="btn btn-primary">
              Table-App
            </button>
          </Link>
        </div>
      </div>
      <div className="col-6" style={{ display: check ? "none" : "block" }}>
        <div className="me-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="row mt-5">
                {/** Input Name */}
                <Input
                  className="name"
                  title="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  text={textName}
                />
              </div>
              <div className="mt-3 mb-3"></div>
              <div className="row">
                {/** Input Age */}
                <Input
                  className="age"
                  title="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  text={textAge}
                />
              </div>
              <div className="mt-3 mb-3"></div>
              <div className="row">
                {/** Input Address */}
                <Input
                  className="address"
                  title="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  text={textAddress}
                />
              </div>
              <div className="mt-3 mb-3"></div>
              <div className="row">
                {/** Input Phone */}
                <Input
                  className="phone"
                  title="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  text={textPhone}
                />
              </div>
              <div className="mt-3 mb-3"></div>
            </div>

            {checkUpdate && (
              <button
                type="submit"
                className="btn btn-primary"
                onClick={HandlerSubmit}
              >
                Submit
              </button>
            )}
            {!checkUpdate && (
              <button
                type="submit"
                className="btn btn-primary"
                onClick={onClickEdit}
              >
                Update
              </button>
            )}

            <button
              className="btn btn-secondary m-2 btnCan"
              onClick={HandlerCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Crud;
