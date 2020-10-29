import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Chart } from 'primereact/chart';
import tinycolor from 'tinycolor2';
import _ from 'lodash';

const Main = styled.section`
  padding: 1rem 0;
`;

function PieChart(props) {

  const { datas, title, type } = props;

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
      labels: {
        fontColor: '#fff',
      },
    },
  };

  return (
    <Main>
      <Chart type={type} data={data} options={options} />
    </Main>
  )
}

PieChart.defaultProps = {
  title: '',
  type: 'pie', // doughnut
}

PieChart.propTypes = {
  title: propTypes.string,
  type: propTypes.string,
  datas: propTypes.array.isRequired,
}

export default PieChart;
