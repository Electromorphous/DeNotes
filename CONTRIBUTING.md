## First time contributing

Check out [this blog](https://electroblog.hashnode.dev/beginners-guide-to-github-opening-your-first-pull-request) for help with making contributions for the first time.

## General steps

1. Fork this repo to your account
2. Clone it to your machine
3. Create a branch with a descriptive name
4. Code
5. Commit your code with descriptive messages as you code
6. Push your code to GitHub (it will get pushed to your fork)
7. Open a pull request

## Running the app

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

## Environment variables

Head to the [Thirdweb dashboard](https://thirdweb.com/dashboard/settings) and make an API key. In order to do that, you need to have a Web3 Wallet and an account on Thirdweb. This page will guide you through it so you can set it up in a few minutes.

After creating your API key, you will get a Client ID along with it. Create a `.env` file and paste it there. Refer the `.example.env` file.

For the encryption key, use any string you like.
