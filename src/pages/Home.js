import '../App.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Brands from '../components/Brands';


function Home() {

  return (
 <div className = 'App'> 
  <Brands/>
  <>
  <a href="https://imgur.com/N6zZKto"><img src="https://i.imgur.com/N6zZKto.jpg" title="source: imgur.com" alt="accessories" className="Home-img"/></a>
  <div>Dresses</div>
  </>
  <a href="https://imgur.com/3E89Vs4"><img src="https://i.imgur.com/3E89Vs4.jpg" title="source: imgur.com"alt="blazer" className="Home-img"/></a>,
  <div>Dresses</div>
  <a href="https://imgur.com/GfR14GL"><img src="https://i.imgur.com/GfR14GL.jpg" title="source: imgur.com" alt="dresses" className="Home-img"/></a>
  <div>Dresses</div>
 

  </div>
  )
}


export default Home;