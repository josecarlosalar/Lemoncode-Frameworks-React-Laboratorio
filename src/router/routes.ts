import { generatePath } from "react-router-dom";


interface SwitchRoutes {
    root: string;
    list: string;
    detail: string;
}


export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/list/:organizacion",
    detail: "/detail/:organizacion/:id",
}


interface Routes extends Omit<SwitchRoutes, 'detail' | 'list'> {
    list: (organizacion:string) => string;
    detail: (organizacion:string, id:string) => string;
}


export const routes: Routes = {
    ...switchRoutes, 
    list: (organizacion) => generatePath("/list/:organizacion", { organizacion }),
    detail: (organizacion: string, id:string) => generatePath("/detail/:organizacion/:id", { organizacion, id }), 
}