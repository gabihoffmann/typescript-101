// creating basic types

// primitives

// boolean (true | false)
let isBoolean: boolean;
isBoolean = true;

// string ( 'text', "text", `text`)
let isString: string;
isString = `olá`;

// number (int, float, hex, binary)
let isNumber: number;
isNumber = 0xff0;

// array
let isArray: number[];
isArray = [0, 1, 2, 3, 4];

let anotherArray: Array<number>;
anotherArray = [4, 3, 2, 1, 0, 1];

// tuple
let isTuple: [number, string, boolean];
isTuple = [1, "text", true];

// enum
enum isEnum {
  first = 1,
  second = 2,
}

// any
// !!!Warning, this not cool
let anything: any;
anything = 0;
anything = "a";
anything = [1, 2, 3];
anything = true;

// void
function willReturnVoid(): void {
  console.log("this function does not return value");
}

// never
function error(): never {
  throw new Error("error");
}

// object
let isObject: object;
isObject = {
  key: "value",
};

// Type Inference
// TS used inference to provide type information
let newString = "defined string";
newString = "new string value";
/**
 * Type 'number' não pode ser atribuído ao tipo 'string'
 */
// newString = 1
