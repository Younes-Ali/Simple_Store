import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavSideMenu from "../components/NavSideMenu";


export default function MainLayout() {
    return(
        <div className="w-full flex flex-col">
            <header className="w-full flex justify-around bg-gray-900 items-center p-5">
                <h1 className="text-4xl font-bold font-dancing-script">Shoppy</h1>
                <NavBar />
                <NavSideMenu />
            </header>
            <main className="w-full h-dvh overflow-auto">
                <Outlet />
            </main>
        </div>
    )
}
