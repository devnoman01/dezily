import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return 
  <div>
<Navbar/>
<Routes>
<Route path="/" element={<Home />} />

</Routes>
  </div>;
}

export default App;
