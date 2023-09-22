import { useState } from "react";
import CustomModal from "./lib";

/**
 * Renders a simple modal
 *
 * @returns {*}
 */
function App() {
  // State variable to track whether the modal is open or closed
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleShowModal}>Show Modal</button>

        {/*
          Render the CustomModal component, passing in the `show` and `handleClose` props
        */}
        <CustomModal
          show={showModal}
          handleClose={handleCloseModal}
          text="Any custom text"
        />
      </header>
    </div>
  );
}

export default App;