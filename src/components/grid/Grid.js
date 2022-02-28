import { useEffect, useState } from "react";
import { Node } from "../node/Node";

const numRows = 20;
const numCol = 50;

export const Grid = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(initGrid());
    console.log('I am rendering first');
  }, []);
  //for creating a new node
  const createNode = (row, col) => {
    return {
      row: row,
      col: col,
      isStart: false,
      isEnd: false,
      isWall: false,
    };
  };

  //for the grid initialization
  const initGrid = () => {
    const rows = [];
    for (let row = 0; row < numRows; row++) {
      const currentRow = [];
      for (let col = 0; col < numCol; col++) {
        currentRow.push(createNode(row, col));
      }
      rows.push(currentRow);
    }
    return rows;
  };
  return (
    <div className="gridContainer">
      {grid.map((row, rowID) => {
        return (
          <div key={rowID}>
            {row.map((node, nodeID) => {
              return <Node nodeState={node} key={nodeID}></Node>;
            })}
          </div>
        );
      })}
    </div>
  );
};
