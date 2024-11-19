import { html, fixture, expect } from '@open-wc/testing';
import "../rpg-project.js";

describe("RpgProject test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <rpg-project
        title="title"
      ></rpg-project>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
