import { graphql , useStaticQuery} from 'gatsby'
import React from 'react'




const Contentful = ({data}) => {
    return (
        <div>
            Contentfull data
            {data}
            {/* <table>
      <tr><td>ID</td><td>TITLE</td><td>WEBSITE</td></tr>      
      {data.allContentfulBand.edges.map(({ node, index }) => (
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
    </table>     */}

           </div>
    )
}

export default Contentful


  
