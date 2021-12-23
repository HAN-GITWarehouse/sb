import request from '../../../request'

export const getTableData = params => {
  return request('user-list', {
    method: 'get',
    params: {
      page: params.current,
      per_page: params.pageSize,
      ...params
    }
    
  })

}

export const Sorter=(params)=>{
    return request('user-list-sort',{
        method: 'get',
    })
}

