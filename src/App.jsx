import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home/page';
import Search from './pages/Search/page';
import Profile from './pages/Profile/page';
import Ganres from './pages/GanresSearch/page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/search/:searchtext' element={<Search/>} />
          <Route path='/movie/:id' element={<Profile/>}/>
          <Route path='/ganres/:id' element={<Ganres/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
