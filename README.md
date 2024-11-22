This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


//components konse hnge :
//book create = form
//book list = book load
///book show = book individually show hogi
//book edit = book edit hogi

//architecture kesa hoga : 
// main file =page.tsx : isme s book create ka data book list m jaega jahan ja k book load ho
//bCreate => bList => bShow (isi m book edit krsaken)

//api fetch :
//api component ko main file m call krahay thy aur usko as a prop agay pass krahay thay

//is m bhi main file m  ik <BookCreate /> s data le k <bookList ko send krenge
// page.tsx m centrat state create krenge  : jahan data aega aur jaega  

//http cycle :
header
body
response :paramas

crud :
get ---request website to fetch
post --data post
put ---data update
patch --date ka kuch hissa update
delete---data delete

json ---javascript object notation ---to create objects 

data store in arrays ..but json is case sensitive we need to make db.json 
{
"books":[]
}



whenever database invole in ur project---we need to open 2terminals