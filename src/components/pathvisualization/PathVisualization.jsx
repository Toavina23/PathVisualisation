import { useState } from 'react';
import { Grid } from '../grid/Grid';
import { Navigation } from '../navigation/Navigation';
import './PathVisualization.css';

const startNodeRow = 10;
const startNodeCol = 15;
const finishNodeRow = 18;
const finishNodeCol = 46;
export const PathVisualization = () => {
    const [ operationData, setOperationData ] = useState(
        {
            startNode: {
                row: startNodeRow,
                col: startNodeCol
            },
            finishNode: {
                row: finishNodeRow,
                col: finishNodeCol
            },
            walls: []        
        }
    );
    console.log(operationData);
    return (
        <div className="container">
            <div className='menu-row'>
            </div>
            <div className='grid-row'>
                <Grid data = {operationData}></Grid>
            </div>

        </div>
    );
}