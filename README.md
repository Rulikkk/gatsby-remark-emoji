# gatsby-remark-emoji
Adds slack-style emoji to gatsby's markdown 👍!

## Usage 
1. Install plugin to your site:

```bash
yarn add gatsby-remark-emoji
```

2. Add following to your `gatsby-config.js`:
```js
    plugins: [      
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-emoji`,  // <-- this line adds emoji
          ]
        }
      },
```

3. Restart gastby.
