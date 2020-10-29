import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Chart } from 'primereact/chart';
import tinycolor from 'tinycolor2';
import _ from 'lodash';

const Main = styled.section`
  padding: 1rem 0;
`;

function BarChart(props) {

  const { datas, title, horizontal } = props;

  const colorBase = _.map(datas, () => tinycolor.random());
  const borderColor = _.map(colorBase, c => c.setAlpha(0.8).toRgbString());
  const backgroundColor = _.map(colorBase, c => c.setAlpha(0.2).toRgbString());

  const data = {
    labels: _.map(datas, cg => cg.label),
    datasets: [
      {
        borderWidth: 2,
        borderColor,
        backgroundColor,
        data: _.map(datas, cg => cg.value),
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: title,
      fontSize: 22,
      fontColor: '#fff',
    },
    legend: {
      display: false,
    },
    scales: {
      stacked: true,
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          min: 0,
          fontColor: '#fff',
          fontSize: 14,
        },
      }],
      yAxes: [{
        ticks: {
          min: 0,
          fontColor: '#fff',
          fontSize: 16,
        },
      }],
    },
  };

  return (
    <Main>
      <Chart type={horizontal ? 'horizontalBar' : 'bar'} data={data} options={options} />
    </Main>
  )
}

BarChart.defaultProps = {
  title: '',
  horizontal: false,
}

BarChart.propTypes = {
  title: propTypes.string,
  horizontal: propTypes.bool,
  datas: propTypes.array.isRequired,
}

export default BarChart;
