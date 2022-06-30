import "bulma/css/bulma.min.css";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { APIContextProvider } from "./apiContext";
import MainView from "./views/MainView";
import RaceView from "./views/RaceView";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<APIContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainView />} />
					<Route path="/races/:id" element={<RaceView />} />
				</Routes>
			</BrowserRouter>
		</APIContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
