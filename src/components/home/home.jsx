import React from 'react'
import './style.css'
import Imagehome from '../images/alpomish.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-info">
            <h1>Alpomish dostoni</h1>
            <p>„Alpomish“ — oʻzbek xalq ogʻzaki badiiy ijodidagi qahramon personaj. Turkiy xalqlarda ogʻizdan ogʻizga oʻtib kelayotgan biylarning sardori. Turkiy xalqlar orasida keng tarqalgan. „Alpomish“ning qoraqalpoq, qozoq, oltoy versiyala-ri doston shaklida, tatar va boshqird versiyalari ertak va ri-voyat shaklida bizgacha yetib kelgan. Oʻzbeklar „Alpomish“, qoraqalpoqlar „Alpamis“, qozoqlar „Alpamis batir“, oltoyliklar „Apip-Manash“, qozon tatarlari „Alpamsha“, boshqirdlar „Alpamisha va Barsin hiluu“ deb nomlaganlar.</p>
            <Link to="/story">Tarixi</Link>
        </div>
        <div className="home-image">
            <img src={Imagehome} />
        </div>
    </div>
  )
}

export default Home
