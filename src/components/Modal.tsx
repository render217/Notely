import { createPortal } from "react-dom";

type ModalProps = {
    children: JSX.Element;
};
export default function Modal({ children }: ModalProps) {
    return createPortal(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-clrSoftPeach/60 z-30 ">
                <div className="h-screen w-screen">{children}</div>
            </div>
        </>,
        document.querySelector("#modal-root") as HTMLDivElement
    );
}
