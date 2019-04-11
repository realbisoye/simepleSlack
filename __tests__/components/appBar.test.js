import 'react-native'
import React from 'react'
import Appbar from '../../app/components/appBar'

import renderer from 'react-test-renderer'

it('renders Appbar component correctly', () => {
  const rendered = renderer.create(<Appbar />)
  expect(rendered).toMatchSnapshot()
})
