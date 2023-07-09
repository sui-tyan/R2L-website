# R2L Website

## Website URLs

- Use `<Link>` instead of `<a>`. This ensures proper routing from development to
deployment (e.g. `/home` vs `<githubrepo>/home`)

## Deployment

Pushing to branch specified in `.github/workflows/node.js.yml` will trigger deployment.
Test deployment with npm run build before deploying

