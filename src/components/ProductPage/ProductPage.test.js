import React from "react";
import ProductPage from "./ProductPage";
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers/reducer';
import { expect } from 'chai';

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
    const wrapper = shallow(
      <ProductPage />
    )
    expect(wrapper.dive().find('div')).to.have.length(1);
  });

  it("should have an update quantity function", () => {
    const props = {
      quantityProp: 0,
    }
    var inst = shallow(<ProductPage {...props}/>).dive().instance();
    expect(inst.updateQuantity).to.not.be.undefined;
  });

});
