import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Homepage from "./components/Homepage";
import { GlobalStorage } from "./contexts/GlobalContext";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/" index element={<Homepage />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
          <Route path="/:name" element={<Details />}></Route>
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
