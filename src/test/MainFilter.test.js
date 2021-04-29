import React from 'react';
import renderer from 'react-test-renderer';
import MainFilter from '../components/MainFilter';

describe('Test Display component with snapshot', () => {
  it('Renders Display component correctly', () => {
    const display = renderer.create(<MainFilter />).toJSON();

    expect(display).toMatchSnapshot();
  });
});
