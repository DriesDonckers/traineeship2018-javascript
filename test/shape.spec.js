import Shape from '../src/shape';
import Rectangle from '../src/rectangle';

describe('Shape', () => {
    it('move shape', () => {
        let shape = new Shape("Red", 5, 10);
        shape.move(10, 20);
        expect(shape.x).toBe(10);
        expect(shape.y).toBe(20);
    });

    it('change color', () => {
        let shape = new Shape("Red", 5, 10);
        shape.changeColor("Blue");
        expect(shape.getColor()).toEqual("Blue");
    });

    it('move rectangle', () => {
        let rect = new Rectangle("Red", 5, 10);
        rect.move(10, 20);
        expect(rect.x).toBe(10);
        expect(rect.y).toBe(20);
    });

    it('change rectangle color', () => {
        let rect = new Rectangle("Red", 5, 10);
        rect.changeColor("Blue");
        expect(rect.getColor()).toEqual("Blue");
    });

    it('rotate rectangle 90 Degrees', () => {
        let rect = new Rectangle("Red", 5, 10, 50, 100);
        rect.rotate90Degrees();
        expect(rect.width).toEqual(100);
        expect(rect.height).toEqual(50);
    });

    it('enlarge rectangle', () => {
        let rect = new Rectangle("Red", 5, 10, 50, 100);
        rect.enlarge(25, 50);
        expect(rect.width).toEqual(75);
        expect(rect.height).toEqual(150);
    });

    it('shrink rectangle', () => {
        let rect = new Rectangle("Red", 5, 10, 50, 100);
        rect.shrink(25, 50);
        expect(rect.width).toEqual(25);
        expect(rect.height).toEqual(50);
    });

    it('check if Square rectangle', () => {
        let rect = new Rectangle("Red", 5, 10, 50, 100);
        let square = new Rectangle("Red", 5, 10, 50, 50);
        rect.isSquare(25, 50);
        expect(rect.isSquare()).toBe(false);
        expect(square.isSquare()).toBe(true);
    });
    
});