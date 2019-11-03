import React from "react";
import  s  from "./Pagination.module.css";
import SelectionMenu from "../SelectionMenu/SelectionMenu";

const Pagination = (props) => {
    let pagination = [];
    let allPage = Math.ceil(props.totalCount / props.currentCountFriend);

    for (let i = 1; i <= allPage; i++) {
        pagination.push(i);
    }



    const handleClick = (count) => {
        let p1 = props.changeCount(count);

        Promise.all([p1]).then(values => {
            props.onPageChange(1);
        });
    };

    const renderedVisiblePages = () => {
        let array = [];

        for (let i = props.currentPage-1, j = (pagination.length - props.currentPage <= 5 ? (4 + pagination.length - props.currentPage) : 5); i >= 0 && j > 0; i--, j--) {
            array.unshift(pagination[i]);
        }

        for (let i = props.currentPage, j = (9 - array.length); i < pagination.length && j > 0; i++, j--) {
            array.push(pagination[i])
        }
        return array;
    };

    const isFullPages = () => {
        return pagination.length > 9;
    };
    const isRenderedLeftPart = () => {
        return isFullPages() && props.currentPage > 6
    };
    const isRenderedRightPart = () => {
        return isFullPages() && pagination.length - props.currentPage > 6
    };
    return (
        <div>
            {
                isRenderedLeftPart() && <><span onClick={(e) => { props.onPageChange(1) }}>1</span><span>...</span></>
            }
            {
                renderedVisiblePages().map(index => {
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
            {
                isRenderedRightPart() && <><span>...</span><span  onClick={(e) => { props.onPageChange(pagination.length) }}>{pagination.length}</span></>
            }
            <SelectionMenu  selectItemProps={props.currentCountFriend} items={[5, 10, 20, 30]} handleClick={handleClick} />
        </div>
    );
};

export default Pagination;



