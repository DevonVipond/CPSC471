import React, {useEffect} from "react";
import List from './Components/LIst/ListContainer'
import {Activity} from "../../../../DataTransferObjects/Activity";
import {Match} from "../../../../DataTransferObjects/Match";
import {User} from "../../../../DataTransferObjects/Interfaces/User";
import Item from "./Components/LIst/Components/Item/ItemContainer";
import {Friend} from "../../../../DataTransferObjects/Friend";

const createList = (title: string, users: Array<User>) => {
    return (
        <List title={title}>
            { users.map(a => <Item user={a}/>) }
        </List>

    )
}

type BoardProps = {
    friends: Array<Friend>,
    matches: Array<Match>
}

const Board = ({ friends, matches }: BoardProps) => {

    return (
        <div id='board'>
            { createList('Matches', matches) }
            { createList('Friends', friends) }
            { createList('Incoming Friend Requests', friends) }
        </div>
    )
}

export default Board