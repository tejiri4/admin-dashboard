import { dashboardIcon, balancesIcon, paymentsIcon, transfersIcon, settingsIcon } from '../../assets/svg';
import DevelopersIcon from '../DevelopersIcon';

const menuDatas = [
  {
    title: 'Dashboard',
    icon: dashboardIcon,
    path: '/dashboard'
  },
  {
    title: 'Balances',
    icon: balancesIcon,
    path: '/balances'
  },
  {
    title: 'Payments',
    icon: paymentsIcon,
    path: '/payments'
  },
  {
    title: 'Transfers',
    icon: transfersIcon,
    path: '/transfers'
  },
  {
    title: 'Developers',
    icon: DevelopersIcon,
    path: '/developers'
  },
  {
    title: 'Settings',
    icon: settingsIcon,
    path: '/settings'
  }
];

export default menuDatas;