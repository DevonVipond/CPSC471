import './SettingsPage.css'
import React from 'react'
import List from './Components/List/index'
import {Activity} from "../../Models/Activity";
import {Button, Input} from "semantic-ui-react";

type Props = {
    getActivities: Function,
    addActivity: Function,
    removeActivity: Function,
}

const SettingsPage = ({ getActivities, addActivity, removeActivity }: Props) => {

    return (
        <div className='settingsContainer'>
            <List getActivities={getActivities} addActivity={addActivity} removeActivity={removeActivity} />
            <div className='marginDiv'>
                <Input focus placeholder='distance' />
            </div>
            <div className='marginDiv'>
                <Button color="blue">Save</Button>
            </div>
            <div className='marginDiv'>
                <Button positive>Upgrade To Premium</Button>
            </div>
        </div>
    )
}

export default SettingsPage