
# Blog App

This blog page allows users log in with Google to create, share and comment on posts, built with Next.js, MongoDB, Prisma, OAuth, and Firebase. With a sleek and simple UI, Users can explore posts by category, share their thoughts and get feedback easily.


> [!NOTE]
> Users can only login to the application via their google accounts, to be able to post blogs and write comments.

## Project Overview

- **Framework**: Next.js
- **Database**: Prisma, Mongo DB, Firebase
- **Deployment**: Vercel



## Live App

[Visit Blog](https://blog-app-nine-ecru.vercel.app)


## Features

- **Google Authentication**: Secure login and registration.
- **Professional Text Editing**: Compose posts with a professional-text editor.
- **Image handling**: Easily upload pictures for your blog.
- **Responsive Design**: Optimized for all screen sizes.

## Run Locally

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Steps

Clone the project

```bash
  git clone https://github.com/Samyak0-0/blog.git
```

Install dependencies

```bash
  npm install
```

Build the Application
```bash
  npm run build
```


Run the development server

```bash
  npm run dev
```

Open [localhost:3000](http://localhost:3000) to view in the browser.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GOOGLE_ID`
`GOOGLE_SECRET`
`NEXTAUTH_URL`
`NEXTAUTH_SECRET`
`DATABASE_URL`
`FIREBASE`

## License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License. 