exports.createPages = async ({ graphql, actions }) => {
  const query = await graphql(`
    query getMovieList {
      allPrismicNonEssential {
        nodes {
          data {
            page_title {
              text
            }
          }
        }
      }
    }
  `)

  query.data.allPrismicNonEssential.nodes.forEach(edge => {
    actions.createPage({
      path: `/${edge.data.page_title.text.toLowerCase().replace(/\s/g, "-")}`,
      component: require.resolve(`./src/templates/NonEssential.js`),
      context: { name: edge.data.page_title.text },
    })
  })
}
