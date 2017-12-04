import React from 'react';
import Button from './index';

describe('Button', () => {
  it('renders with correct text', () => {
    const component = shallow(<Button />);
    const text = 'Click me!';

    expect(component.contains(text)).toEqual(true);
  });  

  // We can use snapshot testing.
  it('renders correctly', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });

  // Notice the difference between shallow and mount.
  it('renders correctly with prop', () => {
    const component = mount(<Button inactive="orange" active="blue" />);
    expect(component).toMatchSnapshot();
  });

  // We can use the convenience matchers from jest-enzyme.
  it('initializes the state with the given props', () => {
    const component = shallow(<Button inactive="orange" active="blue" />);
    expect(component).toHaveState('color', 'orange');
  });

  // We can simulate click events on the rendered components.
  it('changes the color on click', () => {
    const component = shallow(<Button />);

    // Color is 'green' before the click.
    expect(component).toHaveStyle('backgroundColor', 'green');
    component.simulate('click');

    // Color is 'red' after the click.
    expect(component).toHaveStyle('backgroundColor', 'red');
  });

  it('changes to a custom color on click', () => {
    const component = shallow(<Button inactive="orange" active="blue" />);
    
    // Color is 'green' before the click.
    expect(component).toHaveStyle('backgroundColor', 'orange');
    component.simulate('click');

    // Color is 'blue' after the click.
    expect(component).toHaveStyle('backgroundColor', 'blue');
  });
});
