import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/component/Login';
import ListePatient from './assets/component/ListePatient';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listepatient" element={<ListePatient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
