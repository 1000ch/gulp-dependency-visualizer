//@depend baz.js

/**
 * Example class Bar
 *
 * @class Bar
 */
function Bar() {
  this.message = 'bar';
}

Bar.prototype.echo = function() {
  console.log(this.message);
};