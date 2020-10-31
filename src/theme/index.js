import 'primereact/resources/themes/vela-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import PrimeReact from 'primereact/utils';

import CharJS from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

CharJS.plugins.register({
  ChartDataLabels,
});

PrimeReact.ripple = true;

export const layout = {
  headerHeight: '80px',
  menuWidth: '260px',
};

export const color = {
  white: '#fefefe',
  gray: '#444',
  dark: '#17212F',
  dark2: '#1F2E3F',
  dark3: '#304562',
};

export const font = {
  globalFont: `'Microsoft JhengHei', 'Segoe UI', Helvetica, Arial, Helvetica, sans-serif;`,
};

export const screen = {
  screenXs: '480px',
  screenSm: '576px',
  screenMd: '768px',
  screenLg: '992px',
  screenXl: '1200px',
};

export default {
  ...color,
  ...font,
  ...screen,
  ...layout,
};
