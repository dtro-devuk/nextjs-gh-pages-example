# Deploying Next 10, Tailwind CSS apps to GitHub Project pages

## Overview

This repository is an example of how we can deploy a Next.js v10 app, with Tailwind CSS styling to GitHub Project pages.

This is the code I use as starter template from my own projects.

GitHub Project pages can be hosted alongside specific GitHub projects / repositories. They can be documents or web pages.

This repository contains code written with Next.js v10, and styled with Tailwind CSS v2.0+, to form a simple app. The purpose of the code is to show how to deploy the code to GitHub Project pages as static HTML. JamStack like.

The deployed GitHub page is being used below to show how we can use a "project" page to demo our apps etc.

[Demo](https://dtro-devuk.github.io/nextjs-gh-pages-example)

The pages in the demo were statically generated at build time, they are :zap: :zap: very fast :zap: :zap:  to render, and still reactive. They are optimized and do not require any server-side computation, giving a faster loading experience.

## How to deploy GitHUb Project Pages

To generate static HTML websites in Next.js use the **`Export`** script in the `package.json` file. The script is included by default when creating a Next.js project, using `create-next-app`:

```code
npm create-next-app {project-name}

yarn create next-app {project-name}
```

Export the Next.js app to static html pages using the export script:

```code
 npm run export
```

This creates and `out` folder with all the pages and resources (assets) built as a statically generated site.

It's the "assets" (html, css etc), within this folder that we are deploying to our GitHub project page. Within the code we push these assets to a git branch we named `gh-pages`. See the "deploy-gp" script in the package.json file.

i.e.

```code
"deploy-local": "next build && next export && npx serve out",

"deploy-gp": "touch out/.nojekyll && git add -f out/ && git commit -m \"Deploy gh-pages\" && git subtree push --prefix out origin gh-pages",
```

The first script above uses the built in build and export scripts to build and expor the app code to the `/out/` folder, that contains the static Html assets.

The `npx server out`, script lets us view the static pages on port 5000.

A `.nojeckyll` empty file is created to instruct GitHub Project pages, not to treat the assets as Jeckyll pages, which is what they default to for documentation.

***Server*** is made by Vercel, and can be installed globally or used locally with the `npx` prefix. Its used to serve a static site, single page application or just a static file (no matter if on your device or on the local network),

Here, I'm using it to check the exported assets before deployment, by serving the static site to localhost.

The second script, is the deploy script to my GitHub Project page location.
The GitHub Project page needs to be setup for your repository, by logging into your GitHub account and navigating to the repositories and clicking on settings.

Briefly, you can configure your repository to be Public and choose which branch to serve your documents from.

Pushing the code to using the `deploy-gp` creates this branch. It can then be set up in GitHub Settings as mentioned above. `gh-pages` should be available as branch.

## Not that straight forward

This all sounds straight-foward but it is not!.

Since, GitHub Project pages are served from you GitHub repository, we have to tweak the routing on the app pages and the location of the assets (static resources) when we export the code to static Html.

Fortunately, we can do this by configuring the next app.
We can create a `next.config.js` file, and configure for this.

Briefly, we can alter `basePath` and `assetPrefix` to point to our GitHub repository name.

This is needed since the GitHub Project page is served from a subpath (the repository name), i.e.

```code
https://{account-name}.github.io/{repository-name}
```

Add the following code in the `next.config.js` file:

```code
const withPlugins = require('next-compose-plugins');
const debug = process.env.NODE_ENV !== 'production';

const env = {
  --- // Whatever we need here in terms of environment config
};

const basePath = !debug ? '/{repository-name}' : '';
const assetPrefix = !debug ? '/repository-name/' : '';

module.exports = withPlugins([
  {
    env,
    basePath,
    assetPrefix,
  },
]);
```

Both _basepath_ and _assetPrefix_ are Next.js features (see the Next.js Documents).

***basePath***

appends to our static pages (index.js, about.js etc.) when routing, so they dont break when navigating the app, once pushed to the GitHub page branch. It allows us to serve pages from a subpath. It means the routing `<Link>`'s wont break.

more sophisticated amendments can be made using the `exportPathMap` option, which is exlusive to `next export`. See the Next.js Docs.

***assetPefix***

is similar to `basepath` in but it does it for static assets such as CSS and images.

Next deploy to Github and it should hopfully work.

---

## Gotchas

:persevere: :frowning: :persevere:

Appologies for keeping this brief and not going into detail, but the code should speak for itself.

This subject has been covered quite a bit online, but it did take me sometime to get this right. There are some gotcha's but I've covered the main ones above.

Note: when serving the static Html, using Vercel's Serve, it looks like the links and styling has broken but it hasn't.

You can verify, they work when running in Dev mode, so long as you change the `next.config.js` to swap out `basePath` and `assetPrefix`.

Other gotcha's can be the Tailwind CSS and how its purged. I ended up not to using PostCSS purge, as it was breaking the assets when exported. Maybes, it was just me, I used the purge options in the `tailwind.config.js` file, in the end.

A final word on deployment, I kept it simple, you can use Travis, Git Actions, Huskey etc. In this case, I just used some simple scripts, and git commands.

Something, I may use later is Git Actions and Huskey/

Ok thats it. Good luck. :grin: :sparkles:
