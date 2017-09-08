import React from "react";
import ProductView from "./ProductView";

describe("ProductView", () => {
  let props;
  const productView = ProductView;


  beforeEach(() => {

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
