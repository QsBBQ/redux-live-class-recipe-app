import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import App from './';
import { Router } from 'react-router';

test( 'App', t => {
  let expected, actual;
  t.plan( 2 );

  const wrapper = shallow( <App /> );
  expected = true;
  actual = wrapper.is( Provider );

  t.ok( actual === expected, 'renders a React/Redux Provider' );

  expected = 1;
  actual = wrapper.find( Router ).length;

  t.equals( actual, expected, 'renders Router component' );
});

