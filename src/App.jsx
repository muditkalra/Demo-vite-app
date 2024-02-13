import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';


function App() {

  return (
    <>
    <div> Lorem ipsum dolor sit amet consectetur.</div>
    <Link to={'/home'}> Home</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
