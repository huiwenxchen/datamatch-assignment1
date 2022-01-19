This is my first assignment for Datamatch.

# Assignment 1

## Part 0
Apply for a [Jetbrains student license](https://www.jetbrains.com/student/) if you haven't yet, and download [Webstorm](https://www.jetbrains.com/webstorm/). We highly encourage you to use this IDE.

## Part 1 - HTML basics (Week 1) 
Clone this repository using [this guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). Notice the html file `index.html` in the main folder, which is where the actual HTML content of our website will be held. (the subfoler `js` is where we store our Javascript files and the `data` folder will be used in Part 2). You will need to create a `css` subfolder to store your `.css` file and `img` subfolder to store the images you want to show in your website for this part of the assignment.

Using HTML and CSS, modify the files and create a personal website to introduce yourself. It can be as simple or as complicated as you want, it just needs to include your name, a short biography of yourself, a profile picture, and a couple of links to other profiles of yourself. (Feel free to add more features, like more images/a slideshow, a background image, other pages, etc.) Use at least 3 CSS selectors and 6 properties to style your webpage. Some ideas include:
- Changing the font! Check out [Google Fonts](https://fonts.google.com/) for this. You will have to link the font in your header.
- Adding icons and styling them. Consider [Font Awesome](https://fontawesome.com/).
- Making the layout of your website responsive. Consider [Bootstrap](https://getbootstrap.com/).

Make sure you don't delete the following lines in the `index.html`! They will be used in the next part of the assignment  our `js` (including the d3 source code) files to our html files.

```
<script src="js/d3.v7.min.js"></script>
<script src="js/main.js"></script>
```

Here's a [screenshot preview](https://github.com/avcheng/dm-assignment1-part1/blob/main/img/Screen%20Shot%202020-10-24%20at%201.11.22%20PM.png) of what you could have by the end of this step, which is what I had done for this assignment my freshman year. You can also check out the HTML and CSS files that make that website work or clone the repo and run it locally to see how everything fits together. Remember to link your stylesheets to your HTML files!

## Part 2 - D3 static visualization (Week 2)
Add a visualization to page through D3! This can just be below your short bio. (If you're feeling adventerous, try having this show up on a different "tab" on the website). 

The instructions for this part are in the `js/main.js` file. The result should be a graph of a bunch of different circles representing the school signups.

## Part 3 - Turning in the assignment using Git (By Week 3 meeting)
To turn this assignment in, please use Github and create a new repository. Git is the industry standard for version control ad is super helpful to learn! You [can follow this guide here to create a new repository](https://guides.github.com/activities/hello-world/). Commit and push your website up to your Github account and email us the link!
