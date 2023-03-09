import React from "react";
import Player from "@madzadev/audio-player";
const tracks = [
  {
    url: "https://github.com/patxiarana/audios/blob/main/Palito%20Ortega%20%20Yo%20Tengo%20Fe%20Que%20Todo%20Cambiar%20Official%20Audio.mp3?raw=true",
    title: "hoy tomo la guitarra",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];




const Player1 = () => {
  return (
  <div>
    <Player 
   trackList={tracks}
   />
  </div>
  );
};

export default Player1;
