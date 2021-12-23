import { Card, Col, DatePicker, Row, Tabs } from 'antd'
import { Column, Line } from '@ant-design/charts'
import styles from '../style.less'

const { RangePicker } = DatePicker
const { TabPane } = Tabs


const TabCard = ({
                   loading,
                   chartData,
                   rankData,
                   classType,
                   handleType
                 }) => {
console.log(" chartData -----------", chartData)

  const config = {
    data:chartData,
    isStack: true,
    xField: 'key',
    yField: 'value',
    xAxis: {
       label: {
        autoRotate: true,
        autoHide: false
      },
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle', // 'top', 'bottom', 'middle'
    },
    interactions: [
      {
        type: 'active-region',
        enable: true,
      },
    ],
    appendPadding:[0,0,100,0],
    seriesField: 'key',
    color: ['#d62728', '#2ca02c', '#48BEBE',"#DC143C","#BC8F8F","#008B8B","#FF4500","#008080","#00BFFF"],
    columnBackground: {
      style: {
        fill: 'rgba(0,0,0,0.1)',
      },
    }

  };
  const timeFilter = time => {
    const h = Math.floor(time / 3600) < 10 ? '0' + Math.floor(time / 3600) : Math.floor(time / 3600)
    const m = Math.floor((time / 60 % 60)) < 10 ? '0' + Math.floor((time / 60 % 60)) : Math.floor((time / 60 % 60))
    const s = Math.floor((time % 60)) < 10 ? '0' + Math.floor((time % 60)) : Math.floor((time % 60))
    return `${h}:${m}:${s}`
  }

  return (
    <Card
      style={{ marginTop: 20 }}
      bordered={false}
      bodyStyle={{
        padding: 0,
      }}
    >
      <div className={styles.salesCard}>
        <Tabs
          // tabBarExtraContent={
          //   <div className={styles.salesExtraWrap}>
          //     <div className={styles.salesExtra}>
          //       <a className={classType(1)} onClick={() => handleType(1)}>
          //         今日
          //       </a>
          //       <a className={classType(2)} onClick={() => handleType(2)}>
          //         本周
          //       </a>
          //       <a className={classType(3)} onClick={() => handleType(3)}>
          //         本月
          //       </a>
          //       <a className={classType(4)} onClick={() => handleType(4)}>
          //         本年
          //       </a>
          //     </div>
          //     <RangePicker
          //       onChange={(time, string) => {
          //         handleType(string.join(','))
          //       }}
          //       style={{
          //         width: 256,
          //       }}
          //     />
          //   </div>
          // }
          // size="large"
          // tabBarStyle={{
          //   marginBottom: 24,
          // }}
        >
          <TabPane tab="学习时长" key="learnTime">
            <Row>
              <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.salesBar}>
                  <div className={styles.salesBarTitle}>课程学习趋势 <span>（单位：分钟）</span></div>
                  <Column {...config}/>
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.salesRank}>
                  <h4 className={styles.rankingTitle}>考试成绩排名</h4>
                  <ul className={styles.rankingList}>
                    <li className={styles.column}>
                      <span style={{ flex: 2 }}>昵称</span>
                      <span>成绩</span>
                      <span>用时</span>
                    </li>
                    {rankData.map((item, i) => (
                      <li key={i}>
                      <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
                        {i + 1}
                      </span>
                        <span className={styles.rankingItemName} title={item.username}>
                        {item.username}
                      </span>
                        <span className={styles.rankingItemTitle}>
                        {item.score}分
                      </span>
                        <span className={styles.rankingItemTitle} title={item.answer_time}>
                        {item.answer_time}
                      </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  )
}

export default TabCard
