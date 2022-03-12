import React from "react";
import { useLocation } from "react-router-dom";
interface State {
	name: string;
}
const RaceView = () => {
	const location: any = useLocation();

	return (
		<div>
			<h2>{location.state.id}</h2>
			<h2>{location.state.name}</h2>
			<input />
			<table>
				<tbody>
					{location.state.participants.map((el: any, index: number) => (
						<tr key={index}>
							<td>
								winner <input type="radio" name="" id="" />
							</td>
							<td>second place <input type="radio" name="" id="" /></td>
							<td>third place <input type="radio" name="" id="" /></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RaceView;
