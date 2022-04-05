import { Component } from "react";

const General = (props) => {
    const { name, email, phone } = props;

    return (
        <div>
            <h2>{name}</h2>
            <span>{email}</span>
            <span>{phone}</span>
        </div>
    );
};

export default General;