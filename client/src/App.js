import { Box } from "@mui/system";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/details/DetailView";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product/:id" element={<DetailView/>} />
          </Routes>
        </Box>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
