import React from 'react'
import NoMatch from '../NoMatch'
import renderer from 'react-test-renderer'

describe('NoMatch', () => {
  it('renders without errors', () => {
    const tree = renderer.create(<NoMatch />)
    .toJSON

    expect(tree).toMatchSnapshot()
  })
})
