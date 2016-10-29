import githubPagination from 'github-pagination'

export default ({ data, headers }) => {
  const meta = { pagination: githubPagination.parser(headers.link) }

  return { meta, data }
}
