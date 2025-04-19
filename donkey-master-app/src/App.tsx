import React from 'react';
import logo from './logo.svg';
import './App.css';
import Participants from './Participants';
import Table from './Table';
import Deck from './Deck';

function App() {
  return (
    <div className="App">
      <h2 className='text-3xl'>Donkey master</h2>
      <Participants participants={[{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]} />
      <Table />
      <Deck />
    </div>
  );
}

export default App;
