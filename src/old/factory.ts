interface Shape {
  draw (): void;
}

class Circle implements Shape {
  draw() {
    console.log('Drawing a Circle')
  }
}
class Square implements Shape {
  draw() {
    console.log('Drawing a Square')
  }
}

class ShapeFactory {
  private static types: Record<string, () => Shape> = {
    circle: () => new Circle(),
    square: () => new Square()
  };

  static createShape(type: string): Shape {
    const shapeCreator = this.types[type];
    if (!shapeCreator) {
      throw new Error('Unknown type');
    }
    return shapeCreator();
  }
}

const circle = ShapeFactory.createShape('circle')
const square = ShapeFactory.createShape('square')

circle.draw()
square.draw()