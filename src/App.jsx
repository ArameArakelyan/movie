import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/homepage';
import Search from './pages/searchpage';
import Profile from './pages/movieprofilepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/search/:searchtext' element={<Search/>} />
          <Route path='/movie/:id' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
