import Announcement from '../components/Announcement';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import PopularProducts from '../components/PopularProducts';
import Slider from '../components/Slider';

import './home.css';

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Category/>
      <PopularProducts/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home;