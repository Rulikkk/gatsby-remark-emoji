const assert = require('assert');

const gre = require("../index.js");

describe("gatsby-remark-emoji", () => {
  describe("#mutateSource()", () => {
    it("should mutate emojis from :slack-style: to real emojis", async () => {
      const mutateSource = gre.mutateSource;
      const objectToMutate = {markdownNode: {internal: {content: ":thumbsup:"}}};
      await mutateSource(objectToMutate);
      assert.equal(objectToMutate.markdownNode.internal.content, "👍");
    });
  });
});

