# Portfolio Website

A React single-page application built with Tailwind and Vite, deployed on AWS using a fully automated CI/CD pipeline. You can view it [here](https://gabrielwelvaert.com/).

---

## Architecture

- Static site hosted on **S3**
- Delivered globally via **CloudFront**
- DNS managed with **Route 53**
- Secure origin access using **CloudFront Origin Access Control (OAC)**

---

## CI/CD

Deployment is automated with **GitHub Actions**:

- Builds the React app with Vite
- Uploads assets to S3
- Invalidates CloudFront cache

Uses **OIDC (OpenID Connect)** for secure, credential-free AWS authentication.
