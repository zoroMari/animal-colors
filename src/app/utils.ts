// @ts-nocheck



// Any
const somevar: any = 123;


// Primitives
const number: number = 4;
const number1: Number = 4;
const string: string = 'gkjlkj';
const boolean: boolean = true;



// Objects
const obj: object = { };
const obj1: Object = { };
const obj2: Record<string, IAnimal> = { };

interface IAnyObject<PropertyValueType = any> {
  [key: string]: PropertyValueType;
}

interface ITest {
  name: string;
}
const somePropName = 'age';
const obj4 = { name: 'asd', [somePropName]: 123 };
const anyObject: IAnyObject<number> = { asdasdasdad: 1 };
const anyObject12: IAnyObject = { asdasdasdad: 'asd', asd: 123 };



// Arrays
const array: (string | number)[] = [];
const arrayAny: any[] = [];
const array1: Array<IAnimal & ITest> = [];

// -- subtype for Array: tuple
const tuple: [string, number] = ['1', 1];




// Interface
interface IAnimal {
  name: string;
  age: SomeTypes;
  optionalType?: string;
}

interface IAnimalConfig {
  list: Animal[];
  breedsRoot: HTMLElement;
  tabBtn: HTMLButtonElement;

  state?: FilterState;
  filterKeys?: string[];
  filtersRoot?: HTMLElement;
}

interface IAnimalsMapping {
  cats: IAnimalConfig;
  dogs: IAnimalConfig;
  rats: IAnimalConfig;
  favorites: IAnimalConfig;
}


interface IName {
  name: string;
}
interface IAge {
  age: number;
}
interface IAgeAndName extends IName, IAge {
  additionalField: boolean;
}


const ageAndName: IAgeAndName = {
  name: '213',
  age: 2,
  additionalField: true,
}



// Type
type SomeTypes = string | number;

type AgeAndName = IAge & IName & {
  additionalField: boolean;
};













class Animal {
  name: string;
  age: number;
}

const animal = new Animal();

// const animal: Animal;
// animal.
const cat1: Animal = {
  name: 'PPuksa',
  age: 7,
}

const cat: IAnimal = {
  name: 'Puksa',
  age: '7',
}






