import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import './App.css';
import 'tachyons';


const ParticlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable:true,
          value_area:300
        }
      }
    }
}


function App() {
  return (
    <div className="App">
     <Particles className='particles' params={ParticlesOptions}/> 
     <Navigation/>
     <Logo />
     <Rank />
     <ImageLinkForm />
     {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
