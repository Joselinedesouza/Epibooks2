import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import AlertWelcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNavbar />
      <AlertWelcome />
      <MyFooter />;
    </>
  );
}

export default App;
