import React from 'react';
import CustomFeed from "./components/Feed/Feed";
import MatchingUserCard from "./components/MatchingUserCard/MatchingUserCard";
import { Activity } from "../../DataTransferObjects/Activity";
import { Match } from "../../DataTransferObjects/Match";
import { Friend } from "../../DataTransferObjects/Friend";
import './HomePage.css'
import 'semantic-ui-css/semantic.min.css';
import {Segment} from "semantic-ui-react";
import Navbar from "../Shared/Navbar/Navbar";
import PageWrapper from "../Shared/PageWrapper/PageWrapper";

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
    Match.create({ username: 'Tupac Shakir', distance: '15km', activities: activitiesA }),
    Match.create({ username: 'Biggie', distance: '10km', activities: activitiesB }),
    Match.create({ username: 'Ronald', distance: '1km', activities: activitiesC }),
    Match.create({ username: 'Charlie', distance: '22km', activities: activitiesD }),
    Match.create({ username: 'Cardi B', distance: '75km', activities: activitiesA }),
    Match.create({ username: 'Barack Obama', distance: '45km', activities: activitiesA }),
    Match.create({ username: 'Starhorse', distance: '1km', activities: activitiesC }),
    Match.create({ username: 'Mario', distance: '1km', activities: activitiesB }),
    Match.create({ username: 'Jonah', distance: '5km', activities: activitiesD }),
    Match.create({ username: 'Alex', distance: '7km', activities: activitiesB }),
]

const friends = [
    Match.create({ username: 'Karma', distance: '15km', activities: activitiesA }),
    Match.create({ username: 'Alexandro', distance: '10km', activities: activitiesB }),
    Match.create({ username: 'James', distance: '1km', activities: activitiesC }),
    Match.create({ username: 'Optimus', distance: '22km', activities: activitiesD }),
    Match.create({ username: 'Rocket Man', distance: '75km', activities: activitiesA }),
    Match.create({ username: 'Nas', distance: '45km', activities: activitiesA }),
]

const HomePage = () => {

    return (
            <div className='homePage'>
                <div className='main'>
                    <CustomFeed title='Matches'>
                        { matches && matches.map(a => {
                            return (
                                <MatchingUserCard
                                    username={a.username()}
                                    distance={a.distance()}
                                    activities={a.activities()}
                                />
                            )
                        })}
                    </CustomFeed>
                </div>
                <div className='right'>
                    <CustomFeed title='Friends'>
                        { friends && friends.map(a => {
                            return (
                                <MatchingUserCard
                                    username={a.username()}
                                    distance={a.distance()}
                                    activities={a.activities()}
                                />
                            )
                        })}
                    </CustomFeed>
                </div>
            </div>
    )

}

export default HomePage

