import React from 'react'
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const underline = css`
  text-decoration: underline;
  `
const redText =css`
color: red
`

const Event = ({name,location,url,startDate,endDate}) => {
    return (
        <div>            
           <h1 css={underline} >{name}({location})</h1>
           <p css={redText} >Website :<a href={url}>{url}</a></p>

           <p>Starting date:{startDate}</p>
           <p>Ending Date :{endDate}</p>

           
        </div>
    )
}


export default Event
