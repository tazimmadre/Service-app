import { ChooseService } from './components/ChooseService';
import Login from './components/Login';
import { Onboarding } from './components/Onboarding';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route Component={Onboarding} path='/'/>
          <Route Component={ChooseService} path='/choose-service'/>
          <Route Component={Login} path='/login'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
