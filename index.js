const emoji = require(`emojione`);
const Promise = require(`bluebird`);

const defaultPluginOptions = {
  emojiConversion: 'shortnameToUnicode',
  ascii: false,
};

module.exports = {
  mutateSource: ({ markdownNode }, pluginOptions = defaultPluginOptions) => {
    const emojiConversion =
      pluginOptions.emojiConversion || defaultPluginOptions.emojiConversion;
    emoji.ascii = !!pluginOptions.ascii;
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
