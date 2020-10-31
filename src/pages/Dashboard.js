import React from 'react';
import { useSelector } from 'react-redux';
import {
  AiOutlineFire,
  AiOutlineTeam,
  AiOutlineSketch,
  AiOutlineRocket,
  AiOutlineDeploymentUnit,
  AiOutlineTrophy,
} from 'react-icons/ai';
import styled from 'styled-components';
import { Card } from 'primereact/card';
import _ from 'lodash';

import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

const Main = styled.section``;

const Crd = styled(Card)`
  position: relative;
  width: calc(100% / 4.4);

  svg {
    position: absolute;
    bottom: 1rem;
    right: 1.5rem;
    font-size: 4rem;
    opacity: 0.5;
  }
`;

const CrdChart = styled(Card)`
  margin-bottom: 1.5rem;
`;

function Dashboard() {
  const { members } = useSelector((state) => state.guild);
  const { classes, classIds } = useSelector((state) => state.poe);

  const allTotal = members.length;
  const officerTotal = members.filter((m) => m.memberType === 'Officer').length;
  const memberTotal = members.filter((m) => m.memberType === 'Member').length;
  const publicTotal = members.filter((m) => m.public === true).length;

  const currentLeagueMembers = _.chain(members)
    .filter((mb) => _.isArray(mb.characters))
    .filter((mb) => mb.characters.length > 0)
    .map((mb) => mb.characters.filter((c) => c.league !== '標準模式'))
    .filter((mb) => mb.length > 0)
    .value();

  const avgLevel = _.round(
    _.chain(currentLeagueMembers)
      .map((mb) => _.meanBy(mb, 'level'))
      .mean()
      .value()
  );

  const avgChallenge = _.round(
    _.chain(members)
      .filter((mb) => _.isNumber(mb.challenge))
      .meanBy('challenge')
      .value()
  );

  const classGroup = _.chain(currentLeagueMembers)
    .map((mb) => mb.map((m) => _.pick(m, ['class', 'classId'])))
    .flattenDeep()
    .map((mb) => ({
      class: _.get(
        classes.find((c) => c.class === mb.class),
        'name'
      ),
      classId: _.get(
        classIds.find((c) => c.classId === mb.classId),
        'name'
      ),
    }))
    .groupBy('class')
    .mapValues((v) => v.length)
    .map((value, label) => ({ value, label }))
    .orderBy('value', 'desc')
    .value();

  const classIdGroup = _.chain(currentLeagueMembers)
    .map((mb) => mb.map((m) => _.pick(m, ['class', 'classId'])))
    .flattenDeep()
    .map((mb) => ({
      class: _.get(
        classes.find((c) => c.class === mb.class),
        'name'
      ),
      classId: _.get(
        classIds.find((c) => c.classId === mb.classId),
        'name'
      ),
    }))
    .groupBy('classId')
    .mapValues((v) => v.length)
    .map((value, label) => ({ value, label }))
    .orderBy('value', 'desc')
    .value();

  const Cards = [
    { id: 1, title: '玩家總數', text: String(allTotal), icon: AiOutlineFire },
    {
      id: 2,
      title: '幹部人數',
      text: String(officerTotal || '?'),
      icon: AiOutlineSketch,
    },
    {
      id: 3,
      title: '成員人數',
      text: String(memberTotal || '?'),
      icon: AiOutlineTeam,
    },
    {
      id: 4,
      title: '公開帳號',
      text: String(publicTotal || '?'),
      icon: AiOutlineRocket,
    },
    {
      id: 5,
      title: '當季平均等級',
      text: String(avgLevel || '?'),
      icon: AiOutlineDeploymentUnit,
    },
    {
      id: 6,
      title: '當季平均挑戰',
      text: String(avgChallenge || '?'),
      icon: AiOutlineTrophy,
    },
    {
      id: 7,
      title: '當季平均挑戰',
      text: String(avgChallenge || '?'),
      icon: AiOutlineTrophy,
    },
    {
      id: 8,
      title: '當季平均挑戰',
      text: String(avgChallenge || '?'),
      icon: AiOutlineTrophy,
    },
  ];

  const renderCards = (card) => {
    const { id, title, text, icon: Icon } = card;
    return (
      <Crd key={`c-${id}`} className="p-mb-4" title={title} subTitle={text}>
        <Icon />
      </Crd>
    );
  };

  return (
    <Main>
      <div className="p-d-flex p-jc-md-between p-flex-wrap">
        {Cards.map((c) => renderCards(c))}
      </div>
      <div className="p-d-flex p-jc-md-between p-flex-wrap">
        <CrdChart style={{ width: '48.5%' }}>
          <PieChart
            width="100%"
            height="400px"
            type="doughnut"
            datas={classIdGroup}
            title="當季聯盟角色統計圖"
          />
        </CrdChart>
        <CrdChart style={{ width: '48.5%' }}>
          <PieChart
            width="100%"
            height="400px"
            type="doughnut"
            datas={classIdGroup}
            title="當季聯盟角色統計圖"
          />
        </CrdChart>
      </div>
      <CrdChart>
        <BarChart
          width="100%"
          height="500px"
          datas={classGroup}
          title="當季聯盟昇華(含未昇華)統計圖"
        />
      </CrdChart>
    </Main>
  );
}

export default Dashboard;
