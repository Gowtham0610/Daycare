import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { ScheduleVisit } from './pages/ScheduleVisit';
import { AdminPortal } from './pages/AdminPortal';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/schedule-visit',
    Component: ScheduleVisit,
  },
  {
    path: '/admin',
    Component: AdminPortal,
  },
]);
