// Node Constructor
var Node = function(object) {
  for(var key in object)
  {
    this[key] = object[key];
  }
};

// NodeList Constructor
var NodeList = function(k) {
  this.nodes = [];
  this.k = k;
};

// add a node to the array
NodeList.prototype.add = function(node) {
  this.nodes.push(node);
}