import React from 'react';
import { Home, Movie, Actors, Directors, ErrorPage } from './pages';

const routes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/movie/:id',
    Component: Movie,
  },
  {
    path: '/actors',
    Component: Actors,
  },
  {
    path: '/directors',
    Component: Directors,
  },
  {
    Component: ErrorPage,
  },
];

export default routes;

