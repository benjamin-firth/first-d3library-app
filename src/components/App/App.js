import React, { useState, useEffect } from 'react';
import Chart from '../../d3files/d3file';
import './App.css';

const App = () => {
    const dataOne = [12,36,6,25,35,10,40];
    const dataTwo = [45,73,6,14];
    const dataThree = [1,16,6,25,73,6,43,36,20,10];

    const width = 500;
    const height = 500;

  return (
    <main>
      <Chart data={dataOne} w={width} h={height} color='cyan' />
      <Chart data={dataTwo} w={300} h={height} color='yellow' />
      <Chart data={dataThree} w={700} h={height} color='rebeccapurple' />
    </main>
  );
}

export default App;
