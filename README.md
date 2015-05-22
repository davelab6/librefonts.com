# librefonts.com 

This site showcases libre web fonts with examples of the fonts in use.

Similar sites:

* http://hellohappy.org/beautiful-web-type/
* femmebot.github.io/google-type/
* http://100daysoffonts.com

## How to add a new example

Take a look at one of our example HTML and CSS files, and use it as a template or make your own following the same structure.

Lets add a Hindi webfont example called `my-webpage`:

- Fork this repo and clone your fork to your computer.

- Install the Github Pages software by running in Terminal
```sh
gem install github-pages
```

- In your fork, copy `example-name.language-code.css` and `example-name.language-code.css` to files with your name, like `my-webpage.hi.css` and `my-webpage.hi.html`, and move them to the `_includes/hindi` directory.

- Include the Google Fonts API `<link>` for the fonts your examples uses in `_includes/hindi/_list`

- Include your CSS file in the site by adding `{% include hindi/my-webpage.hi.css %}` to `_includes/hindi/_list` 

- Include your HTML file in the site by adding `{% include hindi/my-webpage.hi.html %}` to `_includes/hindi/index.html`

- Run `jekyll serve --watch --baseurl` and browse [http://localhost:4000/librefonts.com](localhost:4000/librefonts.com) to preview the site, live!

- Edit the HTML and CSS to make a stunning example of web typography. Each time you save your files, the [http://localhost:4000/librefonts.com](localhost:4000/librefonts.com) preview site will be regenerated, so refresh your browser to see them in action. 

- Include your Twitter profile and image:
```
<!--Add your Twitter URL-->
   <a href="https://twitter.com/twitterID" class="avatar" target="_blank">
<!--Add your Twitter Prifle pic URL. You can get this by right click > Copy Image URL on your twitter profile page-->
            <img src="TWITTER_pic URL">
   </a>
```

- If you use 3rd party images, graphics or text, please ensure they are licensed with a Creative Commons Attribution or Attribution-ShareAlike license and include the correct copyright and attribution notices in your files.

- When you are ready, push your new files to your Github fork and send us a pull request.

## Need help?

Please [open an issue](https://github.com/fontdirectory/examples/issues) if you need any help.
