import Button from 'react-bootstrap/Button';
import SponsorCard from '../Components/SponsorCard';
import '../App.css';

export default function Sponsors() {
    return(
        <div>
            <h1>Sponsors</h1>
            <div className='d-flex justify-content-end align-items-center '>
                <Button variant="outline-info">Support us!</Button>{' '}
            </div>
            <div>
                <SponsorCard />
            </div>
        </div>
    )
}