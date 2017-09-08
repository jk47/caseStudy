import React from "react";
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import ProductView from "./ProductView";
import { createStore } from 'redux'
import reducer from '../../reducers/reducer'

describe("ProductView", () => {
  let props;
  let store = createStore(reducer)
  beforeEach(() => {
    props = {
      something: undefined,
    };
  });

  it("always renders a div", () => {
    const div = document.createElement('div')
    shallow(
      <Provider store={store}><ProductView /></Provider>,div
    )
  });
});
