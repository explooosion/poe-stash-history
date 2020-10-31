import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Chart } from 'primereact/chart';
import tinycolor from 'tinycolor2';
import _ from 'lodash';

const Main = styled.section`
  margin: 0 auto;
  width: 100%;
`;

function BarChart(props) {
  const { width, height, datas, title, horizontal } = props;

  const colorBase = _.map(datas, () => tinycolor.random());
  const borderColor = _.map(colorBase, c => c.setAlpha(0.8).toRgbString());
  const backgroundColor = _.map(colorBase, c => c.setAlpha(0.3).toRgbString());

  const data = {
    labels: _.map(datas, cg => cg.label),
    datasets: [
      {
        borderWidth: 1,
        borderColor,
        backgroundColor,
        data: _.map(datas, cg => cg.value),
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: '#fff',
        font: {
          size: 13,
        },
      },
    },
    title: {
      display: true,
      text: title,
      fontSize: 20,
      fontColor: '#fff',
    },
    legend: {
      display: false,
    },
    scales: {
      stacked: true,
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            min: 0,
            fontColor: '#fff',
            fontSize: 14,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            fontColor: '#fff',
            fontSize: 16,
          },
        },
      ],
    },
  };

  return (
    <Main>
      <Chart
        style={{ margin: '0 auto' }}
        width={width}
        height={height}
        type={horizontal ? 'horizontalBar' : 'bar'}
        data={data}
        options={options}
      />
    </Main>
  );
}

BarChart.defaultProps = {
  width: '',
  height: '',
  title: '',
  horizontal: false,
};

BarChart.propTypes = {
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  title: propTypes.string,
  horizontal: propTypes.bool,
  datas: propTypes.array.isRequired,
};

export default BarChart;
