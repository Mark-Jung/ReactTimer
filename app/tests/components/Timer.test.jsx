var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
  });
  it('should start count when status is started', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleSetTimer();
    setTimeout(() => {
      expect(timer.state.count).toBe(3);
      expect(timer.state.timerStatus).toBe('started');
      done();
    }, 3001);
  });
  it('should pause count when status is paused', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');
    setTimeout(() => {
      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    }, 3001);
  });

});
