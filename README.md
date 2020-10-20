# PIX4D TEST #

## Index

1. Data Model
2. Architecture
3. Components Rendered
4. Future Improvements
5. Available Scripts

## Data Model

The data model that has been created to design this application is the following:

![Data-model](https://user-images.githubusercontent.com/33228201/96562024-92bfdb80-12c0-11eb-97e3-5ab86ca59625.JPG)

## Architecture

With the Data model set, here is a map of the architecture of the application


![Components_and_state_management_app](https://user-images.githubusercontent.com/33228201/96550629-62bd0c00-12b1-11eb-9b91-9f9a02756934.JPG)

## Components rendered

![Application_components](https://user-images.githubusercontent.com/33228201/96563427-3a89d900-12c2-11eb-91b8-a6927517044f.JPG)

## Future improvements
Application:
* Create a server and API's to Get and Post data from a database of flightplans
* Create a Login to Authenticate on the Application and save all flightplans in the database by user, once you log-in you recover saved fligth plans.

Components
List Column:
* Add Erase flightPlan functionality.
* Select multiple flighPlans to display in map.
* Filter of flightPlans by name, category and date
* Re-styling the collapsable card.

Map:
* To have a position indicator of your cursor, then you can see at all time the Lat & Lng on the mouse.
* Zoom adapt to the flightPlan selected.

Menu:
* Add Small dialog onHover the buttons to get the name of the action.
* Re-styling the FAB buttons and make them appear onces Add is activated.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
