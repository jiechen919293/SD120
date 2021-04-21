class File {
    constructor(fullName, contents) {
            this.fullName = fullName;
            this.filename = fullName.split('.')[0];
            this.contents = contents;
        }
        //methods here
    getContents() {

        return this.contents;
    }

    write(str) {
        this.contents += `${str}\n`;
    }

    gets() {
        let temp = '';
        let inpos = 0;
        inpos = this.contents.indexOf('\n');
        temp = this.contents.substring(0, inpos);
        this.contents = this.contents.substring(inpos, this.contents.length)
        if (temp === '') { return 'undefined' }
        return temp;
    }

    getc() {
        let temp = '';
        temp = this.contents.substring(0, 1);
        this.contents = this.contents.substring(1, this.contents.length)
        if (temp === '') { return 'undefined' }
        return temp;

    }

}


// const myFile = new File("hello.txt", "Hello World");
// console.log(myFile.fullName);

// const file1 = new File("hello_world.txt", "Hello World");
// console.log(file1.filename); // "hello_world"

// const file2 = new File("class.phptester.php", "");
// console.log(file2.filename); // "class.phptester" - the filename should be correctly identified even if the filename itself contains the '.' character
// const myFile1 = new File("hello.txt", "Hello World\nHello World");
// console.log(myFile1.getContents()); // "Hello World\nHello World"

// let myFile3 = new File("example.txt", "");

// console.log(myFile3.getContents()); // ""
// myFile3.write("Line 1");
// console.log(myFile3.getContents()); // "Line 1"
// myFile3.write("Line 2");
// console.log(myFile3.getContents()); // "Line 1\nLine 2"
// myFile3.write("Line 3");
// console.log(myFile3.getContents());
let myFile = new File("Lorem Ipsum.txt", "Lorem ip");
console.log(myFile.getc()); // "L"
console.log(myFile.getc()); // "o"
console.log(myFile.getc()); // "r"
console.log(myFile.getc()); // "e"
console.log(myFile.getc()); // "m"
console.log(myFile.getc()); // " "
console.log(myFile.getc()); // "i"
console.log(myFile.getc()); // "p"
// ... (many calls to myFile.getc())
console.log(myFile.getc());