// src/components/ConfirmationModal.js
import React from "react";

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content confirmation-modal">
        <h3>Are you sure you want to place the order?</h3>
        <div className="confirmation-buttons">
          <button className="confirm-button" onClick={onConfirm}>Yes, Place Order</button>
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
