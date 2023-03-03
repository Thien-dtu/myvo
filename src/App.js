import { Route, Routes } from 'react-router-dom';
import './App.css';
// import DisplayLogin from "./component/cms/Login";
import DisplayError from './pages/Error';
import DisplayProduct from './pages/Products';
import JsonDataDisplay from './pages/TableUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JsonDataDisplay />} />
        <Route path="/app-list" element={<DisplayProduct />} />
        <Route path="/app-list/*" element={<DisplayError />} />
        <Route path="*" element={<DisplayError />} />
      </Routes>
      {/* <JsonDataDisplay /> */}
    </div>
  );
}

export default App;
