/* eslint-disable prefer-const */
import { useEffect, useRef } from "react";

export default function useOutsideClick(callbackHandler: () => void) {
    let ref = useRef<HTMLDivElement>();
    useEffect(() => {
        const handleFn = (e: MouseEvent) => {
            const el = ref?.current;

            if (el && !el.contains(e.target as Node)) {
                callbackHandler();
            }
        };
        document.addEventListener("mousedown", handleFn);
        return () => {
            document.removeEventListener("mousedown", handleFn);
        };
    }, [ref, callbackHandler]);
    return ref;
}
