import 'react-native'
import React from 'react'
import CommentBox from '../../app/components/commentBox'

import renderer from 'react-test-renderer'

const addMessage = jest.fn()
it('renders CommentBox component correctly', () => {
  const rendered = renderer.create(
    <CommentBox addMessage={addMessage} />
  )
  expect(rendered).toMatchSnapshot()
})
