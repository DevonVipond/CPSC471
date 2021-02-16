import React from 'react'
import './Feed.css';
import {Container, Feed, Image, Table, Header, Card, Segment} from 'semantic-ui-react'

type props = { children: any, title: string }

const CustomFeed = ({ children, title }: props) => (
            <div className='feed' style={{minWidth: '340px'}}>
                <div style={{backgroundColor: 'white' }}><p style={{fontSize: '60px'}}>{ title }</p></div>
                <Feed>
                    { children && children.map((a: React.ReactNode) => {
                        return (
                            <Feed.Event>
                                <Feed.Label image='' />
                                <Feed.Content>
                                    {a}
                                </Feed.Content>
                            </Feed.Event>
                        )
                    }) }
                </Feed>
            </div>
)

export default CustomFeed