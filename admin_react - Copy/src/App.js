import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";


function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <SideBar />
        <Home /> 
      </div>
    </div>
  );
}

export default App;
