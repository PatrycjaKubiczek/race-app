import "./RaceView.scss";

// import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RaceView = () => {
	const location: any = useLocation();
	const navigate = useNavigate();
	const places = ["winner", "second place", "third place"];

	return (
		<main>
			<div className="race__wrapper race__list">
				<h2 className="is-size-4 mb-4">
					<button
						className="button mr-2"
						onClick={() => {
							navigate(-1);
						}}
					>
						<span className="icon is-small">
							<i className="fas fa-arrow-left"></i>
						</span>
						<span>Go back</span>
					</button>
					{location.state.id}- {location.state.name} - (
					{location.state.active ? "active" : "inactive"})
				</h2>

				<div className="flex-center">
					bet amount:
					<input
						className="input"
						type="number"
						style={{ maxWidth: "200px", marginLeft: "20px" }}
					/>
				</div>

				<table className="table is-striped is-hoverable mt-2">
					<thead>
						<tr>
							<th>participant</th>
							<th>winner</th>
							<th>2nd place</th>
							<th>3rd place</th>
						</tr>
					</thead>
					<tbody>
						{location.state.participants.map(
							(el: any, index: number) => (
								<tr key={index}>
									<th>{el}</th>
									{places.map((place: string) => (
										<td>
											<label className="radio">
												{place}
												<input
													type="radio"
													name={`grou${index}`}
													id={`grou${index}`}
												/>
											</label>
										</td>
									))}
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>
		</main>
	);
};

export default RaceView;
