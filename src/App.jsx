import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import './App.css';

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
