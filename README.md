This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Hidden Route Folder ( )
You can create a folder with its name between "()" so you can organize the routes in another folders without this new folder becoming part of the routing path
* Ex
> Dashboard
>>(Auth)
>>>Login  
>>>Register


The route will be: `Dashboard/Login`
NOT: `Dashboard/Auth/Login`

## Utils Pages

### Layout Page "layout.jsx"
It's the main layout that grabs your components and you can use any layout insede your page folder also.

### Loading Page "loading.jsx"
You can show the page you want while waiting for the path of the page that was accessed to load.

### Error Page "error.jsx"
You can show any default error page that arise when you try to enter the path of the page that was selected.

## Rendering

### Type 1: Server Side (By Default)
The Server Render Everything and returns the page.

The server receives the Request and returns a Response that includes only a HTML file.

### Type 2: Client Side Rendering
The Browser Render Everything.

The server receives the Request and returns a Response that includes a HTML and JavaScript file.

If you need **Client Interaction** you need to use it. For that, you need to write `"use client` to convert into a CSR.


#### Video Project
[Next.js Full Tutorial for Beginners | Next.js 13 Full Stack App Using App Router](https://www.youtube.com/watch?v=VE8BkImUciY&t=344s).

