import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Brands from './components/Brands';
import Ratings from './components/Ratings';


function App() {

  return (
 <div className = 'App'> 
  <Header/>
      {/* This is a gigantic if/else if/else statement. It's just conditionally deciding which component to render next in this list */}
      <Routes>
        {/* I want to have a home route with one component. I want an index and a show route for my books */}
        <Route path='/' element={<Home />} />
        <Route path='/brands'>
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
