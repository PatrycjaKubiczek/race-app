import { useState, useEffect } from "react";
import { Race } from "../types/Race";
import RaceItem from "../components/RaceItem";
import { Link } from "react-router-dom";
import "./MainView.scss";
import InputRadio from "../components/InputRadio";
export interface Races {
    results: Race[];
}

const MainView = () => {
    const [races, setRaces] = useState<Races['results']>([]);
    const [filter, setFilter] = useState<boolean | null>(null);

    const fetchData = async () => {
        const data = await fetch(
            "https://my-json-server.typicode.com/hdjfye/bet-api/races"
        );
        const json = await data.json();
        console.log(json);
        setRaces(json);
    };

      useEffect(() => {
          fetchData().catch(console.error);
      }, []);

    const filterRaces = ({ active }: { active: Boolean }) => {
        if (filter === null) {
            return true;
        } else if (filter) {
            return active;
        } else {
            return !active;
        }
    };

    return (
        <main>
            <div className="container race__list">
                <h1 className="is-size-2 mb-4">Race App</h1>
                {/* {statuses.map((status) => (
					<>
					
						<input
							type="radio"
							value={status}
							name="status"
							style={{ marginLeft: "10px" }}
							onChange={() => setFilter(status)}
							{status ? 'checked' : ''}
						/> <label>{status}</label>
					</>
				))} */}
                <InputRadio
                    value={"all"}
                    onChange={() => setFilter(null)}
                    defaultChecked
                />
                <span className="is-size-7"> Filter races by status:</span>
                {/* <label className="is-size-7" onChange={() => setFilter(null)}>
                    <input
                        type="radio"
                        value="all"
                        name="status"
                        style={{ marginLeft: "10px" }}
                        defaultChecked
                    />{" "}
                    All
                </label> */}
                <label className="is-size-7" onChange={() => setFilter(true)}>
                    <input
                        className="is-size-7"
                        type="radio"
                        value="active"
                        name="status"
                        style={{ marginLeft: "10px" }}
                    />{" "}
                    Active
                </label>
                <label className="is-size-7" onChange={() => setFilter(false)}>
                    <input
                        className="is-size-7"
                        type="radio"
                        value="inactive"
                        name="status"
                        style={{ marginLeft: "10px" }}
                    />{" "}
                    Inactive
                </label>
            </div>
            <ul
                className="container race__list mt-2"
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {races
                    .filter(filterRaces)
                    .map(
                        ({
                            id,
                            name,
                            active,
                            participants,
                        }: {
                            id: number;
                            name: string;
                            active: boolean;
                            participants: [];
                        }) => (
                            <Link
                                to={{ pathname: `races/${id}` }}
                                state={{
                                    id: id,
                                    name: name,
                                    active: active,
                                    participants: participants,
                                }}
                                key={id}
                            >
                                <RaceItem id={id} name={name} active={active} />
                            </Link>
                        )
                    )}
            </ul>
        </main>
    );
};

export default MainView;
