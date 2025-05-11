import { useState } from "react";

const articles = [
  "X consigli per allenarti in sicurezza a casa",
  "X eventi sportivi da non perdere nel 2023",
  "X modi per allenarti insieme al tuo can",
  "Come calcolare le calorie consumate",
  "5 app per monitorare i tuoi allenamenti",
  "Perché e quando farsi seguire da un personal trainer"
];

function App() {
  return (
    <>
      <div className="container">
        <h1>Articoli</h1>
        <ul className="list-group">
          {articles.map((article, index) => (
            <li key={index} className="list-group-item">{article}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
