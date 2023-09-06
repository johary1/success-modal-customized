# My Modal Component

A reusable modal component made with React + Vite.

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
