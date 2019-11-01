import React from "react";
import  s  from "./Pagination.module.css";

const Pagination = (props) => {
    let pagination = [];
    let allPage = Math.ceil(props.totalCount / props.currentCountFriend);
    
    for (let i = 1; i <= allPage; i++) {
        pagination.push(i);
    }    

    return (
        <div>
            {
                pagination.map(index => {
                    return (
                        <span
                            className={props.currentPage === index ? s.activePage : ""}
                            onClick={(e) => { props.onPageChange(index) }}
                            key={index}>
                            {index}
                        </span>
                    )
                })
            }
        </div>
    );
}

export default Pagination;



