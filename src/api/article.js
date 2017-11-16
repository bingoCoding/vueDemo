import fetch from '@/utils/fetch'

export function fetchList(query) {
  return fetch({
    base_uri:"https://api-dev",
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle() {
  return fetch({
    base_uri:"https://api-dev",
    url: '/article/detail',
    method: 'get'
  })
}

export function fetchPv(pv) {
  return fetch({
    base_uri:"https://api-dev",
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

