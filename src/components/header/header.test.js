import React from 'react';
import { shallow, render, mount } from 'enzyme';
import header from './header';

describe('header', () => {
  let props;
  let shallowheader;
  let renderedheader;
  let mountedheader;

  const shallowTestComponent = () => {
    if (!shallowheader) {
      shallowheader = shallow(<header {...props} />);
    }
    return shallowheader;
  };

  const renderTestComponent = () => {
    if (!renderedheader) {
      renderedheader = render(<header {...props} />);
    }
    return renderedheader;
  };

  const mountTestComponent = () => {
    if (!mountedheader) {
      mountedheader = mount(<header {...props} />);
    }
    return mountedheader;
  };  

  beforeEach(() => {
    props = {};
    shallowheader = undefined;
    renderedheader = undefined;
    mountedheader = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
