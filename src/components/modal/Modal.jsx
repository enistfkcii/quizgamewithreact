import React from "react";
import "./Modal.css"

const Modal = ({score}) => {
    return (
        <div>
            <div className="modal">SCORE : {score}</div>
            <div onClick={() => window.location = "/"} className="modal-btn">RETRY</div>
        </div>
    )
}
export default Modal