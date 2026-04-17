// // let a:number=10;
// // let b:number=20;

// // console.log(a+b);

// let name1: string = "sathish";
// let age: number = 25;
// let result: boolean = true;

// let bathes: string[] = ["jan", "feb", "mar"];
// let amount: number[] = [34, 56, 67, 76];

// let details: {
//     name: string, age: number, email: string
// } = {
//     name: "loga", age: 18, email: "sathish@gmail.com"
// }

// // any
// let personName: any="loga";
// personName=123;
// personName=true;

// // Union Type--> |
// let pName: string | number | number[]= "loga";
// pName=232;
// pName=true;
// pName=[45,67,78];

// // Litral Type
// let pName1: "loga" | 123=123;
// pName1="sathish";
// pName1="loga";

// function stuDetails(name: string, id: number, address: { Street: string, StreetNo?: number }, school: string = "MHSS"): void {
//     console.log(`${name}---${id}---${address.Street}---${address.StreetNo}----${school}`);
// }
// stuDetails("Loga", 2323, { Street: "gandhi", StreetNo: 3456 });

let a = "loga";

console.log(a.search("o"));