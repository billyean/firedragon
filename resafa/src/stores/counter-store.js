import constants from '../contants/counter-constants';
import dispatcher from '../dispatcher/dispatcher';
import EventEmitter from 'events';

var _count = 0;

function incrementCount(i) {
    _count = _count + i;
}

function getCount() {
    return _count;
}

let CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCount: getCount,

    emitChange: function() {
        this.emit('CHANGE_EVENT');
    },

    addChangeListener: function(callback) {
        this.addListener('CHANGE_EVENT', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('CHANGE_EVENT', callback);
    }
});

export default CounterStore;

dispatcher.register((action) => {
  switch(action.type) {
      case constants.INCREMENT:
          incrementCount(action.inc);
          CounterStore.emitChange();
          break;
      default:
          break;
  }
});