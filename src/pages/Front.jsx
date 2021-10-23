import React from 'react'
import { Link} from 'react-router-dom';
import "./Front.css";

function Front (){
    return(
         
         <ul className="centerr">
                            <li className="itemm"  ><Link  to={'/login' }>Login as Overall admin </Link></li>
                            
                            <li className='itemm'><Link   to={'/orgLogin' }>Login as Organizational admin </Link></li>
           </ul>         

    )
}

export default Front