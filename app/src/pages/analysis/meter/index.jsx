import { PageContainer } from '@ant-design/pro-layout'
import { Suspense, useState, useEffect } from 'react'
import { getRank,getChartsData } from './api'
import TabCard from './components/tabCard'
import NumInfo from './components/numInfo'
import { getAnalysis, getAnalysisData } from '@/pages/learnManage/detail/api'
import styles from './style.less'

const Statistics = () => {
  const [rankData, handleRankData] = useState([])
  const [chartData, handleChartData] = useState([])
  const [analysisData, handleAnalysisData] = useState([])
  const [loading, toggleLoading] = useState(true)
  const [type, handleType] = useState(1)



  const classType = num => {
    if (num === type) {
      return styles.currentDate
    } else {
      return ''
    }
  }




  useEffect(() => {

  }, [type])

  return (
    <PageContainer header={{ title: '', breadcrumb: false }}>
      <Suspense fallback={null}>
        <NumInfo loading={loading} analysisData={analysisData}/>
      </Suspense>

      <Suspense fallback={null}>
        <TabCard loading={loading}
                 rankData={rankData}
                 chartData={chartData}
                 classType={classType}
                 handleType={handleType}/>
      </Suspense>
    </PageContainer>
  )
}

export default Statistics
