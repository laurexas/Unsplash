import React from 'react';
import Searchbar from './components/SearchBar/Searchbar';
import Body from './components/Grid/Grid';
import Error from './components/UI/Error/Error';



function App() {
  return (
    <div className="App">
      <header>
        <Searchbar/>
      </header>
      <Body/>
      <Error/>
    </div>
  );
}

export default App;
