import React from "react";
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import Review from "./Review";
import { createStore } from 'redux'
import reducer from '../../reducers/reducer'

describe("Review", () => {
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
      <Provider store={store}><Review /></Provider>,div
    )
  });
});
