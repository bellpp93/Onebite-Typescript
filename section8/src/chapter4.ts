/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal1: ColoredAnimal = "black-cat";
const coloredAnimal2: ColoredAnimal = "black-chicken";
const coloredAnimal3: ColoredAnimal = "black-dog";
const coloredAnimal4: ColoredAnimal = "green-cat";
const coloredAnimal5: ColoredAnimal = "green-chicken";
const coloredAnimal6: ColoredAnimal = "green-dog";
const coloredAnimal7: ColoredAnimal = "red-cat";
const coloredAnimal8: ColoredAnimal = "red-chicken";
const coloredAnimal9: ColoredAnimal = "red-dog";
