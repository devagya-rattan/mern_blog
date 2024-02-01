import Header from "./components/Header";
import Footer from "./components/Footer"
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path="/signin" element={<Signin/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
