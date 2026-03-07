import { Routes, Route } from 'react-router-dom';
import './App.css'
import Chatbot from './Chatbot';
import Checklist from './Checklist';
import Dashboard from './Dashboard';
import Map from './Map';
import Quiz from './Quiz';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Chatbot" element={<Chatbot />} />
      <Route path="/Checklist" element={<Checklist />} />
      <Route path="/Map" element={<Map />} />
      <Route path="/Quiz" element={<Quiz />} />
    </Routes>
  )
}

export default App
