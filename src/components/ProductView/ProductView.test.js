import React from "react";
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import ProductView from "./ProductView";
import { createStore } from 'redux'
import reducer from '../../reducers/reducer'
import {expect} from 'chai'

describe("ProductView", () => {
  let props;
  let store = createStore(reducer)
  beforeEach(() => {
    props = {
      something: undefined,
    };
  });

  it("always renders a div", () => {
    const props = {
      alternateImages: ['a', 'b'],
    }
    const wrapper = shallow(
      <ProductView {...props}/>
    )
    expect(wrapper.dive().find('div')).to.have.length(1);
  });

  it("should have a slider class element", () => {
    const props = {
      alternateImages: ['a', 'b'],
    }
    var inst = shallow(<ProductView {...props}/>).dive().instance();
    expect(inst.props.classes.slider).to.not.be.undefined;
  });
});
