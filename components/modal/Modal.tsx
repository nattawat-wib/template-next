import { Dialog } from "primereact/dialog"
interface ModalProps {
    [key: string]: any
}

export default function Modal(props: ModalProps) {
    return (
        <Dialog
            onHide={() => { }}
            {...props}
        />
    )
}
