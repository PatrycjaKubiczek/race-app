import { useState, useEffect } from "react";
import { Race } from "../types/Race";
import RaceItem from "../components/RaceItem"
import { Link } from "react-router-dom";
export interface Races {
	results: Race[];
}

const MainView = () => {
	const [races, setRaces] = useState<any[]>([]);
	const [filter, setFilter] = useState<boolean | null>(null);

	useEffect(() => {
		fetch("https://my-json-server.typicode.com/hdjfye/bet-api/races")
			.then((res) => res.json())
			.then((res) => {
				console.log(res)
				setRaces(res);
			});
	}, []);

	const filterRaces = ({ active } : {active : Boolean | any}) => {
		if(filter === null){
			return true
		} else if(filter === true) {
			return active
		} else {
			return !active
		}
	}
	return (
		<>
		 
			<div style={{ padding: "10px" }}>
				Filter races by status:
				<p>{filter}</p>
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
				
				<input type="radio" value="all" name="status"  style={{marginLeft: '10px'}} onChange={()=>setFilter(null)}/> All
				<input type="radio" value="active" name="status"  style={{marginLeft: '10px'}} onChange={()=>setFilter(true)}/> Active
				<input type="radio" value="inactive" name="status"  style={{marginLeft: '10px'}} onChange={()=>setFilter(false)}/> Inactive
			</div>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>	
			{
				races.filter(filterRaces).map(({ id, name, active, participants }) => (
					<Link to={{ pathname: `races/${id}`}} state={{id: id, name: name, active:active, participants: participants}} key={id}>
						<RaceItem id={id} name={name} active={active}/>
					</Link>
				))}
			</ul>
		</>
	);
};

export default MainView;
