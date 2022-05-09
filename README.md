# Interview Assignment Kanban Board

## Setup locally

---

- clone the repository
- run `npm install`
- run `npm start`
- project will be fired up on `localhost:3000`

## description

Just a minimal app to demonstrate the kanban board functionality.
Features Implemented:

- Add cards with title, description and status.
- Search Card by name.
- Edit card name, description and status.

## NOTES

- The navbar is just added for convenience and doesn't serve a purpose and can be ignored.
- Directory structure is minimal as per the project size.
- Components are kept minimal but not broken down more than necessary.
- `Redux` is used to manage state, the modern and better way is definitely `Redux ToolKit` but for this project used redux to stick to the basics.
- More Proper functional documentation for certain functional sides would have been added if time permitted relying on JSDOC style comments for further clarity.
- Some things might have been missed still.

## MY PERSONAL REACT SETUP

- For this test I went with plain CRA scaffold.
- For more sophisticated projects I prefer to override CRA config with custom config using craco (npm).
- Use of absolute path instead of relative by adding alias webpack plugin.
- Using DUCKS pattern for directory structure.
- Using reliable state management with Redux Toolkit to handle sync and async states.
- Moving away reusable functions into utils & services to apis directory.

### Another DEMO

---

I am working on my personal portfolio & blog site it's not finished and I usually work on it in spare time so it may have some flaws.

- Using gatsby v4
- GraphQL to source data from netlify CMS
- JAMSTACK
- For now uses the default scaffold so readme & reponame is not updated.

#### [CHECK REPO](https://github.com/globalkonvict/netlify-cms)

#### [Personal Portfolio & Blog](https://globalkonvict.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). So all is similar to CRA.
