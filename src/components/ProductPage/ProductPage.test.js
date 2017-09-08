import React from "react";
import ProductPage from "./ProductPage";
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'

describe("ProductPage", () => {
  let props;
  const productPage = ProductPage;


  beforeEach(() => {
    props = {
      wallpaperPath: undefined,
      userInfoMessage: undefined,
      onUnlocked: undefined,
    };
  });

  it("always renders a div", () => {
    const div = document.createElement('div')
    shallow(
      <Provider><ProductPage /></Provider>,div
    )
  });
});
