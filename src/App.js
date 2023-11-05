import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Homepage from "./components/Homepage";
import { GlobalStorage } from "./contexts/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
