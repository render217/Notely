import { useState } from "react";
import NoteFeed from "./NoteFeed";

/* eslint-disable @typescript-eslint/no-unused-vars */
type MainProps = {
    searchVal: string;
};
enum OPTIONS {
    ALL = "ALL",
    PERSONAL = "PERSONAL",
    HOME = "HOME",
    BUSINESS = "BUSINESS",
}
type TabsType = {
    id: number;
    type: OPTIONS;
}[];
export default function Main({ searchVal }: MainProps) {
    const Tabs: TabsType = [
        { id: 1, type: OPTIONS.ALL },
        { id: 1, type: OPTIONS.PERSONAL },
        { id: 3, type: OPTIONS.HOME },
        { id: 4, type: OPTIONS.BUSINESS },
    ];
    const [currentTab, setCurrentTab] = useState(OPTIONS.ALL);
    return (
        <div className="min-h-screen overflow-y-auto customScroll">
            <div>
                {/* <h1 className="text-xl font-medium">Your Notes</h1> */}
            </div>
            <div className="mt-6 mb-6 flex items-center flex-wrap max-sm:gap-4">
                <div className="flex gap max-sm:mx-auto">
                    {Tabs.map((tab) => (
                        <div
                            onClick={() => setCurrentTab(tab.type)}
                            className={`${
                                currentTab === tab.type
                                    ? "border-b-sky-800 text-cyan-800"
                                    : "border-b-gray-300"
                            } w-fit px-4 pb-1 border-b-2 font-medium border-b-tranparent flex-1 cursor-pointer`}
                            key={tab.id}>
                            {tab.type}
                        </div>
                    ))}
                </div>
                <div className="max-sm:hidden flex-1"></div>
                <div className="flex items-center max-sm:mx-auto gap-2 pb-1">
                    <div>
                        <input className="block w-4 h-5" type="checkbox" />
                    </div>
                    <p className="text-sm">Show only completed</p>
                </div>
            </div>
            <div className="">
                <NoteFeed />
            </div>
        </div>
    );
}
