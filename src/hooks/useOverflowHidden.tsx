import { useEffect } from "react";

type props = {
    isOpen: boolean;
};

export default function useOverflowHidden({ isOpen }: props) {
    useEffect(() => {
        const body = document.querySelector("body") as HTMLBodyElement;
        body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);
    return null;
}
