import React, { useState, useEffect } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { PiMicrophoneSlashFill } from "react-icons/pi";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function Dictaphone({ setformvalue }) {
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setformvalue(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <div className="box">
      <button
        className="flex "
        onClick={() => setIsListening((prevState) => !prevState)}
      >
        {isListening ? <PiMicrophoneSlashFill /> : <MdKeyboardVoice />}
      </button>
    </div>
  );
}

export default Dictaphone;
