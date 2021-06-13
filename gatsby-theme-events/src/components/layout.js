import React from 'react'
import { Box, Label, Input, Button ,Container,Heading} from 'theme-ui'

const Layout = ({children}) => {
    return (
        <div>
             <Box sx={{ mb: 4 }}>
    <Label htmlFor="search">Search</Label>
    
    {/* <Input id="search" name="search" {...props} /> */}
    <Button>Go</Button>
  </Box>

           
  <Heading as='h3'>Gatsby Theme</Heading>
  <Container>{children}</Container>
            
                 </div>
    )
}

export default Layout
