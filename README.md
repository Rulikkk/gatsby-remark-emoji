# gatsby-remark-emoji

Adds slack-style emoji to gatsby's markdown 👍!

See [usage](#usage), [configuration](#configuration) and [changelog](#changelog) below. By configuring, you can make this plugin to convert:
- Slack-style emoji to gatsby's markdown: `:smile: -> 😀`
- Unicode emoji to short-code: `😀 -> :smile:`
- Slack-style and/or Unicode emoji to images

[![Buy me a coffee!](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/rm)

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
              // when true, matches ASCII characters (in unicodeToImage and shortnameToImage)
              // e.g. ;) --> 😉
              ascii: false,
            }
          },
          ]
        }
      },
```

# Changelog

## v0.0.2
- Merged [#1](https://github.com/Rulikkk/gatsby-remark-emoji/pull/1) that adds more conversion options
- Improved docs about conversion options and added changelog
- Added keywords to `package.json` per [gatsbyjs/gatsby#4394](https://github.com/gatsbyjs/gatsby/issues/4394)
- Added repository to `package.json`

## v0.0.1
Initial version. Works only with slack-style to Unicode
