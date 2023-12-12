import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
    const [searchVal, setSearchVal] = useState("");
    return (
        <div className="font-roboto ">
            <div className="sticky top-0 z-20 h-[4.1rem]">
                <Navbar searchVal={searchVal} setSearchVal={setSearchVal} />
            </div>
            <div className="bg-clrSilverSand pt-4 pb-5">
                <div className="max-w-7xl px-[2%] mx-auto ">
                    <Main searchVal={searchVal} />
                </div>
            </div>
        </div>
    );
}
