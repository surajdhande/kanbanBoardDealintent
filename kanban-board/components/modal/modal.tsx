import React from "react";
import "./modal.scss";
// reactstrap components
import { Button, Input, Modal, ModalBody, ModalFooter } from "reactstrap";
import CustomImage from "../customImages/customImage";
import axios from "axios";
interface ModalProps {
  content: string;
  description: string;
}
const CustomModal: React.FC<ModalProps> = ({ content,type }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [description, setDescription] = React.useState("");
  console.log(description, "description");

  const handleSubmit = async () => {
    try {
        let data={
            type:type,
            description:description
        }
      const response = await axios.post('http://localhost:3005/api/boards/store', data);

      // Handle a successful response here, if needed
      console.log('Data stored successfully:', response.data);
      setModalOpen(false);
    } catch (error) {
      // Handle errors, such as network issues or API errors
      console.error('Error storing data:', error);
    }
  };

  return (
    <>
      <CustomImage
        alt="Plus Icon"
        className="plus-img"
        onClick={() => setModalOpen(!modalOpen)}
      />

      <Modal
        centered
        toggle={() => setModalOpen(!modalOpen)}
        isOpen={modalOpen}
        className="modal"
      >
        <div className=" modal-header">
          <h5 className=" modal-title">{content} Board</h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          Description
          <Input
            placeholder="Description"
            className="input-box"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></Input>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button" onClick={handleSubmit}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CustomModal;
