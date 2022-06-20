// Found this on Leetcode, I have no idea WTF this is or how its working, please walk me thorugh it
var MinStack = function() {
    this.stack=new Array();
    this.min=Infinity;
    console.log(Array)
};

/** 
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function(val) {
    this.min=Math.min(this.min, val);
    this.stack.push([val, this.min]);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min=this.stack.length>0? this.getMin(): Infinity;
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][0];
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1][1];
};


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */