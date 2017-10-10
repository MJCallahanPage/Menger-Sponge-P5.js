// Box class
function Box(x,y,z,w) {
    
    this.show = function() {
        push();
        translate(x,y,z);
        box(w);
        pop();
    };
    
    this.subDivide = function () {
        let boxes = [];
        let newW = w/3;
        for(i = -1; i<2; i++) {
            for(j=-1;j<2;j++) {
                for(k=-1;k<2;k++) {
                    if(abs(i) + abs(j) + abs(k)>1){
                        boxes.push(new Box(x+i*newW,y+j*newW,z+k*newW,newW))
                    }
                }
            }
        }
        return boxes;
    }
};