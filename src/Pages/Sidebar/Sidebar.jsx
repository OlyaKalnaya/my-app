import './Sidebar.scss';
import data from '../../data/data.json';
import { Topics } from '../../components/Topics';

export function Sidebar() {

    return(
        <div className='Sidebar'>
            <nav>
                <ul>
                    {data.map((obj,idx) => 
                    <Topics obj={obj} key={idx}/>
                    
                    )}
                </ul>
            </nav>
        </div>
    )
}