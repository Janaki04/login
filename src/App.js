import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Dashboard from './Component/Dashboard';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path="/" element={<Signin/>}/>
       <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>

        </Routes>
     </Router>
   </div>
  );
}

export default App;
