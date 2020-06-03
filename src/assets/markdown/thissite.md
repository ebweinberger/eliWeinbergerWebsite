# This Website
This website is built using Angular. I learned quite a few things about angular
in the process. I have previous experience building node.js apps from scratch so
I found switching to angular pretty fun. It really takes away a lot of the headaches
after you beat the learning curve.

## Components
This website did not require multiple components but I decided to use two anyway
because I wanted the learning experience. There is a `HomeComponent` and a `ProjectComponent`.
The `HomeComponent` is what you see on the Home page of the website. It is just
plain HTML and CSS. The `ProjectComponent` is a bit more complex and has gone through
a few iterations before I got it how I like it.

### First Iteration of `Project Component`
I originally had discovered agnular templates and wanted to use those to render
the information fore each project. To do this I made the HTML template using the
`{{ variableName }}` interpolation notation and stored the project information as
strings in a .json. I then had to learn how to read from .json in an Angular component.
After some googling I found that I needed to enable angular to resolve json moduesl
in the `tsconfig.json` file and then I could make a .json object in the `component.ts`
file. Then I could simply set `variableName` to `json.property` and it would render the
string from the .json into the HTML.

After messing around with it a bit and seeing how things looked on the page, I
realized that it would be quite a bit of work to create an HTML template that I could
use for any layout that I might want. I started by playing around with Angular's
inline conditional, `*ngIf`, and while that worked I decided it would be easier and
make more sense to take a different approach.

### Second Iteration of `ProjectComponent`
I decided to abandon the .json approach all together and instead looked for a way to
render markdown. I found the marked.js file which takes a string of markdown text and
converts it to HTML. I then had to learn how to use third party libraries in an Angular
project. This was a little tricky for me and took my some time but I eventually I found
the solution. Instead of importing the library directly to my `component.ts` file, I
simply declared it in the `script` field in `angular.json`. This tells Angular to allow
me to access the library from any file. I then needed to create a `typings.d.ts` file in my
`/src` directory and declare `marked` as `any` type. This allows Angular to recognize when
I reference `marked` in the `component.ts` file.

From there, the last step was to read in a .md file as a string. This required another
decleration in `typings.d.ts` to allow Angular to recognize .md files. From there I could
use an import statement to retrieve the file with `raw-loader`. This gave me an
object that contains the markdown string.

The last step was using Angular property bindings with `[innerHTML]` to set the
the HTML of the `<div>` to be the output of the `marked(mdFileObject.default)` function.

I then ran into an issue where my style rules where not being picked up by the markdown.
I found out on Stackoverflow that Angular rewrites the CSS files and it does not apply the
style rules to property bindings. The workaround for this was to use `:host ::ng-deep`
as a prefix to the rules. That makes sure the rules apply to the `[innerHTML]` property binding.  

## Router
In order to navigate between the home page and the different projets, I use a router.
As you can see, right now the router is at `/thissite` and changes to whatever link you
click. As I mentioned before, there are only two components on this website. When you click
home, the router displays the `HomeComponent`. All other routes on this website display
the `ProjectComponent` which has it's own logic as to which project it displays.  

## Services
From the Agular documentation I learned that the best practice is to make sure that
the logic in the component only affects the way things are displayed, not what the
actual content is. Initially I had logic in the `ProjectComponent` that decided what
markdown file to pull the information from. After I got it functioning, I decided to
move it into its own service, `GetMarkdownService`. The service is called by `ProjectCompononent`
with an argument of what the active route is when the page is loaded. `GetMarkdownService`
then returns the appropriate string of markdown text which is then plugged into the `marked()`
function.

[Check out the repository on Github](https://github.com/ebweinberger/eliweinbergerwebsite)
