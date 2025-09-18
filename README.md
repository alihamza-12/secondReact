# Second React App

This is a simple React application built using React.createElement to demonstrate nested component structures and proper key props for lists.

## Description

The app renders a parent div containing two child divs, each with nested elements including headings and text. It showcases the use of React.createElement for creating DOM elements programmatically.

## Features

- Nested React components using React.createElement
- Proper key props to avoid React warnings
- Simple HTML structure with a root div
- Bundled with Parcel for development

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alihamza-12/secondReact.git
   cd secondReact
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To run the development server:
```bash
npx parcel hello.html
```

Open your browser and navigate to `http://localhost:1234` (or the port shown in the terminal).

The app will render the nested div structure in the `#root` element.

## Technologies Used

- React 19.1.1
- React DOM 19.1.1
- Parcel 2.15.4 (for bundling)

## Project Structure

- `App.js`: Main React application code
- `hello.html`: HTML entry point
- `package.json`: Project dependencies and scripts
- `.gitignore`: Git ignore rules

## License

This project is licensed under the ISC License.
