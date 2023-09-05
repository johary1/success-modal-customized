# My Modal Component

A reusable modal component for React.

## Installation

```bash
npm install success-modal-customized
```

## Usage

To use the `ModalComponent` in your React application, follow these steps:

### Importing the ModalComponent

First, import the `ModalComponent` into your React component file:

```javascript
import React, { useState } from "react";
import { ModalComponent } from "success-modal-customized";
```

### Using the ModalComponent

Now, you can use the `ModalComponent` in your component's render method. Here's an example of how to use it:

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
      <ModalComponent show={showModal} handleClose={handleCloseModal} />
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
