
import { useState } from 'react';
import Hero from './components/Hero';
import '../src/index.css'
import Main from './components/Main';

import Category from './components/Category';

function App() {

  const [search, setSearch] = useState("general");

  return (
    <div>
      <Hero />
      <Category setSearch={setSearch} />
      <Main search={search}/>
    </div>
  );
}

export default App;
