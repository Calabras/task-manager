import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import EditTask from './pages/EditTask';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task/:id" element={<EditTask />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
