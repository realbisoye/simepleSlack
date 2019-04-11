import 'react-native'
import React from 'react'
import Main from '../../app/components/main'

import renderer from 'react-test-renderer'

it('renders Main component correctly', () => {
  const rendered = renderer.create(<Main />)
  expect(rendered).toMatchSnapshot()
})
