import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isEqual, parseISO, formatISO } from 'date-fns';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

const Main = styled.div`
  .history-table {
    .p-datepicker {
      width: 400px;
    }

    > tbody > tr > td,
    > thead > tr > th {
      font-size: 14px;

      &:first-child {
        width: 50px;
        text-align: center;
      }

      &:nth-child(2) {
        width: 120px;
        text-align: center;
      }

      &:nth-child(3) {
        width: 160px;
      }

      &:nth-child(4) {
        width: 300px;
      }

      &:nth-child(5) {
        width: 170px;
        text-align: center;
      }

      &:nth-child(6) {
        text-align: center;
      }
    }
  }
`;

function List(props) {
  const { data } = props;

  const actions = [
    { label: 'ADD', value: 'added' },
    { label: 'REMOVE', value: 'removed' },
  ];
  const [action, setAction] = useState('');

  const leagues = ['標準聯盟', '劫盜聯盟'];
  const [league, setLeague] = useState('');

  const [characterName, setCharacterName] = useState('');
  const [item, setItem] = useState('');

  const [time, setTime] = useState('');

  const tbEl = useRef(null);

  const filterDate = (value, filter) => {
    try {
      const target = formatISO(new Date(filter), { representation: 'date' });
      const current = formatISO(parseISO(value), { representation: 'date' });
      return isEqual(new Date(target), new Date(current));
    } catch (e) {
      console.error(e);
      return true;
    }
  };

  const idBodyTemplate = (rowData, column) => column.rowIndex + 1;

  const characterNameFilter = (
    <InputText
      style={{ width: '100%' }}
      value={characterName}
      onChange={e =>
        tbEl.current.filter(e.target.value, 'characterName', 'contains') ||
        setCharacterName(e.target.value)
      }
    />
  );

  const itemFilter = (
    <InputText
      style={{ width: '100%' }}
      value={item}
      onChange={e =>
        tbEl.current.filter(e.target.value, 'item', 'contains') ||
        setItem(e.target.value)
      }
    />
  );

  const leagueFilter = (
    <Dropdown
      value={league}
      options={leagues}
      onChange={({ value }) =>
        tbEl.current.filter(value, 'league', 'equals') || setLeague(value)
      }
      className="p-column-filter"
      placeholder="All"
      showClear
    />
  );

  const actionFilter = (
    <Dropdown
      value={action}
      options={actions}
      onChange={({ value }) =>
        tbEl.current.filter(value, 'action', 'equals') || setAction(value)
      }
      className="p-column-filter"
      placeholder="All"
      showClear
    />
  );

  const timeFilter = (
    <Calendar
      value={time}
      onChange={({ value }) =>
        tbEl.current.filter(value, 'time', 'custom') || setTime(value)
      }
      dateFormat="yy-mm-dd"
      className="p-column-filter"
      placeholder="Date"
      showButtonBar
    />
  );

  const actionBodyTemplate = rowData => {
    const color =
      rowData.action === actions[0].value ? 'p-tag-info' : 'p-tag-danger';
    const { label } =
      rowData.action === actions[0].value ? actions[0] : actions[1];
    return (
      <span className={`p-tag ${color}`} style={{ width: '70px' }}>
        {label}
      </span>
    );
  };

  return (
    <Main>
      <DataTable
        tableClassName="history-table"
        ref={tbEl}
        value={data}
        paginator
        rows={10}
        loading={data.length === 0}
        header="Stash List"
        className="p-datatable-sm"
      >
        <Column field="#" header="#" body={idBodyTemplate}></Column>
        <Column
          field="league"
          header="League"
          filter
          filterElement={leagueFilter}
        ></Column>
        <Column
          field="characterName"
          header="Character Name"
          filter
          filterElement={characterNameFilter}
        ></Column>
        <Column
          field="item"
          header="Item"
          filter
          filterElement={itemFilter}
        ></Column>
        <Column
          field="time"
          header="Time"
          filter
          filterElement={timeFilter}
          filterFunction={(value, filter) => filterDate(value, filter)}
        ></Column>
        <Column
          field="action"
          header="Action"
          body={actionBodyTemplate}
          filter
          filterElement={actionFilter}
        ></Column>
      </DataTable>
    </Main>
  );
}

List.propTypes = {
  data: PropTypes.array,
};

List.defaultProps = {
  data: [],
};

export default List;
