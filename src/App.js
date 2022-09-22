import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import NotePage from "./pages/NotePage";
import './App.css';

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route element={<NotesPage />} path="/" exact />
            <Route element={<NotePage />} path="/note/:id"  />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
