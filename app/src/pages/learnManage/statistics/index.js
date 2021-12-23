import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { TableDropdown } from '@ant-design/pro-table'
import { Tag, Tooltip, Breadcrumb ,Icon} from 'antd'
import { useState, useRef,useEffect} from 'react'
import { getTableData , Sorter} from './api'
import { history } from 'umi'
import Sort from "./sort/index"
import { Link } from 'umi'
import styles from './index.less'

const Statistics = props => {

  const status = ['未开始', '进行中', '已完成']
  const colors = ['gray', 'volcano', 'green']
  const [Params, handleParams] = useState()
  const [paramsdata, saveParams] = useState()
  const [orderT,setorderT]=useState(true)
  const [orderB,setorderB]=useState(true)



const getUserList=async(orderby)=>{
   const data={...orderby}
   const res=await Sorter(data)
}


  const actionRef = useRef()
  const Ascendingorder= async()=>{
        setorderT(!orderT)
        setorderB(true)
        console.log("升序了",paramsdata);

    }
  const Descendingorder=()=>{
      setorderB(!orderB)
      setorderT(true)
      console.log("降序了",params);
  }
  const columns = [
    {
      title: '昵称',
      // search: true,
      // dataIndex: ['user_info', 'username'],
      dataIndex: 'username',
      render: v => v ? `${v}` : v,
    },
    {
      title: '邮箱',
      search: true,
      dataIndex: 'email',
      render: v => v ? `${v}` : v,
    },
    {
      title: '学习状态',
      dataIndex: 'learning_status',
      hideInSearch: true,
      render: v => <Tag color={colors[v]}>{status[v]}</Tag>
    },
    {
      title: '最新学习进度',
      dataIndex: 'last_learn_progress',
      render: v => v ? `${v}` : v,
      hideInSearch: true,
    },
    {
      title: '最新学习时间',
      dataIndex: 'last_learn_time',
      hideInSearch: true,
    },
    {
      title: (
        <div style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
           学习时长
           <div style={{display:"flex",flexDirection:"column"}}>
              <Tooltip placement="top" title="点击升序" >
                <span className={ orderT ? styles.triangleT : styles.triangleTL } onClick={()=>Ascendingorder()}></span>
                {/* <Sort /> */}
            </Tooltip>
              <Tooltip placement="top" title="点击降序">
                  <span className={ orderB ? styles.triangleB : styles.triangleBL } style={{marginTop:5}} onClick={()=>Descendingorder()}></span>
            </Tooltip>
           </div>
        </div>
      ),
      dataIndex: 'learn_duration',
      render: v => v ? `${v}` : v,
      hideInSearch: true,
      // sorter: (a, b) => a.learn_duration-b.learn_duration
    },
    {
      title: (<div style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
           正确率
           <div style={{display:"flex",flexDirection:"column"}}>
              <Tooltip placement="top" title="点击升序" >
                <span className={ orderT ? styles.triangleT : styles.triangleTL } onClick={(e)=>Ascendingorder(e,dataIndex)}></span>
            </Tooltip>
              <Tooltip placement="top" title="点击降序">
                    <span className={ orderB ? styles.triangleB : styles.triangleBL } style={{marginTop:5}} onClick={(e)=>Descendingorder(e)}></span>
            </Tooltip>
           </div>
        </div>),
      dataIndex: 'correct_rate',
      hideInSearch: true,
      render: v => {
         return v==="无数据"?`${v}`:`${v}%`
      },
      // sorter: (a, b) => a.correct_rate-b.correct_rate
    },
    {
      title: '终极测试得分',
      dataIndex: 'final_assessment',
      render: v => v ? `${v}` : v,
      hideInSearch: true,
      sorter: (a, b) => a.final_assessment-b.correct_rate
    },
    {
      title: '操作',
      hideInSearch: true,
      render: v => {
        return <a onClick={() => {
          history.push({
            pathname: '/learnManage/detail',
            query: {
              id: v.id
            }
          })
        }}>学习详情</a>
      }
    },
  ]
  const Pas={
    name:1111
  }
  return (
    <PageContainer
      header={{
        title: '', breadcrumbRender: ({ breadcrumb }, originBreadcrumb) => {
          return (
            <Breadcrumb>
              {breadcrumb.routes.map((item, index) => {
                return (
                  <Breadcrumb.Item key={item.path}>
                    <Link key={item.path}
                      to={index === 0 ? '/learnManage/statistics' : item.path}>{item.breadcrumbName}</Link>
                  </Breadcrumb.Item>
                )
              })}
            </Breadcrumb>
          )
        }
      }}>
      <ProTable
        columns={columns}
        search={true}
        actionRef={actionRef}
        params={Pas}
        request={async (params) => {
          console.log(params)
          const res = await Sorter()
          console.log(params)
          const paramsdata={...params}
          saveParams(paramsdata)
          return {
            data: res.data.data,
            success: true,
            total: res.data.total
          }
        }}
        rowKey="id"
        pagination={{ pageSize: 10, pageSizeOptions: [5, 10, 15, 20] }}
      />
    </PageContainer>
  )
}
export default Statistics
