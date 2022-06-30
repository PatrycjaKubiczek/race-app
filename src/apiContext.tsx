import { createContext, useContext, useEffect, useState } from "react";

import { Race } from "./types/Race";
import axios from "axios";

export type RacesContextType = {
	races: Race[];
};

const APIContext = createContext<RacesContextType | null>(null);

export function APIContextProvider({ children }: any) {
	const [races, setRaces] = useState<Race[]>([]);
	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(
				`https://my-json-server.typicode.com/hdjfye/bet-api/races`
			);
			setRaces(data);
		}
		fetchData();
	}, []);
	return (
		<APIContext.Provider
			value={{
				races,
			}}
		>
			{children}
		</APIContext.Provider>
	);
}

export function useAPI() {
	const context = useContext(APIContext);
	if (context === undefined) {
		throw new Error("Context must be used within a Provider");
	}
	return context;
}
