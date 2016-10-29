import githubPagination from 'github-pagination'

export default ({ data, header }) => {
  const meta = { pagination: githubPagination.parse(header.links) }

  return { meta, data }
}
