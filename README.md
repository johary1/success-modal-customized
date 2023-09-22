# My Modal Component

A reusable modal component made with React + Vite.

## Prerequisites

- Node.js >= 16.0.0
- React >= 18.0.0

## Installation

```bash
npm install success-modal-customized
```

## Usage

To use the `CustomModal` in your React application, follow these steps:

### Importing the ModalComponent

First, import the `CustomModal` into your React component file:

```javascript
import React, { useState } from "react";
import { CustomModal } from "success-modal-customized";
```

### Create your css style for modal

First, create a separate css file in your project and copy paste inside the content of ModalComponent.css as a starter style

```css
.modal-container {
  border: 1px solid #45a935;
  border-radius: 5px;
  background-color: white;
  width: 300px;
  height: 130px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.modal-title {
  margin: 20px auto;
}

.close-btn {
  width: 70px;
  padding: 2px;
  text-align: center !important;
  border: 2px solid white !important;
  border-radius: 15px;
  background-color: #45a935;
  color: white;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
}
```

Then, import it in the file where you will use it:

```css
import "yourProjectFilePath/CustomModal.css";
```

Finally, you can add additional style or change some properties to fit your design. Here is an example of adding an overlay on modal display:

```javascript
{
  /* Conditionally render the overlay by adding a div with a class */
}
{
  showModal && <div className="modal-overlay"></div>;
}
```

and set a z-index with a lower value for this css class "modal-overlay" and in CustomModal.css with "modal-container" class, set a z-index with a higher value than in "modal-overlay" so the modal won't be hidden from overlay effect. Here is an example of modal-overlay style content:

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```css
.modal-container {
  /* must be higher than value in modal-overlay*/
  z-index: 6;
}
```

### Using the ModalComponent

Now, you can use the `CustomModal` in your component's render method. Here's an example of how to use it:

```javascript
const YourComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleShowModal}>Show Modal</button>
      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        text="your custom content"
      />
    </div>
  );
};

export default YourComponent;
```

Customize this example to fit your application's needs. The `show` prop controls whether the modal is displayed, and the `handleClose` function should be used to close the modal.

## License

This project is licensed under the MIT License.

```
This is for educational purpose so feel free to reuse it and adapt for your personal need
```
