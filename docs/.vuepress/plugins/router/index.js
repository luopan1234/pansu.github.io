const routePfx = '/passages/'

module.exports = {
  extendPageData($page) {
    const { frontmatter } = $page

    if (
      !frontmatter
      || JSON.stringify(frontmatter) === '{}'
      || !frontmatter.permalink
      || frontmatter.single === true
    ) {
      return
    }
    frontmatter.permalink = `${routePfx}${frontmatter.permalink}`
  }
}
