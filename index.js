const emoji = require(`emojione`)
const Promise = require(`bluebird`)

module.exports = {
  mutateSource: ({ markdownNode }, pluginOptions = {}) => {
    return new Promise((resolve, reject) => {
      try {
        markdownNode.internal.content = 
          emoji.shortnameToUnicode(
            markdownNode.internal.content)
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }
}