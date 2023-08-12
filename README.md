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

## Images

### Import like Image Label (Recommended)
You need to add like an Image component native from nextJs. But you need to add `width={}` and `height={}` properties.

Ex:
```bash
import Image from "next/image";

<Image src="/1.png" width={20} height={20} className={styles.icon} alt="User Facebook" />
```

Also you can add the Image component in a `div` label (This div must have width and height properties in a css) so you can only add the property `fill={true}`.

Ex:
```bash
import Image from "next/image";
<div className={styles.imgContainer}>
    <Image src="/1.png" fill={true} className={styles.icon} alt="User Facebook" />
</div>

CSS FILE
.imgContainer {
    width: 500px;
    height: 500px;
}
```


### Import like Component
You need to import like component from it's source folder.
Ex: 
```bash
import Hero from 'public/hero.png';
```

And add between `{ }` the component name
```bash
<Image src={Hero} alt='' className={styles.img} />
```


### Import from URL
You can import images from internet, if you add as a variable the link of the image in the `next.config.js` file. 
Ex:
```bash
const nextConfig = {
    images: {
        domains: [
            "images.pexels.com"
        ],
    },
}
```

And in the page you need to add the URL in the **src** property `<Image />` component.
Ex:
```bash
<Image  width={50} height={75} src="https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Sculpture' />
```


## Context API
* 1 Create Folder "/Context"
Good practices indicate that you should create a folder called `context` and save the Contexts there.

* 2 File "InfoContextProvider.js"

Inside this file will be the context provider
Note: The "children" prompt will allow you to add more child components to the component

```bash
import { createContext } from "react"

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
    return (
        <InfoContext.Provider value={10}>
            //The "children" prompt will allow you to add more child components to this component
            {children}
        </InfoContext.Provider>
    )
}
```

* 3 Import to the MAIN Component, the Context Provider Component
The ContextProvider is a Component in which we are going to put the components that need the context values.

If wee need to add the values from the Context in the  main component `App`, so that the component inside it `Paragraph` can use the values ​​from the context.

To the component that will provide the values from the component to another component(s) we import the `InfoProvider`

```bash
import { InfoProvider } from "@/context/InfoContextProvider";

const App = () => {
    return(
        <InfoProvider>
            <div className="App">
                <Paragraph />
            </div>
        </InfoProvider>
    )
}
```

* 4 Component that use the Context's values

If wee need to use the values from the Context in the  component `Paragraph`, we will write the next code.

The value will be saved in the variable `ValueContext` because we only have one value in the context.

To the component that will use the values from the component, we import the `InfoContext`

```bash
import { useContext } from 'react';
import { InfoContext } from '@/context/InfoContextProvider';

const Paragraph = () => {

    const ValueContext = useContext(InfoContext);

    return (
        <>
            <div>Paragraph</div>
            <p> Number: {ValueContext}</p>
        </div>
    )
}

```

## FETCH Data on SERVER side

We changed our components into async components and we will directly fetch the data on the server

We used [JSON Placeholder](https://jsonplaceholder.typicode.com/posts) for the blog page.jsx file

### Static Data Fetching

If the DATA **NEVER** changes

By default, `fetch` will automatically fetch and cache data indefinitely.

```bash
fetch('https://...') // cache: 'force-cache' is the default
```

### Revalidating Data Fetching

If the DATA **CHANGES** but **NOT TOO OFTEN**

To revalidate cached data at a timed interval, you can use the `next.revalidate` option in `fetch()` to set the `cache` lifetime of a resource (in seconds).

```bash
fetch('https://...', { next: { revalidate: 10 } })
```

### Dynamic Data Fetching

If the DATA **CHANGES ALL THE TIME** 

To fetch fresh data on every `fetch` request, use the `cache: 'no-store'` option.

```bash
fetch('https://...', { cache: 'no-store' })
```


## SWR Hook (Fetch Data)

It is highly recommended if you are fetching data on the `client-side`. It handles caching, revalidation, focus tracking, refetching on intervals, and more.

For more information on using SWR, check out the [SWR docs](https://swr.vercel.app/docs/getting-started)

1.- Instal SWR module
```bash
npm install swr
```

2.- fetcher
You need to create a `fetcher` function, which is just a wrapper of the native `fetch`
```bash
const fetcher = (...args) => fetch(...args).then(res => res.json())
```

3.- useSWR()
Then you can import useSWR and start using it inside any function components:

```bash
const { data, error, isLoading} = useSWR("https://url.com", fetcher);
```

Info from: [Client-side Fetching NextJS Documentation](https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side)


## MongoDB DataBase
This library allows us to create our MOngoDB models and create CRUD operations.

* 1.- Instal Mongoose module
```bash
npm install mongoose
```

[Mongoose Documentation](https://mongoosejs.com/)

* 2.- Create .env file

This file is really importatnt because we are going to hide our Secret Keys here `.env`

* 3.- Var MONGO

We created a variable `MONGO` equal to the URL from MongoDB DataBase / Connect / Drivers Ex: `mongodb+srv://<user>:<password>@cluster0.tfsjotp.mongodb.net/<databaseName>?retryWrites=`

Replace `<user>` and `<password>` with the user and password for the user that you are using. Ensure any option params are URL encoded.

And also change `<databaseName>` to the name you want, in this example is `test`.

* 4.- DataBase File (db.js)

We created a js file called `db.js` and using `Mongoose` we are going to try to connect to MongoDB.

I selected the Error Handling mode, you need to write an `async function` and then the code with the `try{} catch{}`

```bash
try {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
} catch (error) {
  handleError(error);
}
```

You need to replace the MongoDB URL with the `MONGO variable` declared in he `.env file`
```bash
process.env.MONGO
```

[How to Connect Info](https://mongoosejs.com/docs/connections.html)

* 5.- Use Mongo DB 6

Go to the package.json file and change for the stable version 6 `6.11.4` and the write in the terminal `npm install`

* Create Schemas

I created User Schemas in the `User.js` and `Post.js` files from `models` folder.

Mongoose schemas support a timestamps option. If you set `timestamps: true`, Mongoose will add two properties of type Date to your schema:

createdAt: a date representing when this document was created
updatedAt: a date representing when this document was last updated

## API Posts Route
We create the API posts route, for create the info in MongoDb Atlas that we are going to show in the **`'post' collection`** from the **`'test' database`**  that we created in the `.env` file (...tp.mongodb.net//test). 

### Insert Info for localhost:3000/api/posts

In the `Cluster 0` we go to `Collections` and we will see empty the **`'test' database`** with the **`'post' collection`**, so we `insert documents` in it.
Info:
```bash
title:"Test1"
desc:"Desc"
content:"Content test"
image:"https://images.pexels.com/photos/130879/pexels-photo-130879.jpeg?auto=…"
username:"John"
```

This is for fetch the route `fetch("http://localhost:3000/api/posts"` in the `blog page`, so we need to also change the form that we return the **NextResponse** for a `JSON format` in the `route.js` file from the `api/posts` route, because we are taking a `response Json` in the page from the **Blog** page `return res.json();`.

Before:
```bash
return new NextResponse(posts, {status: 200});
```

After:
```bash
return new NextResponse(JSON.stringify(posts), {status: 200});
```

**Note:**
If you change the data from this collection once you have compiled the project 1 time, you need to restart your application. 

## Metadata
Config-based Metadata options with generateMetadata and the static metadata object. 

We use the `Static Metadata` in  `layout.js` file and `Dynamic Metadata` in `Blog[id] page.jsx` file

```bash
import { Metadata } from 'next'
 
// Static metadata
export const metadata: Metadata = {
  title: '...',
  description: '...',
}
 
// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: '...',
    description: '...',
  }
}
```

**Notes:**
- The metadata object and generateMetadata function exports are only supported in Server Components.
- You cannot export both the metadata object and generateMetadata function from the same route segment.

[Metadata Object Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)


## Authenticate User (AuthJs)
Auth.js is a complete open-source authentication solution for web applications.

- 1.- Install the library
```bash
npm install next-auth
```
- 2.- Create auth endpoint
Create AuthJs endpoint in API folder `src/app/api/auth/[...nextauth]`.

Using the folder `[...nextauth]` handles all these endpoints ` .../signin or .../signout or .../session or .../register , etc.` but you can also create your endpoint folder.

In this proyect we have `register` endpoint folder because I want to use different endpoint for creating users.

- 3.- Creating the server config
Create the following [API route file](https://nextjs.org/docs/api-routes/dynamic-api-routes#catch-all-api-routes). This route contains the necessary configuration for NextAuth.js, as well as the dynamic route handler:

[AuthJs Documentation](https://authjs.dev/getting-started/introduction)
[OAuth authentication Documentation](https://authjs.dev/getting-started/oauth-tutorial)

## Add Google Cloud Functions
 Add Google Cloud Functions to get `clientId` and `clientSecret` that we need in the server config.

 - 1.- Go to Google Cloud
 [Google Cloud](https://cloud.google.com/?hl=es)

 - 2.- Go to Google Cloud Console 
[Console of Google CLoud](https://console.cloud.google.com/getting-started?hl=es&_ga=2.219124762.287019653.1690776989-1443403584.1686636828&authuser=2)

 - 3.- Go to APIs and Services
 [Enabled APIs & services](https://console.cloud.google.com/apis/dashboard?authuser=2&hl=es&project=my-project-12345-390221)

 - 4.- Go to Credentials
 [Credentials](https://console.cloud.google.com/apis/credentials?authuser=2&hl=es&project=my-project-12345-390221)

 Create an `OAuth client ID` with the next info:
 `Authorized JavaScript origins: ` http://localhost:3000
 `Authorized redirect URLs: ` http://localhost:3000/api/auth/callback/google

 Once you create de OAuth client you will see the `Client ID` and `Client secret`. Copy and add in your `.env file`.

 - 5.- Create Secret ID
 In your project root, create a .env.local file and add the `NEXTAUTH_SECRET` environment variable.

 - 6.- Wrap Session Provider
 NextAuth.js provides `useSession()` - a React Hooks to access the session data and status. To use it first you'll need to expose the session context - `<SessionProvider />` - at the top level of your application:

 Wrap application Session Provider in `layout.js file`

 ```bash
 import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
 ```

 - 7.- Create Auth Provider Component
 You need to create an `Auth Provider` component for use un the layout and also you can use the `metadata`, if you you don't use the meta data you can onl include `"use client"` in the file and its ready.

 **Note Errors:**

 - *app-index.js:31 [next-auth][error][CLIENT_FETCH_ERROR]* 
 It's because I haven't created the URL in the `.env` file
 *Solution:*
 -Step 1.- Create `NEXTAUTH_URL = "http://localhost:3000"` in the `.env` file, but when you deploy your application, you should change here this URL.
 Doc: [Solution Link](https://next-auth.js.org/errors#client_fetch_error)

 -Step 2.- Change the type of export of the `route.js` file, because we are using App Router.
 ```bash
 export default NextAuth({...})

by

 const handler = NextAuth({...})

 export { handler as GET, handler as POST};
 ```

 -When pass the `username and password` is going to be a `POST method`
 -When fetch the session, `username` information is going to be a `GET method`

## Consuming the session

You can use the `useSession` hook from anywhere in your application (E.g. in a header component). Behind the scenes, the hook will connect to the `<SessionProvider />` to read the current user session. 

## BcryptJS

This code is based on javascript-bcrypt and uses crypto to create random byte arrays.

Installing the Package

`npm install bcryptjs` or `yarn add bcryptjs`

#### Video Project
[Next.js Full Tutorial for Beginners | Next.js 13 Full Stack App Using App Router](https://www.youtube.com/watch?v=VE8BkImUciY&t=344s).
