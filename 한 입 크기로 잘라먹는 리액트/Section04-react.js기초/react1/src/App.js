// import './App.css';
import React from 'react';
import MyHeader from './MyHeader';
import Counter from './Counter';
import Container from './Container';

function App() {

  const counterProps = {
    a : 1, 
    b : 2,
    c : 3,
    d : 4,
    e : 5,
    // initialValue : 5,
  };

  return (
    <Container>
    <div >
      <MyHeader/>
      <Counter {...counterProps}/>
    </div>
    </Container>
  );
};

Counter.defaultProps={
  initialValue:0
}

export default App;
 