import React from 'react';

import './GridLeft.css';
import '../../style.css';

function GridLeft(){
    return (
      <div className='grid-left'>
        <div className='contact'>
          <div className='block-title'><h4>CONTACT</h4></div>
          <div className='adresse'>
            <div className='image'>
              <img src='' alt='adresse'/>
            </div>
            <div className='text'><p>1 rue Gambetta <br/> 62740 Fouquierès-Lès-Lens</p></div>
          </div>
          <div className='email'>
            <div className='image'>
              <img src='' alt='email'/>
            </div>
            <div className='text'><p>arthur.tonnoir.pro@sfr.fr</p></div>
          </div>
          <div className='numero'>
          <div className='image'>
              <img src='' alt='phone'/>
            </div>
            <div className='text'><p>06.42.20.40.98</p></div>
          </div>
          <div className='linkedin'>
            <div className='title'><p>Linkedin</p></div>
            <div className='text'><a href='https://linkedin.com/in/arthur-tonnoir'>https://linkedin.com/in/arthur-tonnoir</a> </div>
          </div>
          <div className='github'>
          <div className='title'><p>GitHub</p></div>
            <div className='text'><a href='https://github.com/Arthur-Tonnoir'>https://github.com/Arthur-Tonnoir</a></div>
          </div>
        </div>
        <div className='interet'>
          <div className='block-title'><h4>CENTRE D'INTERET</h4></div>
          <div className='one'><p>Développement Mod Minecraft</p></div>
          <div className='two'><p>Jeux Vidéo</p></div>
          <div className='three'><p>Manga</p></div>
        </div>
        
      </div>
    );
}

export default GridLeft;