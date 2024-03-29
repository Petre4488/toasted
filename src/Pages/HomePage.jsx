import CarouselComp from '../Components/Carousel';
import CardComp from '../Components/Card';
import '../App.css';
import PR from '../assets/PR.png';
import Programming from '../assets/Programming.png';
import Technic from '../assets/Technic.png';

export default function HomePage() {

  return (
    <div>
      <h1 className='m-3 display-2'>Toasted Minds Team</h1>
      <CarouselComp />
      <div className='cardsContainer d-flex p-4 justify-content-center'>
        <CardComp className='card' department="Programming" depImage={Programming} depDescription='Aici programam' />
        <CardComp className='card' department="Technic" depImage={Technic} depDescription='Aici construim' />
        <CardComp className='card' department="PR"  depImage={PR} depDescription='Aici postam' />
      </div>
    </div>
  );

}
