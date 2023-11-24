import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Introduce from './pages/introduce/Introduce.jsx'
import Quiz from './pages/quiz/Quiz2.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Introduce></Introduce>}></Route>
          <Route path='/quiz/:difficulty/:amount' element={<Quiz></Quiz>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
