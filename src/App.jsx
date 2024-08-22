
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/homepage';
import Search from './pages/searchpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/search/:searchtext' element={<Search/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
