module.exports =({contentPath ='data',basepath='/'})=>({
    plugins: [
        `gatsby-plugin-emotion`,
      
        // {
        //     resolve: `gatsby-plugin-theme-ui`,
        //     // options: {
        //     //   preset: require('./src/theme'),
        //     // },
        //   },
       
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `ylplq51jlv18`, // or process.env.CONTENTFUL_SPACE_ID
                accessToken: `KBvFugvNxDUWslt2SDiJcmFI-wS1Gld52IdzHMKROF4`,
            },
          },

        {
            resolve:'gatsby-source-filesystem',
            options:{
                path:contentPath
            }
        },
        {
            resolve:'gatsby-transformer-yaml',
            options:{
                typeName: 'Event'
            }
        }
    ]
})