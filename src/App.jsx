import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import AlertWelcome from "./components/Welcome";
import Books from "./components/Cards";

function App() {
  return (
    <>
      <MyNavbar />
      <AlertWelcome />
      <Books />
      <MyFooter />;
    </>
  );
}

export default App;
