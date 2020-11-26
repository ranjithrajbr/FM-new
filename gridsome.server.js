// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://firstmain-backend.herokuapp.com/workshops')

    const collection = actions.addCollection({
      typeName:'Event',
      path:'/form/:id'
    })
    for (const item of data) {
      console.log('api call')
      collection.addNode({
        id: item.id,
        path:'/event/'+item.id,
        title: item.Title,
        description:item.Description,
        image:item.image.url,
        date:item.date
      })
    }
  })
}
// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })

//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }
