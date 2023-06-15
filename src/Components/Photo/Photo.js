import React from 'react';

import './Photo.css';
import '../../style.css';

function Photo(){
    return (
            <div className='main-photo'>
                <div className='container-bleu'>
                    <div className='identite-container'>
                        <div className='container-blanc'>
                        <img src='' alt="photo"/>
                        </div>
                        <div className='block-identite'>
                        <div className='identite'><h4>Arthur TONNOIR</h4></div>
                        <div className='job'>Développeur Back-End</div>
                        </div>
                    </div>
                </div>
                
                
            </div>
    );
}

export default Photo;