Lists = new Meteor.Collection('lists');

// Calculate a default name for a list in the form of 'List A'
Lists.defaultName = function() {
    var defaultAccountName = '支付宝 ';
    var nextLetter = 'A', nextName = defaultAccountName + nextLetter;
  while (Lists.findOne({name: nextName})) {
    // not going to be too smart here, can go past Z
    nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
    nextName = defaultAccountName + nextLetter;
  }

  return nextName;
};

Todos = new Meteor.Collection('todos');