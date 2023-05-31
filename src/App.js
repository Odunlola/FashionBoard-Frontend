import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import BrandsIndex from './pages/BrandsIndex';
import BrandsShow from './pages/BrandsShow';
import BrandsEdit from './pages/BrandsEdit';
import BrandsDelete from './pages/BrandsDelete';


function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='brands'>
          <Route path='' element={<BrandsIndex />} />
          <Route path=':brandId'>
            <Route path='' element={<BrandsShow />} />
            <Route path="edit" element={<BrandsEdit />} />
            <Route path="delete" element={<BrandsDelete />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
