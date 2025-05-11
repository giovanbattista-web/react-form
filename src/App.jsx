import { useState } from "react";

const articles = [
  "X consigli per allenarti in sicurezza a casa",
  "X eventi sportivi da non perdere nel 2023",
  "X modi per allenarti insieme al tuo cane",
  "Come calcolare le calorie consumate",
  "5 app per monitorare i tuoi allenamenti",
  "Perché e quando farsi seguire da un personal trainer"
];

function App() {
  const [newArticle, setNewArticle] = useState("");

  const addArticle = (ev) => {
    ev.preventDefault();
    console.log(ev);
  }

  return (
    <>
      <div className="container">
        <h1>Articoli</h1>
        <ul className="list-group mb-4">
          {articles.map((article, index) => (
            <li key={index} className="list-group-item">{article}</li>
          ))}
        </ul>
        <form onSubmit={addArticle}>
          <div className="input-group mb-3">
            <input
              value={newArticle}
              onChange={(ev) => {
                console.log(ev);
                setNewArticle(ev.target.value)
              }}  // ev E' L'EVENTO 
              type="text" className="form-control" placeholder="Nuovo articolo" />
            <button className="btn btn-primary">Aggiungi articolo</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
