import Home from "../components/Home/Home";
import appRoutes from "./appRoutes";
import Layout from "../components/Layout/Layout";
import Characters from "../pages/characters/Characters";
import Person from "../pages/person/Person";

const routesConfig = [
    {
        path: appRoutes.LAYOUT,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: appRoutes.CHARACTERS,
                element: <Characters/>,
            },
            {
                path: appRoutes.SINGLE_CHARACTER,
                element: <Person/>,
            },
            {
                path: appRoutes.NOT_FOUND,
                element: <h1>error</h1>,
            },
        ]
    },

]

export default routesConfig;
