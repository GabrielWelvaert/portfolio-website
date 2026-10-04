# Portfolio Website

Single-page React application built with Tailwind and Vite that can be viewed [here](https://gabrielwelvaert.com/).
- **Architecture**: CloudFront serves the site from a private S3 bucket using OAC. ACM provides the SSL certificate used by CloudFront for HTTPS.
- **CI/CD**: GitHub Actions uses OIDC to assume an AWS role, build the app, deploy to S3, and invalidate CloudFront cache.
- **Route 53**: Registered gabrielwelvaert.com and configured a hosted zone with an Alias A record pointing to the CloudFront distribution.

<p align="center">
  <img src="./portfolio-architecture.png" width="100%" />
</p>
