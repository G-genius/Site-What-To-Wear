import './App.css';
import MainInfo from "./components/MainIfo/MainInfo";
import {Route, Routes} from "react-router-dom";
import Download from "./pages/DownloadPage/Download";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainInfo/>}/>
            <Route path="download" element={<Download/>}/>
            <Route path="privacy" element={<Privacy/>}/>
            <Route path="terms" element={<Terms/>}/>
        </Routes>

    );
}

export default App;
