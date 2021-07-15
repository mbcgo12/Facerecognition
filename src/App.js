// import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import './App.css';
import 'tachyons';


// const ParticlesOptions = {
//     particles: {
//       line_linked: {
//         shadow: {
//           enable: true,
//           color: "#3CA9D1",
//           blur: 5
//         }
//       }
//     }
// }


function App() {
  return (
    <div className="App">
     {/* <Particles params={ParticlesOptions}/>  */}
     <Navigation/>
     <Logo />
     <Rank />
     <ImageLinkForm />
     {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
