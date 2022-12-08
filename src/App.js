import './App.css';
import Nav from './Layouts/Nav/Nav'
import Dashboard from './Layouts/Dashboard/Dashboard'
import Footer from './Layouts/Footer/Footer'
import Block from './Pages/Results/Block/Block'
import Transaction from './Pages/Results/Transaction/Transaction'
import Address from './Pages/Results/Address/Address'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
      <>
      <div className='h-screen flex flex-col'>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/block" element={<Block />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </div>
      <Footer />
      </>
  );
}

export default App;
