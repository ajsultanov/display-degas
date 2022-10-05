import './App.css';
import Card from './Card.js';
import { useState, useEffect } from 'react';

function App() {
  const [imgURL, setImgURL] = useState('');
  const [workTitle, setWorkTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [workDate, setWorkDate] = useState('');

  const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/436121'

  useEffect(() => {
    fetch(url)
    .then(resp => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      } else {
        return resp.json();
      }
    })
    .then(data => {
      setImgURL(data.primaryImageSmall);
      setWorkTitle(data.title);
      setArtistName(data.artistDisplayName);
      setWorkDate(data.objectDate);
    })
    .catch(error => console.log(error));
  }, [])

  return (
    <div>
      <Card 
        imgURL={imgURL}
        workTitle={workTitle}
        artistName={artistName}
        workDate={workDate}
      />
    </div>
  );
}

export default App;
