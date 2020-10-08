// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const events = require('./src/data/test.json')

module.exports = function (api) {
  api.loadSource(store => {
    const contentType = store.addCollection({
      typeName: 'Events',

    })

    for (const item of events) {
      contentType.addNode({
      	id:item.id,
        date: item.date,
        time: item.time,
        title:item.title,
        image:item.image,
        para1:item.para1,
        para2:item.para2
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
