import React from 'react';

const RaceItem = (props: any) => {
    console.log(props)
    return (
        <li
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid black",
                background: props.active ? "#8ad88a" : "#e2e2e2",
                padding: "10px",
            }}
            
        >
            <p style={{ padding: "10px" }} key={Math.random()}>
                {props.id}
            </p>
            <h3 key={Math.random()}>{props.name}</h3>
    </li>
    );
};

export default RaceItem;