import React from 'react'
import {Link} from 'gatsby'
const EventList = ({events ,contentfull}) => {
    console.log(events ,contentfull)
    return (
        <div>
          <h1>Gatsby Events</h1>
          <ul>
              {events.map(event =>(

                  <li key={event.id}>
                      <strong>
                          <Link to={event.slug}>{event.name}</Link>
                      </strong>
                      
                      
                      </li>
              ))}
          </ul>

          <p><h1>ContentFull Data </h1>
            <table>
      <tr><td>ID</td><td>TITLE</td><td>WEBSITE</td></tr>      
      {contentfull.map(({ node, index }) => (
       <tr> 
        <td>
          {node.id}
        </td>
        <td>
          {node.name}
        </td>
        <td>
          {node.website}
        </td>
        </tr> 
      ))}      
    </table>    
           </p>
            
        </div>
    )
}

export default EventList
