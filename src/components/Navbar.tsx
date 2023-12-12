import { useState } from "react";
import Modal from "./Modal";
import useOutsideClick from "../hooks/useOutsideClick";
import useOverflowHidden from "../hooks/useOverflowHidden";

type NavbarProps = {
    searchVal: string;
    setSearchVal: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ searchVal, setSearchVal }: NavbarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    const modalRef = useOutsideClick(closeModal);
    useOverflowHidden({ isOpen: isModalOpen });

    return (
        <>
            <header className="py-3 bg-white drop-shadow-lg">
                <div className="flex items-center gap-3 max-w-7xl mx-auto px-[3%]">
                    <div className="flex-1 flex items-center bg-clrSoftPeach py-2 px-2 rounded-md">
                        <img
                            className="block"
                            src="icons/search-icon.svg"
                            alt=""
                        />
                        <input
                            value={searchVal}
                            onChange={(e) => {
                                setSearchVal(e.target.value);
                            }}
                            className="w-full pl-3 bg-clrSoftPeach outline-none border-none"
                            type="text"
                        />
                    </div>
                    <div>
                        <button
                            onClick={openModal}
                            className="hover:bg-cyan-700 py-2 rounded-md w-16 justify-center flex items-center bg-cyan-800 text-white text-xs">
                            <svg
                                className="fill-white text-white"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="texs"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.16663 15.8334V10.8334H4.16663V9.16675H9.16663V4.16675H10.8333V9.16675H15.8333V10.8334H10.8333V15.8334H9.16663Z"
                                    fill="white"
                                />
                            </svg>

                            <p className="">Add</p>
                        </button>
                    </div>
                </div>
                <div></div>
            </header>
            {isModalOpen && (
                // <Modal isOpen={isModalOpen}>
                <Modal>
                    <div className="h-full w-full">
                        <div
                            ref={modalRef}
                            className="mx-auto mt-36 h-full max-h-[60%] w-[90%] max-w-2xl overflow-y-auto rounded-md bg-white p-4">
                            <div>
                                <h1 className="text-center">Add Note</h1>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}
