import './App.css';
import MainInfo from "./components/MainIfo/MainInfo";
import {Route, Routes} from "react-router-dom";
import Download from "./pages/DownloadPage/Download";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainInfo/>}/>
            <Route path="download" element={<Download/>}/>
        </Routes>

    );
}

export default App;
