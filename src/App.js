import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ARTISTS_QUERY = gql`
  query {
    artists {
      id
      name
    }
  }
`


class App extends Component {
  render() {
    return (
      <Fragment>
        <Query query={ARTISTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading..</div>
            if (error) return <div>Error... {error.message}</div>
            const { artists } = data
            
            return artists.map(artist => (
              <div key={artist.id}>{artist.name}</div>
            ))
          }}
        </Query>
      </Fragment>
    )
  }
}

export default App
