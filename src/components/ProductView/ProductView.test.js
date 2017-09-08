import React from "react";
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import ProductView from "./ProductView";

describe("ProductView", () => {
  let props;
  beforeEach(() => {
    props = {
      something: undefined,
    };
  });

  it("always renders a div", () => {
    const div = document.createElement('div')
    shallow(
      <Provider><ProductView /></Provider>,div
    )
  });
});
