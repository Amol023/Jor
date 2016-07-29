import React from 'react';
import { mount, shallow} from 'enzyme';
import expect from 'expect';


// const TestUtils = require('react/lib/ReactTestUtils');

import Test from "../public/js/app.jsx";

describe('First test please work?', function () {
	it('should do something', function() {
			const wrapper = mount(<Test />);
			expect(wrapper).toExist();
	})
})