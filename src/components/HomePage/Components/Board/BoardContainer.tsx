import Board from "./Board"
import './Board.css'
import {Activity} from "../../../../Models/Activity";
import {Match} from "../../../../Models/Match";

const activitiesA = [
    new Activity({name: Activity.ActivityNames.SOCCER, skillLevel: 'beginner'}),
    new Activity({name: Activity.ActivityNames.FOOTBALL, skillLevel: 'advanced'}),
    new Activity({name: Activity.ActivityNames.SKIING, skillLevel: 'intermediate'}),
]
const activitiesB = [
    new Activity({name: Activity.ActivityNames.SOCCER, skillLevel: 'advanced'}),
]

const activitiesC = [
    new Activity({name: Activity.ActivityNames.FOOTBALL, skillLevel: 'intermediate'}),
]

const activitiesD = [
    new Activity({name: Activity.ActivityNames.SKIING, skillLevel: 'advanced'}),
    new Activity({name: Activity.ActivityNames.SOCCER, skillLevel: 'beginner'}),
]

const matches = [
    new Match({ username: 'Tupac Shakir', distance: '15km', activities: activitiesA }),
    new Match({ username: 'Biggie', distance: '10km', activities: activitiesB }),
    new Match({ username: 'Zeus', distance: '1km', activities: activitiesC }),
    new Match({ username: 'Charlie', distance: '22km', activities: activitiesD }),
    new Match({ username: 'Cardi B', distance: '75km', activities: activitiesA }),
    new Match({ username: 'Barack Obama', distance: '45km', activities: activitiesA }),
    new Match({ username: 'Starhorse', distance: '1km', activities: activitiesC }),
    new Match({ username: 'Mario', distance: '1km', activities: activitiesB }),
    new Match({ username: 'Jonah', distance: '5km', activities: activitiesD }),
    new Match({ username: 'Alex', distance: '7km', activities: activitiesB }),
]

const friends = [
    new Match({ username: 'Karma', distance: '15km', activities: activitiesA }),
    new Match({ username: 'Alexandro', distance: '10km', activities: activitiesB }),
    new Match({ username: 'James', distance: '1km', activities: activitiesC }),
    new Match({ username: 'Optimus', distance: '22km', activities: activitiesD }),
    new Match({ username: 'Rocket Man', distance: '75km', activities: activitiesA }),
    new Match({ username: 'Nas', distance: '45km', activities: activitiesA }),
]


const BoardContainer = () => {
    return (
        <Board
            friends={friends}
            matches={matches}
        />
    )
}

export default BoardContainer