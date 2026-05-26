# Vivek Jammula Website

Static portfolio website built from resume content.

## Local Preview

Run this command in the website folder:

```bash
git init
python3 -m http.server 8000
```

Then open:

```
http://localhost:8000
```

## Publish to GitHub Pages

1. Create a new GitHub repository.
2. Add this folder and push to the repo:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

3. In GitHub repo settings, enable GitHub Pages from the `main` branch.

## Publish to Netlify

1. Sign in to https://www.netlify.com/
2. Create a new site from Git.
3. Select your GitHub repository.
4. Set the publish directory to `/` and deploy.

## Publish to Vercel

1. Sign in to https://vercel.com/
2. Create a new project from Git.
3. Select your repo and deploy.
