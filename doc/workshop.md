# Testing Tools for Accessibility

## jsx-a11y

How to ? Already included in ott-sas-scripts >= 

## Use RTL as intended

[From the docs](https://testing-library.com/docs/dom-testing-library/api-accessibility/)
> One of the guiding principles of the Testing Library APIs is that they should enable you to test your app the way your users use it, including through accessibility interfaces like screen readers.


[See what the author has to say about it](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-the-wrong-query) and [RTL docs about which queries to use](https://testing-library.com/docs/queries/about/#priority).

https://testing-library.com/docs/dom-testing-library/api-accessibility/

## Use jest-axe

https://github.com/nickcolley/jest-axe

Example:
```js
const React = require('react')
const { render } =  require('react-dom')
const App = require('./app')

const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)

it('should demonstrate this matcher`s usage with react', async () => {
  render(<App/>, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})
```

Why? Pretty easy to put components in a lot of states, included edge cases and still making sure they are accessible.

Gotcha: Color related tests are not run in jest because they run using js-dom. 

## Use cypress-axe

https://github.com/component-driven/cypress-axe

Example:
```js
it('Has no detectable a11y violations on load (custom configuration)', () => {
  cy.visit('http://myawesomesite.co.uk/')
  cy.checkA11y()
  cy.injectAxe()
})
````

Why? You want to nake sure your UI components are still accessible to still be accessible zhen integrated together

## Use Lighthouse > Accessibility

Provided by your pipeline?

Add a lightousec.rc.js file at the root of your repo

```json
{}
```

## Install the axe chrome devtools extension

https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd


# Using a screen reader

Link to internal docs