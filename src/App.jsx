import { useState } from "react";
import MyModal from "./lib";

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
        <h1>Customizable Modal Component Example</h1>
        <button onClick={handleShowModal}>Show Modal</button>
        <MyModal show={showModal} handleClose={handleCloseModal} />
      </header>
    </div>
  );
}

export default App;
