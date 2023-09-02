import React from "react";

const Modal = ({ message, onClose})=> {
    return(
        <div
        style={{
            position:"fixed",
            top: "0",
            left: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            zIndex: "9999"
        }}>
        
        <div
            style={{
                background: "grey",
                color:"white",
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}>
                        <h3>{message}</h3>
                        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            border: "none",
            cursor: "pointer",
            marginTop: "1rem",
          }}
          onClick={onClose}
        >
          Close
        </button>
        </div>
        </div>
    );
};
export default Modal;