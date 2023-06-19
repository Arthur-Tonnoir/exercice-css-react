import './App.css';
import './style.css';

import Photo from './Components/Photo/Photo';
import GridLeft from './Components/GridLeft/GridLeft';
import GridRight from './Components/GridRight/GridRight';

function App() {
  return (
    <div className="main-app">
      <Photo className="main-app-one" />
      <div className='child-app'>
        <GridLeft className='grid-left'/>
        <GridRight className='grid-right'/>
      </div>
    </div>
  );
}

export default App;
