import React from "react";
import {Button, Feed, Card, Icon, Image, Table, Container, Header, TableBody, Segment} from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faBasketballBall, faSkiing, faFootballBall, faUserPlus  } from '@fortawesome/free-solid-svg-icons'
import { Activity } from "../../../../DataTransferObjects/Activity";
import './MatchingUserCard.css'
import 'semantic-ui-css/semantic.min.css';

const skillLevelToColor = (skillLevel: string): string => {
    switch (skillLevel) {
        case Activity.SkillLevel.BEGINNER:
            return 'green'
        case Activity.SkillLevel.INTERMEDIATE:
            return 'orange'
        case Activity.SkillLevel.ADVANCED:
            return 'red'
        default:
            return ''
    }

}

const soccerBall = (color: string) => ( <FontAwesomeIcon icon={faFutbol} size='3x' style={{color: color, paddingRight: '5px'}} />)
const basketBall = (color: string) => ( <FontAwesomeIcon icon={faBasketballBall} size='3x' style={{color: color, paddingRight: '5px'}} />)
const skiing = (color: string) => ( <FontAwesomeIcon icon={faSkiing} size='3x' style={{color: color, paddingRight: '5px'}} />)
const football = (color: string) => ( <FontAwesomeIcon icon={faFootballBall} size={'3x'}  style={{color: color, paddingRight: '5px'}} />)


const activityIcon = (activityName: string, skillLevel: string) => {
    const color: string = skillLevelToColor(skillLevel)
    switch (activityName) {
        case Activity.ActivityNames.SOCCER:
            return soccerBall(color)
        case Activity.ActivityNames.BASKETBALL:
            return basketBall(color)
        case Activity.ActivityNames.FOOTBALL:
            return football(color)
        case Activity.ActivityNames.SKIING:
            return skiing(color)
        default:
            return undefined
    }
}

type MatchingUserCardProps = {
    username: string,
    distance: string,
    activities: Array<Activity>
}

const MatchingUserCard = ({ username, distance, activities }: MatchingUserCardProps) => {
    return (
        <Feed.Event>
            <Feed.Content>
                <Segment style={{backgroundColor: 'mintcream'}}>

                <Feed.Date content={distance} />
                <Feed.Summary>
                    <h2>{ username } </h2>
                </Feed.Summary>
                <Feed.Meta>
                    <Segment style={{backgroundColor: 'mintcream'}}>
                    { activities.map(a => ( activityIcon(a.name(), a.skillLevel()) )) }
                    </Segment>
                </Feed.Meta>
                </Segment>
            </Feed.Content>
                    <div className="ui bottom attached button">
                        <i className="add icon"></i>
                        Add Friend
                    </div>
        </Feed.Event>
    )
}

export default MatchingUserCard