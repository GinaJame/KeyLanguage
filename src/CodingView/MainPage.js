import React,{ useState } from 'react';
import './MainPage.css';
import audio from './audio.wav';
import ReactPlayer from 'react-player';
import bg from './background.jpeg';
//import azure from './azure'
//import Sound from 'react-sound'
 

function synthesizeSpeech(codingText)  {
  // pull in the required packages.
  const sdk = require("microsoft-cognitiveservices-speech-sdk");
  //const readline = require("readline");
  
  // replace with your own subscription 
  const subscriptionKey = "b094fed5294f4d1a8314fe671716c51c";
  const serviceRegion = "southcentralus"; // e.g., "westus"
  const filename = "audio.wav";

  // we are done with the setup

  // now create the audio-config pointing to our stream and
  // the speech config specifying the language.
  const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
  const synthesizer = new sdk.SpeechSynthesizer(speechConfig, undefined);
 
  synthesizer.speakSsmlAsync(
    codingText,
      result => {
          if (result.errorDetails) {
              console.log("No funciono");
          } else {
              console.log("Funcionando ando")
          }

          synthesizer.close();
      },
      error => {
          console.log(error);
          synthesizer.close();
      });
  
}
export default function MainPage() {
    const [play, setPlaying]=useState(true);
    const [code, setCode] = useState([]);
    const handleOnChange = (event) => {
      //music.play();
      console.log(event.target.name);
      console.log(event.target.value);
      setCode({
        [event.target.name]: event.target.value
      });
      synthesizeSpeech(code)
      setPlaying(!play)
      setTimeout(() => { console.log("Stop playing"); }, 5000);
      setPlaying(!play)

    };

    return (
        <div className="MainPage" style={{ backgroundImage: `url(${bg})` }}>
          <h3 className="title">Key Language</h3>
          <textarea name="coding" onChange={handleOnChange} className="textarea"/>
            <button className="">
                Try Code!
            </button>
            <ReactPlayer
              className="Audio"
              url={audio}
              playing={play}
            />
        </div>
    );
  }