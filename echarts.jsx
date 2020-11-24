/**
 *
 * echarts(详细参考文档)
 *
 * */

import React from 'react';
import echarts from 'echarts';
// import light from 'echarts/src/theme/light';

export default class BarECharts extends React.Component {
    componentDidMount() {
        this.getBarCharts();
    }

    getBarCharts = () => {
        let myChart = echarts.init(
            document.getElementById(this.props.id),
            // 'light'// 这里设置主题
        );
        // 开始loading状态
        myChart.showLoading('default', {
            text: 'loading',
            color: '#c23531',
            textColor: '#000',
            maskColor: 'rgba(255, 255, 255, 0.8)',
            zlevel: 0
        });
        myChart.setOption({
            // title: {},// 标题
            // legend: {data:[this.props.name]},//图例说明
            // grid: {},// 直角坐标系内绘图网格
            // x轴相关设置
            xAxis: {
                position: 'bottom', // x轴位置
                // name: '坐标轴名', // 坐标轴名
                // nameTextStyle: {color: 'blue'},//坐标轴名样式
                type: 'category',// 坐标轴类型: category, time, value, log
                data: [1,2,3],// x轴数据,可以通过value，textStyle进行配置
                boundaryGap: true,//坐标轴两边留白策略
                // x坐标轴的刻度线
                axisTick: {alignWithLabel: true},
                // x坐标轴的标签
                axisLabel: {
                    interval: 0,// 坐标轴刻度标签的显示间隔，在类目轴中有效。
                    rotate: 0, //x轴数据的倾斜角度
                    // formatter: '{value}kg',//刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
                },
                // 坐标轴在 grid 区域中的分隔线。
                // splitLine: {},
                // 坐标轴线的相关设置
                axisLine: {symbol: ['none', 'arrow']},
                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                // splitArea: {},
            },
            // y轴相关设置
            yAxis: {
                type: 'value', // y轴的类型
                splitLine: {show: false},
                // max: value => value.max + 10, //设置y轴最大数据
                // splitNumber: 5,// 分割段数
                // interval: 7, //强制设置坐标轴分割间隔。
                // y轴的轴线
                axisLine: {symbol: ['none', 'arrow']},
                // y轴的标签
                axisLabel: {
                    formatter: '{value}%'
                }
            },
            // backgroundColor: 'yellow',//背景
            // textStyle: {color: 'yellow'},// 文本样式
            // tooltip: {show: true}, // hover提示框组件。
            // 可以提供多份数据，具体参考官网使用dataset管理数据
            // axisPointer: {}, //坐标轴指示器
            // dataZoom 滑动组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
            dataZoom: [
                {
                    id: 'dataZoomX',
                    xAxisIndex: [0],
                    filterMode: 'filter', // 设定为 'filter' 从而 X 的窗口变化会影响 Y 的范围。
                    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件 还有 inside型
                    start: 0, // 起始位置。
                    end: 50, // 结束位置。
                }
            ],
            // 柱子数据
            series: [{
                // name: '', // 柱子名称
                type: 'bar', // 图表类型
                color: '#4E79A7',// 柱状颜色
                data: [1,2,3], // 柱子数据
                // barWidth: '30%',
                barMaxWidth: 50,
                itemStyle: {
                    // hover状态
                    emphasis: {},
                    // 普通状态
                    normal: {
                        label: {
                            show: true, //开启显示柱子数据
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: '#4E79A7',
                                fontSize: 16
                            },
                            formatter: (params => (params.value / this.props.total * 100).toFixed(1) + '%')
                        }
                    }
                }
            }]
        });
        if (someText) {
            myChart.hideLoading(); // 结束loading动画
        }
    };

    render() {
        return (
            <div id={this.props.id} style={{width: 1000, height: 500}}/>
        );
    }
}