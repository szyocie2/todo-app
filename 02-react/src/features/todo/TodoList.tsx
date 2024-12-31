import {useSearchParams} from "react-router-dom";

export const TodoList=()=>{
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("key"));
    return <div>TodoList</div>;
}