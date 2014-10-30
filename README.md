# librefonts.com 

This site showcase Web Fonts Exmples with only Free, Libre, Open Souce Fonts.


## How to add a new example

Adding a new example is easy. Lets add a Hindi webfont example called `my-webpage ` 
            
- First take a look at one of our example HTML and CSS files .
- Make your Example follwing the structure.
- Don't forget to add your Twitter profile url and image url.

```
<!--Add your Twitter URL-->
   <a href="https://twitter.com/twitterID" class="avatar" target="_blank">
         
<!--Add your Twitter Prifle pic URL. You can get this by right click > Copy Image URL on your twitter profile page-->
            <img src="https://pbs.twimg.com/profile_images/431160368165961728/8Cz-MEYm_400x400.jpeg">
   </a>

```
- Name your files ` my-webpage.hi.css`  and ` my-webpage.hi.html`. We me files like this ` example-name.langauge-code.css`  and  ` example-name.langauge-code.css ` 
- Add your HTML and CSS files to ` _includes/hindi`  directory.
- Add the Google Fonts ` <link>`  url to ` _includes/hindi/_list file ` . Don't forget to remove the Google fonts link from CSS and HTML file if you had them added.
- Link your CSS file by adding ` {% include hindi/my-webpage.hi.css %} ` to ` _includes/hindi/_list file ` 
- Link your HTML file by adding ` {% include hindi/my-webpage.hi.html %} ` to ` _includes/hindi/index.html `
- Now do ` jekyll serve --watch --baseurl  ` and browse [http://localhost:4000/librefonts.com](http://localhost:4000/librefonts.com) to see your example live.
- Keep editing :)
- Send a Pull request 

## Need help

Please open a [new issue](https://github.com/fontdirectory/examples/issues) if you need any help.


## How to build the site

For Linux, ensure that ruby-dev is installed on your system: e.g. for Ubuntu 14.04:
    
    sudo apt-get install ruby-dev

First install Jekyll, with `gem`:

    sudo gem install jekyll

To see the site as it will appear after processing by Jekyll and review your edits live in a browser layout, run:

```
` jekyll serve --watch --baseurl ''
```

Now browse [http://localhost:4000/](http://localhost:4000/).
