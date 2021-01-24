import React,{ useState } from 'react';
import './MainPage.css';
import bg from './background.jpeg';
import eye from './eye.png'
 


export default function MainPage() {
  //The code is what we must listen
    const [code, setCode] = useState({coding:''});
    //The result of the code
    const [textOutput, setText] = useState([]);

      //On change we should convert to audio and play it
    const handleOnChange = (event) => {
      setCode({
        [event.target.name]: event.target.value
      });
      console.log(code)
      if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance();
        console.log(code.coding.charAt(code.coding.length))
          msg.text = code.coding.charAt(code.coding.length-1) ;
          window.speechSynthesis.speak(msg);
       }else{
         // Speech Synthesis Not Supported 😣
         alert("Sorry, your browser doesn't support text to speech!");
      }

    };
    const handleOnClick = ()=>{
      //const x = code;
      //const outputString = eval(x);
      //console.log(outputString)
      //setText(outputString.toString())
      setText("Happy to see you too")
      if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance();
          msg.text = textOutput ;
          window.speechSynthesis.speak(msg);
       }else{
         // Speech Synthesis Not Supported 
         alert("Sorry, your browser doesn't support text to speech!");
      }
    }

    return (
      //UI 
        <div className="MainPage" style={{ backgroundImage: `url(${bg})` }}>
          <div className="Header">
            <img src={eye}/>
            <h1>
              IRIS SOFTWARE
            </h1>
          </div>
          <div className="WrapProgramming">
            <div className="WrapBox">
              <h3 className="title">Start Coding!</h3>
              <textarea name="coding" onChange={handleOnChange} className="textarea"/>
                <button className="niceButton" onClick={handleOnClick}>
                    Run your Code!
                </button>
                {/*<ReactPlayer
                  className="Audio"
                  url={audio}
                  playing={false}
                />*/}
            </div>
            <div className="WrapConsole">
              <h3 className="title">Your Output!</h3>
              <textarea name="coding" className="textarea" value={textOutput} disabled/>

            </div>
          </div>
          
          <div className="Footer">
            <a target="_blank" href="https://icons8.com/icons/set/visible" rel='noreferrer'>Eye icon</a> icon by <a target="_blank" href="https://icons8.com" rel='noreferrer'>Icons8</a>
          </div>
        </div>
    );
  }
  