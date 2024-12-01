import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Selecting from './pages/selecting.jsx';
import Submissions from './pages/submissions.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selecting />} />
        <Route path="/submissions" element={<Submissions />} />
      </Routes>
    </Router>
  );
}

export default App;
