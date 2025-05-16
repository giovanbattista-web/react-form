import { useState } from 'react';

const initialPosts = [
  {
    id: 1,
    title: "X consigli per allenarti in sicurezza a casa",
  },
  {
    id: 2,
    title: "X eventi sportivi da non perdere nel 2023",
  },
  {
    id: 3,
    title: "X modi per allenarti insieme al tuo cane",
  },
  {
    id: 4,
    title: "Come calcolare le calorie consumate",
  },
  {
    id: 5,
    title: "5 app per monitorare i tuoi allenamenti",
  }
];

function App() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  const onHandleSubtmit = (e) => {
    e.preventDefault();

    // CREO UN NUOVO OGGETTO
    const obj = {
      id: posts[posts.length - 1].id + 1,
      title: newPost,
    };

    setPosts([...posts, obj]);
  };


  return (
    <>
      <div className="container">
        <div className='row gy-4'>
          <div className='col-12'>
            <h1>React Blog Form</h1>
          </div>
          <div className='col-12'>
            {/* VISUALIZZARE LA LISTA DI ARTICOLI */}
            <ul className='list-group'>
              {posts.map((post) => {
                return (
                  <li className='list-group-item' key={post.id}>{post.title}</li>
                )
              })}
            </ul>
            <form onSubmit={onHandleSubtmit}>
              <input type="text" placeholder='Nuovo post' className='form-control'
                onChange={(e) => { setNewPost(e.target.value) }} />
              <button className='btn btn-primary'>Inserisci</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
};

{/*

// BONUS 
function App() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  const onHandleSubtmit = (e) => {
    e.preventDefault();

    // CREO UN NUOVO OGGETTO
    const obj = {
      id: posts[posts.length - 1].id + 1,
      title: newPost,
    };

    setPosts([...posts, obj]);
    setNewPost("");
  };

  const onHandleDelete = (id) => {
    // alert("Elemento cancellato");
    const updatedPosts = posts.filter((post) => post.id != id);
    setPosts(updatedPosts);
  }

  return (
    <>
      <div className="container">
        <div className='row gy-4'>
          <div className='col-12'>
            <h1>React Blog Form</h1>
          </div>
          <div className='col-12'>
            {/* VISUALIZZARE LA LISTA DI ARTICOLI 
            <ul className='list-group'>
              {posts.map((post) => {
                return (
                  <li className='list-group-item' key={post.id}>
                    <div className='d-flex justify-content-between'>
                      <div>{post.title}</div>
                      <div>
                        <button className='btn btn-danger'
                          onClick={() => {
                            // IN CASO DI ARRAY DI STRINGHE SI PASSA LA POSIZIONE COME INDICE QUINDI NON ARRAY DI OGGETTI
                            onHandleDelete(post.id)
                          }}>
                          <i className='fas fa-trash'></i>
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <form onSubmit={onHandleSubtmit}>
              <input type="text" placeholder='Nuovo post' className='form-control'
                onChange={(e) => { setNewPost(e.target.value) }} />
              <button className='btn btn-primary'>Inserisci</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
};

// BONUS IN CASO DI ARRAY DI STRINGHE 
const initialPosts = ["Titolo 1", "Titolo 2", "Titolo 3", "Titolo 4", "Titolo 5"]
function App() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  const onHandleSubtmit = (e) => {
    e.preventDefault();

    setPosts([...posts, newPost]);
    setNewPost("");
  };

  const onHandleDelete = (index) => {
    const updatedPosts = posts.filter((post, i) => i != index);
    setPosts(updatedPosts);
  };

  return (
    <>
      <div className="container">
        <div className='row gy-4'>
          <div className='col-12'>
            <h1>React Blog Form</h1>
          </div>
          <div className='col-12'>
            {/* VISUALIZZARE LA LISTA DI ARTICOLI 
            <ul className='list-group'>
              {posts.map((post, index) => {
                return (
                  <li className='list-group-item' key={index}>
                    <div className='d-flex justify-content-between'>
                      <div>{post}</div>
                      <div>
                        <button className='btn btn-danger'
                          onClick={() => {
                            // IN CASO DI ARRAY DI STRINGHE SI PASSA LA POSIZIONE COME INDICE QUINDI NON ARRAY DI OGGETTI
                            onHandleDelete(index)
                          }}>
                          <i className='fas fa-trash'></i>
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <form onSubmit={onHandleSubtmit}>
              <input type="text" placeholder='Nuovo post' className='form-control'
                onChange={(e) => { setNewPost(e.target.value) }} />
              <button className='btn btn-primary'>Inserisci</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
};
*/}

export default App;
