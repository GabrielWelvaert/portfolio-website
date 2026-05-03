# Portfolio Website

Single-page React application built with Tailwind and Vite, deployed on AWS using a fully automated CI/CD pipeline. You can view it [here](https://gabrielwelvaert.com/).

## Architecture

Hosted from a private S3 bucket and delivered globally through CloudFront, with Route 53 DNS and OAC-secured origin access.

<p align="center">
  <img src="./portfolio-architecture.png" width="100%" />
</p>

## CI/CD

Deployments are automated with GitHub Actions. The workflow builds the Vite app, uploads assets to S3, invalidates the CloudFront cache, and authenticates to AWS using OIDC instead of long-lived credentials.
