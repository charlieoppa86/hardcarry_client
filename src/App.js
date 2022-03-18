import './app.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Content from './pages/content/Content';
import Detail from './pages/detail/Detail';
import List from './pages/list/List';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" >
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={< List />} /> 
              <Route path=':userId' element={<Detail />} />
            </Route>
            <Route path='content'>
              <Route index element={< List />} /> 
              <Route path=':contentId' element={<Detail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
