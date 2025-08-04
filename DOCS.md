# Documentation

## File Structure

The repo has three main files, src, public and dist. The dist directory is the final site which will be uploaded to the webserver. The src directory is where all the site code and styles are. The public directory is where all assets like images will go, the layout of the src directory and the public directories mirror the routes on the actual webpages minus special folders with underscores

*\_styles* holds all css files which are used to create custom styles for elements on a page

*\_scripts* holds all javascript files which are used to add interactivity to the webpages

*\_data* holds global javascript files, which define data which is either computed at build time or just hardcoded as a javascript datastructure.

*\_includes* holds all the templates which can be included in a given page, these allow for reuseable components on multiple pages such as the heading or repeatable layouts such as the events

## Building

When building you can run one of two commands

`npm run dev` runs a development server which builds the page in development mode. Note that you may have differences to the production build in this mode, which you can check by running the command `npm run build`.

To preview the site after building it run `npx serve dist`.


