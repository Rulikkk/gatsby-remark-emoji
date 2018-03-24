# gatsby-remark-emoji

Adds slack-style emoji to gatsby's markdown 👍!

See [usage](#usage) and [configuration](#configuration) below. By configuring, you can make this plugin to convert:
- Slack-style emoji to gatsby's markdown: `:smile: -> 😀`
- Unicode emoji to short-code: `😀 -> :smile:`
- Slack-style and/or Unicode emoji to images

# Usage

1.  Install plugin to your site:

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

3.  Restart gastby.

# Configuration

Plugin actually supports all js [conversion modes](https://demos.emojione.com/latest/index.html#js) from Emojione, default mode is `shortNameToUnicode` (described [here](https://demos.emojione.com/latest/shortnametounicode.html)). 

This is config with options:

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
