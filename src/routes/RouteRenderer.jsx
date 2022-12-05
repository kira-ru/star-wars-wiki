import React from 'react';
import {useRoutes} from "react-router-dom";
import routesConfig from "./routes";

const RouteRenderer = () => {
    return useRoutes(routesConfig)
};

export default RouteRenderer;