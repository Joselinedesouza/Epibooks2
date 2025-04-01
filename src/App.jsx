import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import AlertWelcome from "./components/Welcome";
import BookCarousel from "./components/Cards";

function App() {
  return (
    <>
      <MyNavbar />
      <div className=" d-flex flex-column min-vh100">
        <main className="flex-grow-1">
          <AlertWelcome />
          <BookCarousel />
        </main>
      </div>
      <MyFooter />;
    </>
  );
}

export default App;
