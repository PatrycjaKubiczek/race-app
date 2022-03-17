// import React from "react";
import { useLocation } from "react-router-dom";
import "./RaceView.scss";
interface State {
    name: string;
}
const RaceView = () => {
    const location: any = useLocation();

    return (
        <main>
            <div className="race__wrapper race__list">
                <h2 className="is-size-4 mb-4">
                    {location.state.id}- {location.state.name} - (
                    {location.state.active ? "active" : "inactive"})
                </h2>

                <div className="flex-center">
                    bet amount: <input className="input" type="number" style={{maxWidth: "200px", marginLeft: "20px"}}/>
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
                                    <td>
                                        winner{" "}
                                        <input
                                            type="radio"
                                            name={`grou${index}`}
                                            id=""
                                        />
                                    </td>
                                    <td>
                                        second place{" "}
                                        <input
                                            type="radio"
                                            name={`grou${index}`}
                                            id=""
                                        />
                                    </td>
                                    <td>
                                        third place{" "}
                                        <input
                                            type="radio"
                                            name={`grou${index}`}
                                            id=""
                                        />
                                    </td>
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
