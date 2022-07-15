# Frontend Mentor - The Odin Project foundations-recipe project solution

This is a solution to the [The Odin Project foundations-recipe project](https://www.theodinproject.com/lessons/foundations-recipes).Which is helping me improve my coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View recipes and thier ingredients
-Contact the site owners 

### Screenshot

![](./imgs/Screenshot-odin%20Recipes.png)

### Links

- Solution URL: https://github.com/tmoris/odin-recipes
- Live Site URL:https://tmoris.github.io/odin-recipes/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS
- DOM


### What I learned

While working on this project i have learnt
how to; access elements in the DOM, use array function in JS, use CSS grid for styling page  and create reponsive layouts.
I have also leart how to link multiple pages 


For code snippets examples, see below:

```css
 .recipe {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "recipe-header recipe-header"
      "recipe-content recipe-content"
      "cta-section recipe-ingredient ";
    gap: 1em;
  }

  .recipe-header {
    grid-area: recipe-header;
  }

  .recipe-content {
    grid-area: recipe-content;
    display: grid;
    grid-template-columns: inherit;
    gap: inherit;
  }

  .recipe-ingredients {
    grid-area: recipe-ingredient;
  }

```
```js
const menuToggle = document.querySelector('.brand__menu');
const links = document.querySelectorAll('.navlist__item--link');
menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('open');
});

links.forEach(link =>{
  link.addEventListener('click', () => {
      document.body.classList.remove('open');
    });
  });

```

### Useful resources

- [web.dev](https://web.dev/learn/css/) - This helped me learn mordern CSS techniques. I really liked the content and will use it going forward.
- [kevinpowell](https://courses.kevinpowell.co/conquering-responsive-layouts) - This is an amazing course which helped me finally understand responsive web design. I'd recommend it to anyone still learning this concept.



## Author

- Github - [@tmoris]https://github.com/tmoris
- Frontend Mentor - [@tmoris](https://www.frontendmentor.io/profile/tmoris)
- Twitter - [@tibenkanamoris](https://www.twitter.com/tibenkanamoris)


