# Vercel  

Vercel allowed me to host this website as well as my other projects for free. It is a cloud platform that hosts JAMstack websites and web services. It integrates with version control services and requires no maintenance.  

## Version Control Integration  
### Setup
There were two ways I learned how to do this. When I discovered Vercel, I had already built Speckles and wanted to host it somewhere. All I had to do was make a git repository out of the directory and then link it with Vercel using the Vercel CLI.

For this website, I started fresh from Vercel. I created a new deployment on Vercel and selected the Angular template. It automatically made a repository for me that contained the basic Angular starting framework that I then cloned to my machine.

### Branches  
Vercel also works nicely with branches. When I push to the master branch, Vercel automatically rebuilds my project and deploys to the main domain (eli-weinberger.now.sh). But if I branch and start pushing to that, Vercel will build and deploy to a sub-domain (branch.eli-weinberger.now.sh)

## Plans for other projects  
Vercel has worked great for me and it will be my go-to for my future simple web-projects. Depending on the backend dependencies of my heat map project, I will use it to make a frontend for that.

[Visit Vercel's Website](https://vercel.com)
