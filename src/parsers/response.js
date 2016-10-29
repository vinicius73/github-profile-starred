import githubPagination from 'github-pagination'
import isEmpty from 'lodash.isempty'

export default ({ data, headers }) => {
  const pagination = (isEmpty(headers.link)) ? {} : githubPagination.parser(headers.link)
  const meta = { pagination }

  return { meta, data }
}
