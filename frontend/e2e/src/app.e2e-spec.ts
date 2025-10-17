import { browser, by, element } from 'protractor';

describe('My Angular Quarkus App', () => {
  it('should display welcome message', () => {
    browser.get('/');
    expect(element(by.css('app-root h1')).getText()).toEqual('Welcome to My Angular Quarkus App!');
  });
});