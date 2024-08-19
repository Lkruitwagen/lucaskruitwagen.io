# lucaskruitwagen.io

This is the repo for my personal website, deployed here: [lucaskruiwagen.io](http://lucaskruitwagen.io). 

## Learning React

This repo also represents the culmination of my learning vanilla React. The following concepts have been demonstrated in this repo.

1. vanilla react basics with component functions and styling (inc. dark mode);
2. multi-page app using `react-router-dom`, including query parameters with `useSearchParams` and route params with `useParams`;
3. parseing yaml files with `yaml-loader`;
4. fetching data from remote sites (in this case Github).

## Install for development:

You'll need [Node.js](https://nodejs.org/en/download/package-manager) to start. Then clone this repo and:

1. `npm run install`
2. `npm run dev`

## Adding data

The static data on this site are parsed from three `yaml` files: [blog.yaml](data/blog.yaml), [code.yaml](data/code.yaml), [speaking.yaml](data/speaking.yaml). Add entries to this static data to extend the content on the site.

All data entries can also have `highlight: true` which will add them to the highlights on the `home` page.
