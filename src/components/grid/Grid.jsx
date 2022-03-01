import { useEffect, useState } from "react";
import { Node } from "../node/Node";

const numRows = 20;
const numCol = 50;

export const Grid = (props) => {
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
      isStart: props.data.startNode.row === row && props.data.startNode.col === col,
      isEnd: props.data.finishNode.row === row && props.data.finishNode.col === col,
      isWall: false,
    };
  };

  //know who is beiing selected
  const handleSelection = (e) => {
    for (let row = 0; row < numRows; row++) {

    }
  }
  //handle start position change
  const handleStartPositionChange = () => {
        
  }

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
    <table className="gridContainer">
        <tbody>
        {grid.map((row, rowID) => {
        return (
          <tr key={rowID} className="row">
            {row.map((node, nodeID) => {
              return <Node nodeState={node} key={nodeID}></Node>;
            })}
          </tr>
        );
      })}
        </tbody>
    </table>
  );
};
