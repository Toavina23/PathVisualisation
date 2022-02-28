import { useState } from 'react';
import './Node.css';

export const Node = (props) =>{
    const [nodeState, setNodeState] = useState(props.nodeState);
    return (
        <div className={`node `}>

        </div>
    );
}