import NavBar from '../Components/NavBar';
import CarouselComp from '../Components/Carousel';
import CardComp from '../Components/Card';
import '../App.css';
import PR from '../assets/PR.jpg';
import Programming from '../assets/Programming.jpg';
import Technic from '../assets/Technic.jpg';
import Footer from '../Components/Footer';

export default function HomePage() {

  return (
    <div>
      <NavBar />
      <h1 className='m-3 display-2'>Toasted Minds Team</h1>
      <CarouselComp />
      <div className='CardsContainer d-flex flex-row p-4 justify-content-center'>
        <CardComp className='card' department="Programming" depImage={Programming} depDescription='Aici programam' />
        <CardComp className='card' department="Technic" depImage={Technic} depDescription='Aici construim' />
        <CardComp className='card' department="PR"  depImage={PR} depDescription='Aici postam' />
      </div>
      <Footer />
    </div>
  );

}