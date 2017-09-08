import React from "react";
import ProductPage from "./ProductPage";
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../reducers/reducer'

describe("ProductPage", () => {
  let props;
  const productPage = ProductPage;
  let store = createStore(reducer)


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
      <Provider store={store}><ProductPage /></Provider> ,div
    )
  });
});
