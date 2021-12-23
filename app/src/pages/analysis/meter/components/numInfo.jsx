import { Card, Col, Row } from 'antd'
import style from '../style.less'

const NumInfo = ({
                   loading,
                   analysisData
                 }) => {
  return (
    <Card title={<span style={{ fontWeight: 'bold', letterSpacing: '1px' }}>学习实时情况</span>}>
      <div className={style.numInfo}>
        <Row style={{ paddingLeft: '16px' }}>
          <Col lg={4} md={4} sm={8} xs={12}>
            <div className={style.sub_title}>学习总人数</div>
            <div className={style.num}>{analysisData[0]}</div>
          </Col>
          <Col lg={4} md={{ span: 4, offset: 1 }} sm={8} xs={12}>
            <div className={style.sub_title}>平均答题正确率</div>
            <div className={style.num}>{analysisData[1]}%</div>
          </Col>
          <Col lg={4} md={{ span: 4, offset: 1 }} sm={8} xs={12}>
            <div className={style.sub_title}>平均学习时长</div>
            <div className={style.num}
                 style={{ display: 'flex', alignItems: 'center' }}>{analysisData[2]}
              <div
                style={{ fontSize: 26 }}>分钟
              </div>
            </div>
          </Col>
          <Col lg={4} md={{ span: 4, offset: 1 }} sm={8} xs={12}>
            <div className={style.sub_title}>员工平均成绩</div>
            <div className={style.num}
                 style={{ display: 'flex', alignItems: 'center' }}>{analysisData[3]}
              <div
                style={{ fontSize: 26 }}>分
              </div>
            </div>
          </Col>
          <Col lg={4} md={{ span: 4, offset: 1 }} sm={8} xs={12}>
            <div className={style.sub_title}>完成率</div>
            <div className={style.num}>{analysisData[4]}%</div>
          </Col>
        </Row>
      </div>
    </Card>
  )
}


export default NumInfo
