import React from 'react';

const RaceItem = (props: { active: boolean; id: number; name: string; }) => {
    return (
        <li
            style={{
                display: "flex",
                alignItems: "center",
                // borderBottom: "1px solid white",
                background: props.active ? "#c9ebc9" : "#e2e2e2",
                marginBottom: "15px",
                borderRadius: "5px",
                boxShadow: "0 2px 2px -2px #8ad88a",
                maxWidth: "400px",
                padding: '10px'
            }}
        >
            <p style={{ paddingRight: "10px" }} key={Math.random()}>
                {props.id}
            </p>
            <h3 key={Math.random()}>{props.name}</h3>
        </li>
    );
};

export default RaceItem;