import { Route, Routes } from 'react-router-dom';
import './App.css';

import Crud from './pages/Crud';
import DisplayError from './pages/Error';
import DisplayProduct from './pages/Products';
// import JsonDataDisplay from './pages/TableUser';
import LogInForm from "./pages/Login";
import SignUpForm from "./pages/SignUp";


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<JsonDataDisplay />} /> */}
        <Route path="/" element={<SignUpForm />} />
        <Route path="/log-in" element={<LogInForm />} />
        <Route path="/product" element={<DisplayProduct />} />
        <Route path="/app-list/*" element={<DisplayError />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="*" element={<DisplayError />} />
      </Routes>
      {/* <JsonDataDisplay /> */}
    </div>
  );
}

export default App;
