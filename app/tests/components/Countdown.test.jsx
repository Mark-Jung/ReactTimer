var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');


describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });
  });
  it('should not go below 0', (done) => {
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(1);

    setTimeout(() => {
      expect(countdown.state.count).toBe(0);
      done();
    }, 3001)
  });
  it('should freeze countdown when paused', (done) => {
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(3);
    countdown.handleStatusChange('paused');

    setTimeout(() => {
      expect(countdown.state.count).toBe(3, 'deos not freeze count');
      expect(countdown.state.countdownStatus).toBe('paused', 'deos not change status to pauseed');
      done();
    }, 1001);
  });
  it('should reset count when canceled', (done) => {
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(3);
    countdown.handleStatusChange('stopped');

    setTimeout(() => {
      expect(countdown.state.count).toBe(0, 'deos not reset count');
      expect(countdown.state.countdownStatus).toBe('stopped', 'deos not change status to stopped');
      done();
    }, 1001);
  });


});
