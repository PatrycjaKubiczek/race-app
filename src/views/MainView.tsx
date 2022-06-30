import "./MainView.scss";

import React, { useState } from "react";

import InputRadio from "../components/InputRadio";
import { Link } from "react-router-dom";
import { Race } from "../types/Race";
import RaceItem from "../components/RaceItem";
import { useAPI } from "../apiContext";

const MainView = () => {
	const { races }: any = useAPI();

	const [filter, setFilter] = useState<String>("all");

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFilter(e.currentTarget.value);
	};

	const filterRaces = ({ active }: { active: Boolean }) => {
		if (filter === "all") {
			return true;
		} else if (filter === "active") {
			return active;
		} else {
			return !active;
		}
	};

	const statuses = ["all", "active", "inactive"];

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
						checked={status === "all" ? true : false}
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
					?.filter(filterRaces)
					.map(({ id, name, active, participants }: Race) => (
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
					))}
			</ul>
		</main>
	);
};

export default MainView;
