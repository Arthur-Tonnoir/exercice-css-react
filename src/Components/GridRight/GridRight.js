import React from 'react';
import Getdata from '../../Data';
import './GridRight.css';
import '../../style.css';

// https://codepen.io/RajRajeshDn/pen/dyyrdQP


function GridRight() {
  const experiences = Getdata("experiences")
  const educations = Getdata("eductions");
  
  
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
            <ul>
              <li><img width="48" height="48" src='https://img.icons8.com/?size=100&id=65231&format=png&color=000000' alt='blender' title='blender'/><div><p>blender</p></div></li>
              <li><img width="48" height="48" src='https://img.icons8.com/?size=100&id=39848&format=png&color=000000' alt='unity 3d' title='Unity 3D'/><div><p>Unity 3D</p></div></li>
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
              <h2>{!experiences ? "Erreur " : experiences[0]["name"]}</h2>
            </div>
            <div className='date'><p>{!experiences ? "Erreur " : experiences[0]["date"]}</p></div>
            <div className='description'><p>{!experiences ? "Erreur " : experiences[0]["description"]}</p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>{!experiences ? "Erreur " : experiences[1]["name"]}</h2>
            </div>
            <div className='date'><p>{!experiences ? "Erreur " : experiences[1]["date"]}</p></div>
            <div className='description'><p>{!experiences ? "Erreur " : experiences[1]["description"]}</p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>{!experiences ? "Erreur " : experiences[2]["name"]}</h2>
            </div>
            <div className='date'><p>{!experiences ? "Erreur " : experiences[2]["date"]}</p></div>
            <div className='description'><p>{!experiences ? "Erreur " : experiences[2]["description"]}</p></div>
          </div>
        </div>
        <div className='education'>
          <div className='experience-block-title'>
            <h4>Education</h4>
          </div>
          <div className='ligne'></div>
          
          <div className='block'>
            <div className='title-right'>
              <h2>{!educations ? "Erreur " : educations[0]["name"]}</h2>
            </div>
            <div className='date'><p>{!educations ? "Erreur " : educations[0]["date"]}</p></div>
            <div className='description'><p>{!educations ? "Erreur " : educations[0]["description"]}</p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>{!educations ? "Erreur " : educations[1]["name"]}</h2>
            </div>
            <div className='date'><p>{!educations ? "Erreur " : educations[1]["date"]}</p></div>
            <div className='description'><p>{!educations ? "Erreur " : educations[1]["description"]}</p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>{!educations ? "Erreur " : educations[2]["name"]}</h2>
            </div>
            <div className='date'><p>{!educations ? "Erreur " : educations[2]["date"]}</p></div>
            <div className='description'><p>{!educations ? "Erreur " : educations[2]["description"]}</p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>{!educations ? "Erreur " : educations[3]["name"]}</h2>
            </div>
            <div className='date'><p>{!educations ? "Erreur " : educations[3]["date"]}</p></div>
            <div className='description'><p>{!educations ? "Erreur " : educations[3]["description"]}</p></div>
          </div>
          <div className='block'>
            <div className='title-right'>
              <h2>{!educations ? "Erreur " : educations[4]["name"]}</h2>
            </div>
            <div className='date'><p>{!educations ? "Erreur " : educations[4]["date"]}</p></div>
            <div className='description'><p>{!educations ? "Erreur " : educations[4]["description"]}</p></div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default GridRight;