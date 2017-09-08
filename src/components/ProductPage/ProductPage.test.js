import React from "react";
import ProductPage from "./ProductPage";

describe("ProductPage", () => {
  let props;
  const productPage = ProductPage;


  beforeEach(() => {
    window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};
    props = {
      wallpaperPath: undefined,
      userInfoMessage: undefined,
      onUnlocked: undefined,
    };
  });

  it("always renders a div", () => {
    const divs = lockScreen().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
});
