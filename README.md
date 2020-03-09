##  Simple picture generator using Unsplash API 

### About 

This project was created using REACT.JS framework with REACT HOOKS API, Typescript, Redux for state management and SCSS modules for styling.

All pictures are fetched from Unsplash API. More information about Unsplash API and how it works you can find here: https://unsplash.com/developers
Live preview: https://laurexas.github.io/unsplash/

### Project functionality

User can type random keyword in searchbar and press search button which will send http request to Unsplash servers and will fetch pictures. 

If user send empty input he will get error, if no results are found user will get error.

User can save his queries by pressing Save button which will save last keyword in redux state. By clicking on saved query http request will be triggered automatically.

### Installation

First you have to download this repository to your computer, go to projects directory you have downloaded using terminal and run script : 'npm install'. After installation process is done and all required dependencies are installed run script 'npm start' to run the app in the development mode.

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
