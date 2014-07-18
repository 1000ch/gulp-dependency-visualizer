/**
 * Example class Baz
 *
 * @class Baz
 */
function Baz() {
  this.message = 'baz';
}

Baz.prototype.echo = function() {
  console.log(this.message);
};