import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Chart = ({ data, height, width}) => {
  const myRef = useRef();

  const drawChart = () => {
    const testData = [12,36,6,25,35,10,40];
    const w = 500;
    const h = 400;
  
    const accessToRef = d3.select(myRef.current)
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('background-color', '#ccc')
      .style('padding', 10)
      .style('margin-left', 50)
  
    accessToRef.selectAll('rect')
      .data(testData)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d)
      .attr('width', 65)
      .attr('height', (d, i) => d * 10)
      .attr('fill', (d, i) => d > 25 ? 'tomato' : 'yellow')
  };

  useEffect(() => {
    drawChart();
  }, [])

  return (
    <div className='graphics-element'>
      <div ref={myRef} className='graphics-container'></div>
    </div>
  )
}

export default Chart;
