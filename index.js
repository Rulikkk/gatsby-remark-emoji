const joyPixels = require(`emoji-toolkit`);
const Promise = require(`bluebird`);

const defaultPluginOptions = {
  emojiConversion: 'shortnameToUnicode',
  ascii: false,
};

module.exports = {
  mutateSource: ({ markdownNode }, pluginOptions = defaultPluginOptions) => {
    const emojiConversion =
      pluginOptions.emojiConversion || defaultPluginOptions.emojiConversion;
    joyPixels.ascii = !!pluginOptions.ascii;
    return new Promise((resolve, reject) => {
      try {
        markdownNode.internal.content = joyPixels[emojiConversion](
          markdownNode.internal.content,
        );
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  },
};
