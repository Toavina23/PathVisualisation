import { useState } from "react";
import "./Node.css";
import startImage from "../../assets/images/startPoint.png";
export const Node = ({ nodeState: { isStart, isEnd, isWall, row, col } }) => {
  // const [nodeState, setNodeState] = useState(props.nodeState);
  const extraClass = isStart
    ? "node-start"
    : isEnd
    ? "node-end"
    : isWall
    ? "node-wall"
    : "";
  if (isStart) console.log("Starting node found" + extraClass);
  if (isEnd) console.log("Ending node found" + extraClass);
  return <td className={`node ${extraClass}`} id={`node-${row}-${col}`}></td>;
};
