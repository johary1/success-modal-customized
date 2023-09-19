import { useState } from "react";
import CustomModal from "./lib";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleShowModal}>Show Modal</button>
        <CustomModal show={showModal} handleClose={handleCloseModal} text="Any custom text" />
      </header>
    </div>
  );
}

export default App;
