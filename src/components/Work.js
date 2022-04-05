import { Component } from "react";

const Work = (props) => {
    const { name, title, tasks, date} = props;

    return (
        <ul>
            <li>{name}</li>
            <li>{title}</li>
            <li>{date}</li>
            <li>{tasks}</li>
        </ul>
    );
};

export default Work;