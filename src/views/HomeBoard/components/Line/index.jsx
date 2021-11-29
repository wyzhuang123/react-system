import React, {useEffect} from 'react'
import './index.less'
// 引入 ECharts 主模块
import * as echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';
import { LineChart } from 'echarts/charts';
echarts.use([LineChart]);
export default function Index() {
  useEffect(() => {
    window.addEventListener('load', () => {
      let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              data: [10, 22, 28, 23, 19],
              type: 'line',
              smooth: true
            }
          ]
        });
    })
  },[])

  return (
    <div>
      <div className="line-main-box" id="main">
      </div>

    </div>
  )
}
