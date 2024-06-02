const container = document.querySelector('.container');
// creates a new div referenced in the variable 'div'

// for (i = 1; i <= 4; i++ ){
//     const row = document.createElement("div");
//     row.className="row";
//     container.appendChild(row);
//     for (let j=1; j<=4; j++){
//         const div = document.createElement("div");
//         div.className="box";
//         row.appendChild(div);
//         console.log("Added: "+ j);
//     }
// }


function createGrid(dimension) {
    const container = document.querySelector('.container');
    // Clear the container safely
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const rowHeight = 960 / dimension; // Calculate row height based on container height
    //container.style.setProperty('--row-height', `${rowHeight}px`); // Set CSS variable for row height

    for (let i = 1; i <= dimension; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.style.height = `${rowHeight}px`
        container.appendChild(row);
        for (let j = 1; j <= dimension; j++) {
            const box = document.createElement("div");
            box.className = "box";
            box.style.height = `${rowHeight}px`;
            box.style.width = `${rowHeight}px`;
            row.appendChild(box);
        }
    }
}

function addOne(num) {
    return num + 1;
  }

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

  
// Call the function to create a grid, e.g., 10x10
createGrid(100);
