import './App.css';
import Nav from './Layouts/Nav/Nav'
import Dashboard from './Layouts/Dashboard/Dashboard'
import Footer from './Layouts/Footer/Footer'
import Block from './Pages/Results/Block/Block'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
      <>
      <div className='h-screen flex flex-col'>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/block" element={<Block />} />
        </Routes>
      </div>
      <Footer />
      </>
  );
}

export default App;
