import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import data from './flare-2.json';

const Graph = () => {
  // Ref for the SVG container
  const svgRef = useRef();

  useEffect(() => {
        const chart = () => {
          // Define the dimensions and margins for the chart
          const width = 928;
          const height = 600;
          const margin = {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          };
    
          // Calculate the actual width and height considering margins
          const innerWidth = width - margin.left - margin.right;
          const innerHeight = height - margin.top - margin.bottom;

          // Create a hierarchical tree layout
          const root = d3.hierarchy(data);
          const treeLayout = d3.tree().size([innerHeight, innerWidth]);

          // Perform the layout to calculate the node positions
          treeLayout(root);

          // Create a new SVG element
          const svg = d3
            .create('svg')
            .attr('width', width)
            .attr('height', height);

          // Create a group element to apply margins
          const g = svg
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

          // Render the links (lines connecting nodes)
          g.selectAll('path')
            .data(root.links())
            .enter()
            .append('path')
            .attr('d', (d) => {
              return `M${d.source.y},${d.source.x}V${d.target.x}H${d.target.y}`;
            })
            .attr('fill', 'none')
            .attr('stroke', 'black');

          // Render the nodes (circles representing data elements)
          g.selectAll('circle')
          .data(root.descendants())
          .enter()
          .append('circle')
          .attr('cx', (d) => d.y)
          .attr('cy', (d) => d.x)
          .attr('r', 4)
          .attr('fill', 'steelblue');

        // Render the node labels (text displaying node names)
        g.selectAll('text')
          .data(root.descendants())
          .enter()
          .append('text')
          .attr('x', (d) => d.y + 6) // Add an offset to the x position
          .attr('y', (d) => d.x)
          .attr('dx', (d) => (d.children ? -6 : 6))
          .attr('dy', 12) // Increase the vertical spacing between labels
          .attr('text-anchor', (d) => (d.children ? 'end' : 'start'))
          .attr('font-size', '12px')
          .text((d) => d.data.name);
    
          return svg.node();
        };
        // const chart = () => {
        //     const width = 800;
        //     const height = 600;
        //     const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      
        //     const innerWidth = width - margin.left - margin.right;
        //     const innerHeight = height - margin.top - margin.bottom;
      
        //     const svg = d3.create('svg').attr('width', width).attr('height', height);
      
        //     const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
      
        //     // Extract values from the data hierarchy
        //     const flattenData = (root) => {
        //       const nodes = [];
        //       root.each((node) => nodes.push(node));
        //       return nodes;
        //     };
      
        //     const nodes = flattenData(d3.hierarchy(data));
      
        //     // Create scales to map data attributes to visual attributes
        //     const xScale = d3.scaleLinear().domain([0, nodes.length]).range([0, innerWidth]);
        //     const yScale = d3.scaleLinear().domain([0, d3.max(nodes, (d) => d.data.value)]).range([innerHeight, 0]);
      
        //     // Render the points (scatter plot)
        //     g.selectAll('circle')
        //       .data(nodes)
        //       .enter()
        //       .append('circle')
        //       .attr('cx', (d, i) => xScale(i))
        //       .attr('cy', (d) => yScale(d.data.value))
        //       .attr('r', 4)
        //       .attr('fill', 'steelblue');
      
        //     // Add axis to the chart
        //     const xAxis = d3.axisBottom(xScale);
        //     const yAxis = d3.axisLeft(yScale);
      
        //     g.append('g').attr('transform', `translate(0,${innerHeight})`).call(xAxis);
        //     g.append('g').call(yAxis);
      
        //     return svg.node();
        //   };

    // Append the SVG container to the DOM
    const svgNode = chart();
    svgRef.current.appendChild(svgNode);
  }, []);

  return <div className='collapsable-tree' ref={svgRef}></div>;
};

export default Graph;

