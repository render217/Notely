export default function NoteCard() {
    const note = {
        id: 1,
        title: "Finish the task on the board",
        category: "Business",
        description:
            "Remember to finish task on the board. After finishing give for evaluation Matt.",
        completed: false,
        createdAt: "22.03.2023",
        updatedAt: "22.03.2023",
    };

    return (
        <div className=" px-6 py-4 bg-white rounded-md drop-shadow-lg">
            <div className="flex items-center  font-medium py-3">
                <div className="bg-purple-200 w-24 text-center py-1 rounded-xl text-sm">
                    {note.category}
                </div>
                <div className="flex gap-3 ml-auto ">
                    <div className="flex items-center">
                        <input
                            className="w-5 h-6 cursor-pointer"
                            type="checkbox"
                        />
                    </div>
                    <div>
                        <EditIcon />
                    </div>
                    <div>
                        <DeleteIcon />
                    </div>
                </div>
            </div>
            <h2 className="text-xl mt-3 font-medium">{note.title}</h2>
            <p className="my-3 leading-relaxed text-sm">{note.description}</p>
            <p className="mb-2 text-right">{note.updatedAt}</p>
        </div>
    );
}

function EditIcon() {
    return (
        <svg
            className="w-6 h-6 fill-gray-500 cursor-pointer hover:fill-gray-700"
            viewBox="0 0 20 20"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0833 7.43758L12.5417 3.93758L13.7083 2.77091C14.0278 2.45147 14.4203 2.29175 14.8858 2.29175C15.3508 2.29175 15.7431 2.45147 16.0625 2.77091L17.2292 3.93758C17.5486 4.25703 17.7153 4.64258 17.7292 5.09425C17.7431 5.54536 17.5903 5.93064 17.2708 6.25008L16.0833 7.43758ZM14.875 8.66675L6.04167 17.5001H2.5V13.9584L11.3333 5.12508L14.875 8.66675Z" />
        </svg>
    );
}

function DeleteIcon() {
    return (
        <svg
            className="w-6 h-6 fill-gray-500 cursor-pointer hover:fill-gray-700"
            viewBox="0 0 20 20"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83337 17.5C5.37504 17.5 4.98282 17.3369 4.65671 17.0108C4.33004 16.6842 4.16671 16.2917 4.16671 15.8333V5C3.9306 5 3.73254 4.92028 3.57254 4.76083C3.4131 4.60083 3.33337 4.40278 3.33337 4.16667C3.33337 3.93056 3.4131 3.7325 3.57254 3.5725C3.73254 3.41306 3.9306 3.33333 4.16671 3.33333H7.50004C7.50004 3.09722 7.58004 2.89917 7.74004 2.73917C7.89949 2.57972 8.09726 2.5 8.33337 2.5H11.6667C11.9028 2.5 12.1009 2.57972 12.2609 2.73917C12.4203 2.89917 12.5 3.09722 12.5 3.33333H15.8334C16.0695 3.33333 16.2673 3.41306 16.4267 3.5725C16.5867 3.7325 16.6667 3.93056 16.6667 4.16667C16.6667 4.40278 16.5867 4.60083 16.4267 4.76083C16.2673 4.92028 16.0695 5 15.8334 5V15.8333C15.8334 16.2917 15.6703 16.6842 15.3442 17.0108C15.0175 17.3369 14.625 17.5 14.1667 17.5H5.83337ZM7.50004 13.3333C7.50004 13.5694 7.58004 13.7672 7.74004 13.9267C7.89949 14.0867 8.09726 14.1667 8.33337 14.1667C8.56949 14.1667 8.76754 14.0867 8.92754 13.9267C9.08699 13.7672 9.16671 13.5694 9.16671 13.3333V7.5C9.16671 7.26389 9.08699 7.06583 8.92754 6.90583C8.76754 6.74639 8.56949 6.66667 8.33337 6.66667C8.09726 6.66667 7.89949 6.74639 7.74004 6.90583C7.58004 7.06583 7.50004 7.26389 7.50004 7.5V13.3333ZM10.8334 13.3333C10.8334 13.5694 10.9134 13.7672 11.0734 13.9267C11.2328 14.0867 11.4306 14.1667 11.6667 14.1667C11.9028 14.1667 12.1009 14.0867 12.2609 13.9267C12.4203 13.7672 12.5 13.5694 12.5 13.3333V7.5C12.5 7.26389 12.4203 7.06583 12.2609 6.90583C12.1009 6.74639 11.9028 6.66667 11.6667 6.66667C11.4306 6.66667 11.2328 6.74639 11.0734 6.90583C10.9134 7.06583 10.8334 7.26389 10.8334 7.5V13.3333Z" />
        </svg>
    );
}
