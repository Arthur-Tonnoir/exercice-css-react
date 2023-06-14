import React from 'react';
import './GridRight.css';
import '../../style.css';

// https://codepen.io/RajRajeshDn/pen/dyyrdQP


function GridRight() {
  return (
    <div className='grid-right'>
      <div className='experiences'>
        <div className='language'>
          <div className='experience-block-title'>
            <h4>Language de code / Framework</h4>
          </div>
          <div className='skills'>
            <ul>
              <li><img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java" title='java'/><div><p>java</p></div></li>
              <li><img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript" title='javascript'/><div><p>javascript</p></div></li>
              <li><img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript" title='typescript'/><div><p>typescript</p></div></li>
              <li><img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html" title='html'/><div><p>html</p></div></li>
              <li><img width="48" height="48" src="https://img.icons8.com/color/48/c-sharp-logo.png" alt="c-sharp" title='c#'/><div><p>c#</p></div></li>
            </ul>
            <ul>
              <li><img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png" alt="angular" title='angular'/><div><p>angular</p></div></li>
              <li><img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/react--v1.png" alt="react" title='react'/><div><p>react</p></div></li>
              <li><img width="48" height="48" src="https://img.icons8.com/color/48/spring-logo.png" alt="springboot" title='spring boot'/><div><p>angular</p></div></li>
              <li><img width="48" height="48" src="https://img.icons8.com/ios/48/sql.png" alt="sql" title='sql'/><div><p>sql</p></div></li>
            </ul>
            <ul>
              <li><img width="48" height="48" src="https://img.icons8.com/ios-filled/48/github.png" alt="github" title='github'/><div><p>github</p></div></li>
              <li><img width="48" height="48" src="https://img.icons8.com/color/48/intellij-idea.png" alt="intellij-idea" title='intellij-idea'/><div><p>intellij-idea</p></div></li>
              <li><img width="48" height="48" src="https://img.icons8.com/color/48/my-sql.png" alt="my-sql" title='MySQL'/><div><p>MySQL</p></div></li>
              <li><img width="48" height="48" src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="visual-studio-code" title='Visual Studio Code'/><div><p>Visual Studio Code</p></div></li>
            </ul>
          </div>
        </div>
        <div className='experience'>
          <div className='experience-block-title'>
            <h4>Experience professionnelles</h4>
          </div>
          <div className='ligne'></div>
          <div className='block'>
            <div className='title-right'>
              <h2>The-ring.io</h2>
            </div>
            <div className='date'><p>Stage–04/01 au 17/02/2021</p></div>
            <div className='description'><p>Conception de site, Formation conception de site Web</p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>Lycée Henri Senez</h2>
            </div>
            <div className='date'><p>Stage–14/01 au 08/02/2019</p></div>
            <div className='description'><p>Dépannage des professeurs et inventaire du matériels 
informatique et vidéo.</p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>Communauté d’Agglomération Hénin Carvin</h2>
            </div>
            <div className='date'><p>Stage–24/09 au 19/10/2018 et 12/03 au 06/04/2018</p></div>
            <div className='description'><p>Dépannage dans les différents services, observation de
l’installation de la fibre optique. Formatage et réinstallations
d’ordinateurs. Dépannage des médiathèques du Pas-de-Calais</p></div>
          </div>
        </div>
        <div className='education'>
          <div className='experience-block-title'>
            <h4>Education</h4>
          </div>
          <div className='ligne'></div>
          <div className='block'>
            <div className='title-right'>
              <h2>Formation Développeur Java/JEE IB-Formation Cegos</h2>
            </div>
            <div className='date'><p>Stage–25/04 au 19/07/2022</p></div>
            <div className='description'><p>Formation Java, Spring, JS, HTML/CSS, Angular, TypeScript … </p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>Lycée Gaston Berger Lille</h2>
            </div>
            <div className='date'><p>BTS Système Informatique aux 
Organisations option SLAM (2019-2021)</p></div>
            <div className='description'><p>Produire et fournir un ensemble de solutions et/ou de services 
informatiques.</p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>Lycée Robespierre – Lens</h2>
            </div>
            <div className='date'><p>Bac Système Numérique (2016-2019)</p></div>
            <div className='description'><p>Les équipements et les installations exploités et organisés avec mention.</p></div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default GridRight;