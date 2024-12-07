function printArrayGeneric<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArrayGeneric(myArray); // Works fine

const myStringArray: string[] = ['a', 'b', 'c', 'd', 'e'];
printArrayGeneric(myStringArray); // Works fine

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b', 3];
printArrayGeneric(myMixedArray); // Works fine

const myObjectArray: {name: string, value: number}[] = [{name: 'a', value: 1}, {name: 'b', value: 2}];
printArrayGeneric(myObjectArray); // Works fine now!