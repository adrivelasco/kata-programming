# Kata Programming

author @ Adrián Velasco

https://kata-programming.vercel.app

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

![Preview](https://personal-images-hub.s3.us-east-1.amazonaws.com/Screen%20Shot%202021-10-20%20at%202.38.13%20AM.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech Stack

- [TypeScript](https://github.com/microsoft/TypeScript)
- [React](https://reactjs.org)
- [Redux](https://github.com/reduxjs/redux) + [TKL](https://redux-toolkit.js.org/) - State Management
- [Chakra-UI](https://chakra-ui.com/) - UI Library
- [Jest](https://jestjs.io/) / [Testing Library](https://testing-library.com/) - Unit Testing

## Notes

- The algorithm to resolve the combination of attacks given a list of potions is in the file:`s rc/algorithm/getTheMostDamagingAttacks.ts`
- All the logic is isolated in a custom hook, `usePotionCalculator.ts` and used in the `PotionCalculator` component
- I wrote unit tests to cover the algorithm functionality and the redux store
- It's mobile responsive

## Getting Started

Start the project in **development** mode:

```
yarn install
yarn start

# Then, open http://localhost:3000 in your browser.
```

Run **tests**

```
yarn test
```

Builds the app for **production** to the `build` folder.

```
yarn build
```
