import {TodoFormValues} from "../../types/TodoFormValues.ts";
import {useTodoForm} from "./hooks/useTodoForm.ts";
import {Button, Checkbox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core";

export const TodoForm = () => {
    const form = useTodoForm();

    const handleSubmit = (vals: TodoFormValues) => {
        console.log(vals);
    }

    return (
        <Paper shadow="xs" p="xl">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"lg"}>
                    <TextInput
                        withAsterisk
                        label="Tytuł"
                        placeholder="Tytuł todo"
                        {...form.getInputProps('title')}
                    />

                    <Textarea withAsterisk label="Treść"
                              placeholder="Treść todo"{...form.getInputProps('content')}>
                    </Textarea>

                    <Checkbox
                        label="Wykonane"
                        {...form.getInputProps('done', {type: 'checkbox'})}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Wyślij</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    );
}