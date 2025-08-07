# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Mortgage Repayment](https://mortpay.netlify.app/)
- Live Site URL: [Mortgage Repayment](https://mortpay.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- CSS custom properties
- [TailwindCSS](https://tailwindcss.com/) - For styles
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt how to style radio input element because by default, they can't be styled and i also learnt how to input commas (,) as a user types a digit

```css
input[type="radio"] {
  appearance: none;
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid var(--color-slate-700);
  border-radius: 50%;
  background: var(--color-white);
  position: relative;
  cursor: pointer;
  outline: none;
}

input[type="radio"]:checked {
  border-color: var(--color-lime);
  background-color: var(--color-white);
}

input[type="radio"]:checked::after {
  content: "";
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: var(--color-lime);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

```js
{
  isMort
    ? totalMoneyOverTerm
      ? `£${totalMoneyOverTerm.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      : "£0.00"
    : interestRepaymentOverTerm
    ? `£${interestRepaymentOverTerm.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`
    : "£0.00";
}

value={
              mortgageAmount
                ? Number(mortgageAmount.replace(/,/g, "")).toLocaleString()
                : ""
            }
```

### Continued development

I need to learn how to write functions that works

## Author

- LinkedIn - [Joshua Ebhamen](https://www.your-site.com)
- Frontend Mentor - [@Isaacjosh23](https://www.linkedin.com/in/joshua-ebhamen-4904aa344/)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
