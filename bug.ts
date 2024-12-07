function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); // This will work fine

const myStringArray: string[] = ['a', 'b', 'c', 'd', 'e'];
printArray(myStringArray); // This will also work fine

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b', 3];
printArray(myMixedArray); // This will also work fine

// But this will throw an error:
const myObjectArray: {name: string, value: number}[] = [{name: 'a', value: 1}, {name: 'b', value: 2}];
printArray(myObjectArray); // Error: Argument of type '{ name: string; value: number; }[]' is not assignable to parameter of type 'any[]'.