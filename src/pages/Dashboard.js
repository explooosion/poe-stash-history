import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';

import theme from '../theme';

const Main = styled.section`
`;

const Crd = styled(Card)`
  width: calc(100% / 4.4);
`;

function Dashboard() {

  const { members } = useSelector(state => state.guild);

  const lineStylesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#42A5F5',
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderDash: [5, 5],
        borderColor: '#66BB6A',
      },
      {
        label: 'Third Dataset',
        data: [12, 51, 62, 33, 21, 62, 45],
        fill: true,
        borderColor: '#FFA726',
        backgroundColor: 'rgba(255,167,38,0.2)',
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: theme.white,
      },
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: theme.white,
        },
      }],
      yAxes: [{
        ticks: {
          fontColor: theme.white,
        },
      }],
    },
  };

  return (
    <Main>
      <div className="p-d-flex p-jc-md-between">
        <Crd className="p-mb-2" title="總人數" subTitle={String(members.length)}>
          Content
        </Crd>
        <Crd className="p-mb-2" title="Title" subTitle="SubTitle">
          Content
        </Crd>
        <Crd className="p-mb-2" title="Title" subTitle="SubTitle">
          Content
        </Crd>
        <Crd className="p-mb-2" title="Title" subTitle="SubTitle">
          Content
        </Crd>
      </div>
      <div className="card" style={{ margin: '3rem' }}>
        <Chart type="line" data={lineStylesData} options={options} />
      </div>
    </Main>
  )
}

export default Dashboard;
