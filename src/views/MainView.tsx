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
    const [filter, setFilter] = useState<String>('all');

    const fetchData = async () => {
        const data = await fetch(
            "https://my-json-server.typicode.com/hdjfye/bet-api/races"
        );
        const json = await data.json();
        // console.log(json);
        setRaces(json);
    };
    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value)
        setFilter(e.currentTarget.value)
    }

      useEffect(() => {
          fetchData().catch(console.error);
      }, []);

    const filterRaces = ({ active }: { active: Boolean }) => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'active') {
            return active;
        } else {
            return !active;
        }
    };

    const statuses = ['all', 'active', 'inactive']

    return (
        <main>
            <div className="container race__list">
                <h1 className="is-size-2 mb-4">Race App</h1>
                <span className="is-size-7"> Filter races by status:</span>
                {statuses.map((status) => (
					 <InputRadio
                     key={status}
                     value={status}
                     handleFilter={handleFilter}
                     checked={status== 'all' ? true : false}
                     />
				))}
                
                
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
