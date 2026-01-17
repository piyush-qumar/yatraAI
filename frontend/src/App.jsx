import DestinationList from './pages/DestinationList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIAssistant from "./pages/AIAssistant";

function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<DestinationList />} />
        <Route path="/ai" element={<AIAssistant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;