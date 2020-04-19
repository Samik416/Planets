class Planet{
constructor(x, y, r){
    var options ={
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.x = x;
    this.y = y;
    this.r = r;
}
display(){
    ellipse(this.x, this.y, this.r, this.r);
}
}