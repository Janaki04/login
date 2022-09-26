import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
// import Dashboard from './Component/Dashboard';
import Form from './Component/Form'


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path="/" element={<Signin/>}/>
       <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/form" element={<Form/>}/>

        </Routes>
     </Router>
   </div>
  );
}

export default App;
