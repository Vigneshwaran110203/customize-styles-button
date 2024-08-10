# Customizable Button Component

A highly customizable button component for React applications. This package allows you to create buttons with custom colors, labels, border radii, animations, and icons. It is easy to integrate and highly flexible, making it suitable for a wide range of applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Customizing the Button](#customizing-the-button)
    - [Colors](#colors)
    - [Label](#label)
    - [Border Radius](#border-radius)
    - [Animations](#animations)
    - [Icons](#icons)
- [Advanced Usage](#advanced-usage)
- [Development](#development)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)
- [Acknowledgements](#acknowledgements)

## Features

- **Custom Colors:** Set the background and text colors to match your app’s theme.
- **Custom Labels:** Define the label text to display on the button.
- **Border Radius:** Choose between rounded or normal corners for the button.
- **Animations:** Add smooth transition effects for an interactive experience.
- **Icons:** Easily add icons inside the button for enhanced UI/UX.

## Installation

Install the package via npm:

```
npm install customize-styles-button
```

## Usage

### Basic Example

Here’s a simple example of how to use the `CustomButton` component in your React application:

```
import React from 'react';
import CustomButton from "customize-styles-button"

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <CustomButton 
        label="Click Me" 
        backgroundColor="#3498db" 
        textColor="#fff"
      />
    </div>
  );
}

export default App;
```

### Customizing the Button

The `CustomButton` component is highly customizable. Below are some of the common customizations you can apply:

#### Colors

You can customize the button’s background and text colors using the `backgroundColor` and `textColor` props.

```
<CustomButton 
  label="Submit" 
  backgroundColor="#e74c3c" 
  textColor="#ffffff" 
/>
```

#### Label

The text displayed on the button is controlled by the `label` prop.

```
<CustomButton 
  label="Order Now" 
/>
```

#### Border Radius

You can adjust the button’s corners by setting the `borderRadius` prop to either `"rounded"` (for pill-shaped corners) or `"normal"` (for standard rectangular corners).

```
<CustomButton 
  label="Sign Up" 
  borderRadius="rounded" 
/>
```

#### Animations

Add smooth transition effects using the `transition` prop. This prop takes a valid CSS transition value.

```
<CustomButton 
  label="Hover Me" 
  backgroundColor="#2ecc71" 
  textColor="#ffffff"
  transition="0.3s ease-in-out"
/>
```

#### Icons

You can include an icon inside the button by passing a React component as the `icon` prop. This is useful for adding visual context to your buttons.

```
import { FaBeer } from 'react-icons/fa';

<CustomButton 
  label="Cheers" 
  backgroundColor="#f39c12" 
  textColor="#fff"
  icon={<FaBeer />}
/>
```

### Advanced Usage

For more advanced usage, you can combine multiple props to create sophisticated buttons. Here’s an example:

```
import React from 'react';
import CustomButton from 'customize-styles-button';
import { FaShoppingCart } from 'react-icons/fa';

function App() {
  return (
    <div>
      <CustomButton 
        label="Add to Cart" 
        backgroundColor="#1abc9c" 
        textColor="#ffffff"
        borderRadius="rounded"
        transition="0.4s ease"
        icon={<FaShoppingCart />}
      />
    </div>
  );
}

export default App;
```

## Development

If you want to contribute to this project or customize it further, follow these steps to set up the project locally.

### Running Locally

1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/customizable-button-package.git
   cd customizable-button-package
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the project**:
   ```
   npm start
   ```

   This will start the development server, and you can view the project at `http://localhost:5173` in vite and `http://localhost:3000` in create-react-app.

### Building for Production

To build the package for production (e.g., for publishing to npm), run:

```
npm run build
```

This will bundle your component and prepare it for distribution.

## Contributing

Contributions are welcome! If you have any ideas, issues, or improvements, please open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure your code follows the existing code style and that all tests pass.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, feel free to open an issue on GitHub or contact me directly at vigneshwaranvimal17@gmail.com.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

Thank you for using the customizable button component!

### Key Sections:

1. **Introduction**: Clearly states what the package is and what it does.
2. **Table of Contents**: Provides an easy-to-navigate list of all sections in the README.
3. **Installation**: Simple instructions for installing the package.
4. **Usage**: Shows how to implement the button component, with subsections for different customizations.
5. **Advanced Usage**: Demonstrates how to combine multiple props for more complex buttons.
6. **Development**: Provides instructions for setting up the project locally and building for production.
7. **Contributing**: Encourages contributions and explains how to contribute.
8. **License**: States the licensing information.
9. **Support**: Provides contact information for support.
10. **Acknowledgements**: Credits the technologies and libraries used.

This `README.md` file is designed to be comprehensive, giving developers all the information they need to use and contribute to your npm package effectively.