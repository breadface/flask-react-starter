import React from 'react'

const posts = [
  "say what you will",
  "What's happening in the react community"
]

class Home extends React.Component {
  render () {
    return (
      <div>
        <h3>List of Post</h3>
        {
          posts.map((post, index) => (
            <li key={index}>{post}</li>)
          )
        }
        <hr />
        <input placeholder="add new post" />
        <button>Add</button>
      </div>
    )
  }
}

export default Home
