import { Component } from "react";

const School = (props) => {
    const { name, titleOfStudy, date } = props;

    return (
        <ul>
            <li>{name}</li>
            <li>{titleOfStudy}</li>
            <li>{date}</li>
        </ul>
    );
};

export default School;