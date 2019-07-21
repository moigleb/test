import React from "react";
import Modal from "react-responsive-modal";
import SimpleForm from "../../components/Form";
import PropTypes from "prop-types";

export default function ModalComponent({ isShowing, toggle, onSubmit }) {
  return (
    <Modal open={isShowing} onClose={toggle}>
      <SimpleForm onSubmit={onSubmit}/>
    </Modal>
  );
}

ModalComponent.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
