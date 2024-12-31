import {NavLink} from "react-router-dom";

export const Header = () =>{
    return (
        <div>
            <NavLink to={'/todo'}>Lista</NavLink> | <NavLink to={'/todo/new'}>Dodaj</NavLink>
        </div>
    )
}