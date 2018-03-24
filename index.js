const emoji = require(`emojione`);
const Promise = require(`bluebird`);

const defaultPluginOptions = {
  emojiConversion: 'shortnameToUnicode',
};

module.exports = {
  mutateSource: ({ markdownNode }, pluginOptions = defaultPluginOptions) => {
    const emojiConversion =
      pluginOptions.emojiConversion || defaultPluginOptions.emojiConversion;
    return new Promise((resolve, reject) => {
      try {
        markdownNode.internal.content = emoji[emojiConversion](
          markdownNode.internal.content,
        );
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  },
};
