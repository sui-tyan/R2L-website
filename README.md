# R2L Website

## NOTE

Current project is incompatible to Node v.18 or above. Node v.16.0.0 is used for deployment.

When running the code below, make sure you are using Node 16.0.0 or it won't build

```$
yarn build
```

or

```
npm run build
```

## Website URLs

- Use `<Link>` instead of `<a>`. This ensures proper routing from development to
  deployment (e.g. `/home` vs `<githubrepo>/home`)

## Deployment

Pushing to branch specified in `.github/workflows/node.js.yml` ("release" branch) will trigger deployment.
Test deployment with npm run build before deploying

## Replacing images

Use original image size. Crop images to fit old image size.

## Work Packages

You can edit the sidelinks on

```
src/data/workPackage<1-6>Details.js
```

You can edit the main content on

```
src/data/eventDetailsWP<1-6>.js
```

## Development

Development branch is called "dev", other branches are outdated. Also note that please be concise on your commit messages.

ex:

```bash
// template if commit msg is long: git commit -m "What you did" -m "Concise commit message here"
// template if commit msg is short: git commit -m "Content Update: Work Package 1 [April (10 11 12), 2024]"
```
