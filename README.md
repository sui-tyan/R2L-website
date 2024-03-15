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

Pushing to branch specified in `.github/workflows/node.js.yml` will trigger deployment.
Test deployment with npm run build before deploying

## Replacing images

Use original image size. Crop images to fit old image size.
