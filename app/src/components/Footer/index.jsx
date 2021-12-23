import { useIntl } from 'umi'
import { GithubOutlined } from '@ant-design/icons'
import { DefaultFooter } from '@ant-design/pro-layout'

export default () => {
  const intl = useIntl()
  const defaultMessage = '易念科技 版权所有2021 Humanrisk Inc.保留所有权利'
  const currentYear = new Date().getFullYear()
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={null}
    />
  )
};
