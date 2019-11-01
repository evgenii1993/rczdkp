import React from "react";
import Pagination from "../common/Pagination/Pagination";
import Friend from "./Friend/Friend";

let Friends = (props) => {
   

    return (<div>
        <Pagination totalCount={props.totalCount}
                    currentCountFriend={props.currentCountFriend}
                    currentPage={props.currentPage}
                    onPageChange={props.onPageChange}
                    />
        {props.friends.map(friend => {
            
            return (
                <Friend 
                    friend={friend} 
                    disabledFollowUsers={props.disabledFollowUsers}
                    unFollowSuccess={props.unFollowSuccess}
                    followSuccess={props.followSuccess}
                />
            )
        })
        }
    </div>
    );
}

export default Friends;