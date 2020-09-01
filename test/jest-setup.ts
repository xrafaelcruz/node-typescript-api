import { SetupServer } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();

  // supertest create a dev server
  global.testRequest = supertest(server.getApp());
});
