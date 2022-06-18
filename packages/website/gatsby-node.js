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
      path: `/${edge.data.page_title.text.toLowerCase().replace(/\s/g, '-')}`,
      component: require.resolve(`./src/templates/NonEssential.js`),
      context: { name: edge.data.page_title.text },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/register/)) {
    page.matchPath = '/register/*'
    // Update the page.
    createPage(page)
  }
}
