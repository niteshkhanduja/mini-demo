import React from 'react'
import {graphql,useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import EventList from '../components/event-list'

const EventsTemplate = () => {
    const data  =  useStaticQuery(graphql`
    query MyQuery {
        allEvent(sort: {fields: startDate, order: ASC}) {
          nodes {
            id
            slug
            location
            name
            startDate
            endDate
            url
          }
        }
      
      allContentfulBand {
        edges {
          node {
            id
            name
            website
          }
        }
      }
    }

    `)

    const events = data.allEvent.nodes
    const contentFull = data.allContentfulBand.edges
    
    return (
       <Layout>
           <EventList events={events} contentfull={contentFull} />
           </Layout>
    )
}

export default EventsTemplate
