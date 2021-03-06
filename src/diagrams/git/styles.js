const getStyles = options =>
  `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial;
    font-family: var(--mermaid-font-family);
  }
  .branch {
    stroke-width: 10;
  }
  .branch0 { stroke: ${options.fillType0}; }
  .branch1 { stroke: ${options.fillType1}; }
  .branch2 { stroke: ${options.fillType2}; }
  .branch3 { stroke: ${options.fillType3}; }
  .branch4 { stroke: ${options.fillType4}; }
  .branch5 { stroke: ${options.fillType5}; }
  .branch6 { stroke: ${options.fillType6}; }
  .branch7 { stroke: ${options.fillType7}; }
  .label0  { fill: ${options.fillType0}; }
  .label1  { fill: ${options.fillType1}; }
  .label2  { fill: ${options.fillType2}; }
  .label3  { fill: ${options.fillType3}; }
  .label4  { fill: ${options.fillType4}; }
  .label5  { fill: ${options.fillType5}; }
  .label6  { fill: ${options.fillType6}; }
  .label7  { fill: ${options.fillType7}; }
  .branchLabel  { }
  }
`;

export default getStyles;
