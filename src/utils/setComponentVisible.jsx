import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";

const SetComponentVisible = (initialIsVisible) => {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible};
};

export default SetComponentVisible;