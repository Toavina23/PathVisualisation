import { Grid } from '../grid/Grid';
import './PathVisualization.css';

export const PathVisualization = () => {
    return (
        <div className="container">
            <div className='menu-row'></div>
            <div className='grid-row'>
                <Grid></Grid>
            </div>

        </div>
    );
}