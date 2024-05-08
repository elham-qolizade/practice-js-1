let count = 0;
let row = "";
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        row += i + "";
        count++;
        if (count === 5) {
            console.log(row);
            row = "";
            count = 0;
        }
    }
}
if (row !== "") {
    console.log(row);

}