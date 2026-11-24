import { useState } from "react";
import List from "./List";
import Button from "./Button";
import { useLoaderData } from "react-router";
export default function LoadingData() {
    // loadingData
    const [trigger, setTrigger] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const users = useLoaderData();

    const handleClick = () => {
        if (isVisible) {
            setIsVisible(false)
            setTrigger(false)
        }
        else {
            setIsVisible(true)
            setTrigger(true)
        }
    };

        if (trigger) {
            users;
        }

    return (
        <>
            <Button onClick={handleClick} bg='bg-s'>Mostra utenti</Button>
            <List flexDirection="flex-column">

                {isVisible && users.map((user) => {
                    return <List.Items key={user.id}>{user.name} / {user.email}</List.Items>
                })}

            </List>
        </>
    )
}