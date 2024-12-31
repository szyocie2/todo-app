import {IconListCheck, IconPencilPlus} from "@tabler/icons-react";
import {NavLink} from "@mantine/core";
import {useNavigate} from "react-router-dom";

export const AppNavbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <NavLink onClick={() => navigate('/todo')}
                //href="#required-for-focus"
                     label="Lista TODO"
                     leftSection={<IconListCheck size="1rem" stroke={1.5}/>}
            />
            <NavLink onClick={() => navigate('/todo/new')}
                //href="#required-for-focus"
                     label="Dodaj TODO"
                     leftSection={<IconPencilPlus size="1rem" stroke={1.5}/>}
            />
            {/*<NavLink to={'/todo'}>Lista</NavLink> | <NavLink to={'/todo/new'}>Dodaj</NavLink>*/}
        </div>
    )
}