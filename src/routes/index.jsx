import {Route, Routes} from "react-router-dom";
import {landingRoutes, otherRoutes} from "@/routes/Routes.jsx";
import MainLayout from "@/components/layouts/MainLayout.jsx";

const AppRoutes = props => {
    return <Routes>
        {landingRoutes.map(route => <Route key={route.name} path={route.path} element={route.element}/>)}

        {otherRoutes.map(route => <Route key={route.name} path={route.path}
                                         element={<MainLayout {...props}>{route.element}</MainLayout>}/>)}
    </Routes>;
};
export default AppRoutes;