import { Button } from '../ui/button/Button';
import './Navigation.css';

export const Navigation = (props) => {

    return (
        <div className="dataBar">
            <Button text={`Point de départ`}></Button>
            <Button text={`Point d'arrivé`}></Button>
        </div>
    );
}