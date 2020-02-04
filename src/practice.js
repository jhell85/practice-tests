export function Practice(number) {
    this.number = number
};
Practice.prototype.checkNumber= function() {
    if (this.number % 3 === 0) {
        return "divisable by 3";
    }  else if (this.number % 5 === 0) {
        return "divisable by 5"
    }
  
};