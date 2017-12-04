import React from 'react';
import Toggle from './index';

describe('Toggle', () => {
  it('renders correctly', () => {
    // Add a snapshot test for rendering the component using
    // shallow rendering.
  });

  it('is toggled off by default', () => {
    // Add a test that inspects the initial state and validates that
    // it is "off" by default if not specified otherwise using props.
  });

  it('uses the "initialState" prop', () => {
    // Add a test that validates that the initial state matches the
    // given prop.
  });

  it('sets the correct css class name initially', () => {
    // Add a test that checks that the component renders the 'off'
    // class when rendered initially.
  });

  it('sets the toggle to "on" on click', () => {
    // Add a test that simulates a click and checks if the toggle
    // switches to "on" when clicked.
  });

  it('calls the passed click callback', () => {
    // Add a test with a "spy" (mock function) for the click callback
    // and validate that it is called with the correct argument.
  });
});