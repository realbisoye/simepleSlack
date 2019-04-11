import 'react-native'
import React from 'react'
import Comment from '../../app/components/comment'
import renderer from 'react-test-renderer'

it('renders comment component correctly', () => {
  const time = new Date('April 6, 2019 23:15:30 GMT+00:00').toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
  const rendered = renderer.create(
    <Comment message={'Hi'} time={time}/>
  )
  expect(rendered).toMatchSnapshot()
})
