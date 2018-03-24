# gatsby-remark-emoji

Adds slack-style emoji to gatsby's markdown 👍!

## Usage

1.  Install plugin to your site:

```bash
yarn add gatsby-remark-emoji
```

2.  Add following to your `gatsby-config.js`:

```js
    plugins: [
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
            resolve: 'gatsby-remark-emoji', // <-- this adds emoji
            options: {
              // default emojiConversion --> shortnameToUnicode
              emojiConversion: 'shortnameToUnicode',
            }
          },
          ]
        }
      },
```

3.  Restart gastby.

[Documentation about conversions inside in EmojiOne](https://demos.emojione.com/latest/index.html#js)
