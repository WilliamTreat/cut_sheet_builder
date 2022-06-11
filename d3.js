const dummy_data = [
  { id: 'd1', value: 10, region: 'USA' },
  { id: 'd2', value: 11, region: 'China' },
  { id: 'd3', value: 12, region: 'India' },
  { id: 'd4', value: 6, region: 'Germany' },
];

const container = d3.select('svg')
  .classed('container', true);

const bar = container 
  .selectAll('.bar')
  .data(dummy_data)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', '50')
  .attr('height', data => (data.value * 15));


