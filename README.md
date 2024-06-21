# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Import Data

In App.jsx import data from data.js to be rendered as an array of objects.

### Setup State Variable

Setup the data as a state variable using the useState hook which allow the data to be modified and have changes automatically reflected in the rendered output

### Iterate && Render

Display the number of items in the list by using the length property of the state variable. This information can be displayed using plain text or added to a message or heading element.
To render the list of people, iterate over the data array using map method. For each item in the array, render an image element. Additionally render the person's name and age as plain text.

Create a List component to hold the rendered items. This component can be simple div element containing the list of Person Components.

Create a Person Component to render the information for each person. This component should receive the person data as props and render the image, name and age information.

Clear List:
In App.jsx, add a button to clear the list and setup the functionality by defining a function that resets the state variable to an empty array.
