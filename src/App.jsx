import {useEffect} from "react";
import Aos from "aos";
import AppRoutes from "@/routes";

const App = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return <>
        <AppRoutes/>
    </>;
};
export default App;