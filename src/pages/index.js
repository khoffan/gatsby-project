import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function index({data: {directus}}){
  return (
    <div>
      <Layout pageTitle="Home Page">
        <h2>Movies faverite</h2>
        <p>{directus.Movies.map((movies)=>(
          <p key={movies.id}>{movies.titles}</p>
          
        ))}</p>

      </Layout>
    </div>
  )
}


export const query = graphql`
query{
  directus{
    Movies{
      id
      titles
    }
  }
} 
`


