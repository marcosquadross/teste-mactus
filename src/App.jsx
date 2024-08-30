import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/pages/RegisterUser/RegisterUser";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Register />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
