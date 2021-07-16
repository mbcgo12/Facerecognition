import React,{Component} from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import './App.css';
import 'tachyons';


const app = new Clarifai.App({
  apiKey: 'c6ce5cfb9b3440549546cb6fa1e98ea7'
 });

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


class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:''
    }
  }
  
  onInputChange=(event)=>{
    this.setState({input : event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)

      .then(response => {
        console.log('hi', response)
        
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  render(){
  return (
    <div className="App">
     <Particles className='particles' params={ParticlesOptions}/> 
     <Navigation/>
     <Logo />
     <Rank />
     <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}
     />
     <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
  }
}
export default App;
