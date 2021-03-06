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

function PieChart(props) {
  const { width, height, datas, title, type } = props;

  const colorBase = _.map(datas, () => tinycolor.random());
  const borderColor = _.map(colorBase, (c) => c.setAlpha(0.8).toRgbString());
  const backgroundColor = _.map(colorBase, (c) =>
    c.setAlpha(0.3).toRgbString()
  );

  const data = {
    labels: _.map(datas, (cg) => cg.label),
    datasets: [
      {
        borderWidth: 1,
        borderColor,
        backgroundColor,
        data: _.map(datas, (cg) => cg.value),
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
        textAlign: 'center',
        formatter: (v, { dataIndex }) => `${v}\n${data.labels[dataIndex]}`,
      },
    },
    title: {
      display: true,
      text: title,
      fontSize: 20,
      fontColor: '#fff',
      padding: 20,
    },
    legend: {
      display: false,
    },
  };

  return (
    <Main>
      <Chart
        style={{ margin: '0 auto' }}
        width={width}
        height={height}
        type={type}
        data={data}
        options={options}
      />
    </Main>
  );
}

PieChart.defaultProps = {
  width: '',
  height: '',
  title: '',
  type: 'pie', // doughnut
};

PieChart.propTypes = {
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  title: propTypes.string,
  type: propTypes.string,
  datas: propTypes.array.isRequired,
};

export default PieChart;
