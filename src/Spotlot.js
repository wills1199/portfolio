import React from 'react';
import spotlot from './imgs/spotlotproject.png';
import './App.css';

export default function Spotlot({num}) {
  return (
    <div className="spotlot" style={{marginRight: num}}>
      <div className='imageContainer'>
        <img className="image" src={spotlot} alt="spotlot app"/>
        <div className='overlay'>
          <p style={{color: '#ffffff', paddingLeft: 10}}>SpotLot is a mobile app built using React Native. SpotLot allows users to rent out empty parking spots they may have at their homes, allowing other users to reserve those parking spots straight from their phones.<br></br> (JazzFest, Mardi Gras, Sporting Events)</p>
          <a href="https://github.com/OpSpark-Team-404/SpotLot" className="gitButton">View Code</a>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop: 'auto', marginBottom: 'auto', justifyContent: 'space-around'}}>
        <div style={{marginLeft: '7%', marginRight: 10, backgroundColor: '#5F95C3', width: '75px', height: '25px', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p style={{textAlign: 'center', color: '#ffffff'}}>React</p>
        </div>
        <div style={{marginRight: 10, backgroundColor: '#5F95C3', width: '110px', height: '25px', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p style={{textAlign: 'center', color: '#ffffff'}}>PostgreSQL</p>
        </div>
        <div style={{marginRight: 10, backgroundColor: '#5F95C3', width: '75px', height: '25px', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p style={{textAlign: 'center', color: '#ffffff'}}>Node.js</p>
        </div>
        <div style={{marginRight: '7%', backgroundColor: '#5F95C3', width: '75px', height: '25px', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p style={{textAlign: 'center', color: '#ffffff'}}>Fastify</p>
        </div>
      </div>
    </div>
  )
}