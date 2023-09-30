import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./components/Home";
import { Flavors } from "./components/Flavors";
import { FlavorsCategory } from "./components/FlavorsCategory";
import { Navigation } from "./components/navbarFiles/Navigation";
import { Error404 } from "./components/Error404";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="flavors" element={<Flavors />} />
                <Route path="flavorsCategory" element={<FlavorsCategory />} />
                <Route path="*" element={<Error404 />} />
          </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;