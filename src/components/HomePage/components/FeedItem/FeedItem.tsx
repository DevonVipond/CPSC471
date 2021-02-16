import React from 'react';
import './FeedItem.css'

type PostProps = { username: string, timestamp: string, body: string }

const FeedItem = ({  username, timestamp, body }: PostProps) => {
    return (
        <div className="post">
            <div className="">

                <div className="">
                    <h3>{username}</h3>
                    {/*<p>{new Date(timestamp?.toDate()).toUTCString()}</p>*/}
                </div>
            </div>

            <div className="">
                <p>{body}</p>
            </div>

            <div className="">
                <div className="">
                    <p>Connect</p>
                </div>
            </div>
        </div>
    )
}

export default FeedItem;