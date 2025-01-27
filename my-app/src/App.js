import React, { useState } from 'react';
import Home from './component/Home';

const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "أبو بكر الرازي",
      isbn: "893847239479",
    },
    {
      id: 3,
      title: "تفسير الأحلام",
      author: "ابن سيرين",
      isbn: "983478239847",
    },
  ],
};

function App() {
  const [state] = useState(initState);

  return (
    <div>
      <Home books={state.books} />
    </div>
  );
}

export default App;
