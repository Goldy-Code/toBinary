function toBI() {
    let numbers = prompt('give any NUMBER');
    let str = '';
    for (let i = 0; i < Infinity; i++) {
        if (numbers % 2 == 1) {
            numbers = Math.floor(numbers / 2);
            str += 1;
        }
        if (numbers == 0) {
            str = str.split('').reverse().join('');
            return console.log(str);
        }
        if (numbers % 2 == 0) {
            numbers = Math.floor(numbers / 2);
            str += 0;
        }
    }
}
toBI()

