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



#### Video Project
[Next.js Full Tutorial for Beginners | Next.js 13 Full Stack App Using App Router](https://www.youtube.com/watch?v=VE8BkImUciY&t=344s).

