import {TodoType} from "../../types/TodoType.ts";
import {SimpleGrid} from "@mantine/core";
import {TodoListItem} from "./TodoListItem.tsx";

const data: TodoType[] = [
    {
        id: 1,
        title: "Posprzątaj szafę",
        content: "Przejrzyj zawartość szafy, posegreguj ubrania na te, które nosisz, i te, które można oddać lub wyrzucić. Zrób miejsce na nowości!",
        done: false,
    },
    {
        id: 2,
        title: "Zaplanuj menu na tydzień",
        content: "Przygotuj listę posiłków na najbliższe dni, uwzględniając zdrowe i zróżnicowane składniki. Dzięki temu zaoszczędzisz czas na codziennym myśleniu o obiedzie.",
        done: true,
    },
    {
        id: 3,
        title: "Naucz się czegoś nowego",
        content: "Wybierz interesujący Cię temat lub umiejętność, np. podstawy rysunku, gotowania nowej potrawy czy nauki języka. Poświęć na to przynajmniej godzinę.",
        done: false,
    },
    {
        id: 4,
        title: "Zrób przerwę na relaks",
        content: "Zaplanuj czas tylko dla siebie – kąpiel, książka, ulubiona muzyka lub medytacja. Odłóż telefon i odpocznij od ekranów",
        done: false,
    }
]

export const TodoList = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item) => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}