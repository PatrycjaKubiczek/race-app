import './RaceItem.scss'

const RaceItem = (props: { active: boolean; id: number; name: string; }) => {
    return (
        <li className={`race__item ${props.active ? "active" : ""}`}>
            <p className="race__item__number" key={Math.random()}>
                {props.id}
            </p>
            <h3 key={Math.random()}>{props.name}</h3>
        </li>
    );
};

export default RaceItem;