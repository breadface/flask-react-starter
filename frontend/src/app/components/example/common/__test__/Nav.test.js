import React from 'react'
import Nav from './../Nav'
import renderer from 'react-test-renderer'

describe('Nav component', () => {
  it('renders without errors', () => {
    const tree = renderer.create(<Nav />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
