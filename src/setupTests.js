// Extend the default Jest test configuration from CRA with enzyme.
import { configure, shallow, render, mount } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

// Starting with Enzyme 3 each React version is supported with a
// specific adapter.
import Adapter from 'enzyme-adapter-react-16';

// Add readable assertions for some common scenarios to all tests.
import 'jest-enzyme';

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

// Configure the React adapter for Enzyme.
configure({ adapter: new Adapter() });

// Inject the snapshot serializer for Enzyme.
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
