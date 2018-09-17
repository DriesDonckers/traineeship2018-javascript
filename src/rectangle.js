import Shape from "./shape";

export default class Rectangle extends Shape {

    constructor(color, x, y, width, height){
        super(color, x, y);
        this._width = width;
        this._height = height;
    }

    get width () { return this._width }

    set width (width) { this._width = width }

    get height () { return this._height }

    set height (height) { this._height = height }

    rotate90Degrees(){ //rotate the Rectangle 90°, void
        let currentWidth = this.width;
        this.width = this.height;
        this.height = currentWidth;
    } 

    enlarge(additionalWidth, additionalHeight){ //enlarge the Rectangle, void
        this.width += additionalWidth;
        this.height += additionalHeight;
    }
    
    shrink(minusWidth, minusHeight){ //shrink the Rectangle, void
        this.width -= minusWidth;
        this.height -= minusHeight;
    }

    isSquare(){ //tells if the rectangle is a square, boolean
        return this.width === this.height;
    } 

}