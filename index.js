//
// ### Exercise 1:
//
// var name = "Christian";
// var id = "12234";
// var address = "123 Code Street";
//
// console.log(`
// My name is ${name}
// My id is ${id}
// My address is ${address}
//

//Ex2

// var contestant = "1_M_l337!";
// var score = "9001";
//
// console.log(`
//     Congragiulations
//             ${contestant}
//     Your new score is:
//             ${score}`);
//
//






// ### Exercise 3:

// Using the provided Object literal, create a template string  and iterate through the Parents and Children and print them in a format sililar to the following

    let parents =
        //This is an array for brackets with arrays
        [
            {
                name: "Mr. Bill",
                children: ["Sluggo", "Spot", "Linda"]
            },
            {
                name: "Nancy R.",
                children: ["Stan"]
            },
            {
                name: "J. Page",
                children: ["Mick", "Robert", "John", "Kenny"]
            },
            {
                name: "Randolh H.",
                children: ["Biffy", "Carl Jr."]
            }
        ];

for(let i=0;i<parents-length;i++)
{
    alert("hewwo " + parents[i])
}









































// let i1 = parents[0].children[0];
// let i2 = parents[0].children[1];
// let i3 = parents[0].children[2];
//
// let n1 = parents[1].children[0];
//
// let x1 = parents[2].children[0];
// let x2 = parents[2].children[1];
// let x3 = parents[2].children[2];
// let x4 = parents[2].children[3];
//
// let q1 = parents[0].children[0];
// let q2 = parents[0].children[1];
// let q3 = parents[0].children[2];
//
//
//
// let temp1 = parents[0].name;
// let temp2 =  parents[1].name;
// let temp3 = parents[2].name;
// let temp4 =  parents[3].name;
//
//
//
//
//
//     console.log(`${temp1}
//  ${i1}
//  ${i2}
//  ${i3}
// `);
//
//
//     console.log(`${temp2}
//  ${n1}
//  `);
//
//     console.log(`${temp3}
//  ${x1}
//  ${x2}
//  ${x3}
//  ${x4}
// `);
//
//
//     console.log(`${temp4}
//  ${q1}
//  ${q2}
//  ${q3}
// `);

// Use the Object literal data below. You will need to iteratethrough each object and print it out with a template.
//
//     ### Challenge
// Put all the printing logic in a separate function and call the function for each Parent so they and their Children print.