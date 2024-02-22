import React, {useState} from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

function App() {
  const [itemsArray, setItemsArray] = useState([
    {
      tShirtName: 'Navy Blue T-shirt',
      description: '100% Cotton',
      price: `$${1200}`,
      sizeL: 12,
      sizeM: 10,
      sizeS: 30
    },
    {
      tShirtName: 'MotoGP T-shirt',
      description: 'Blue and yellow, made of 100% Cotton',
      price: `$${5000}`,
      sizeL: 29,
      sizeM: 30,
      sizeS: 30
    },
    {
      tShirtName: 'PUBG Shirt',
      description: 'PUBG White T-shirt made of 100% cotton',
      price: `$${120}`,
      sizeL: 29,
      sizeM: 66,
      sizeS: 21
    }
  ])

  const submitHandler = (item) => {
    setItemsArray((prevState) => [...prevState, item])
  }
  return (
    <>
      <Header />
      <Form items={itemsArray} onSubmit={submitHandler}/>
      <Main items={itemsArray}/>
    </>
  );
}

export default App;
