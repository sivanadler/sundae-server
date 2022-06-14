// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './mocks/server.js';

//Establish API Mocking before any tests
beforeAll(() => server.listen())

//Reset any request handlers that we may add during the tests,
//so they dont affect other tests
afterEach(() => server.resetHandlers())

//Clean up after tests are finished
afterAll(() => server.close())