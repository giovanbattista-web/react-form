import { useState } from 'react'

const initialArticles = [
  "X consigli per allenarti in sicurezza a casa",
  "X eventi sportivi da non perdere nel 2023",
  "X modi per allenarti insieme al tuo cane",
  "Come calcolare le calorie consumate",
  "5 app per monitorare i tuoi allenamenti",
  "Perchè e quando farsi seguire da un personal trainer"
];

function App() {
  const [newArticle, setNewArticle] = useState("");
  const [articles, setArticles] = useState("initialArticles");

  const addArticle = ev => {
    ev.preventDefault();
    const article = newArticle.trim();
    setArticles([...initialArticles, newArticle]);
    setNewArticle("");

  };

  return (
    <>
      <div className="container">
        <h1>Articles</h1>
        <ul className="list-group mb-4">
          {initialArticles.map((article, index) => (
            <li key={index} className="list-group-item">{article}</li>
          ))}
        </ul>
        <form onSubmit={addArticle}>
          <div className='input- group mb-3'>
            <input
              value={newArticle}
              onChange={(ev) => {
                setNewArticle(ev.target.value);
              }}
              type="text"
              className="form-control"
              placeholder=" Nuovo articolo"
            />
            <button className='btn btn-primary'>Aggiungi</button>
          </div>
        </form>
      </div>
    </>
  )
};

export default App;
