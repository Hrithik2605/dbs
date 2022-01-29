import logo from './logo.svg';
import './App.css';
import Account from "./Account";
import Navbar from './Navbar';
import Transaction from './Transaction';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/transactions" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
