import "./App.css";
import Logo from "./Components/Logo";
import Introduction from "./Components/Introduction";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Feedback from "./Components/Feedback";
import Images from "./Components/Images";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Feedback />
      <Logo />
      <Introduction />
      <Aboutus />
      <Images />
      <Contact /> 
      <Footer /> 
    </div>
  );
}

export default App;
