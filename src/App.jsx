import "./App.scss";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import ProductPage from "./pages/ProductPage/ProductPage";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar/Navbar";
import Announcement from "./components/Announcement/Announcement";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Home />
      </div>
    </div>
  );
};

export default App;
