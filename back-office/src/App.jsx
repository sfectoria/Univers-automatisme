import "./App.css";
import DrawerLeft from "./layout/Drawer";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <DrawerLeft /> */}
      <Sidebar/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
