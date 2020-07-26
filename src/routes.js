import React from 'react';
import HomePage from './pages/index';
import RankingsPage from './pages/rankings';
import TracksPage from './pages/tracks';

const routes = [
  { path: '/', key: 'root', exact: true, component: () => <HomePage /> },
  {
    path: '/rankings',
    key: 'rankings',
    exact: true,
    component: () => <RankingsPage />,
  },
  {
    path: '/tracks',
    key: 'tracks',
    exact: true,
    component: () => <TracksPage />,
  },
];

export default routes;
