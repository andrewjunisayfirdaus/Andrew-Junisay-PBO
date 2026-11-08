class Book {
    title: string;
    pages: number;
    author: string;
    type: string;
    stock: number;

  constructor (title: string, pages: number, author:string, type: string, stock: number) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.type= type;
    this.stock = stock;


}

borrow() {
    if(this.stock ===0){
        throw new Error("Book is out of stock")
    }

    this.stock--;
    console.log(
        `You have borrowed "${this.title}", Remaining stock ${this.stock}`,
    )

}

returnBook() {
    this.stock++;
    console.log(
        `kamu telah mengembalikan "${this.title}",Remaining stock $this.stock ${this.stock}`,
        
    )
}

}

    const novelBook = new Book("Laskar Pelangi", 300, "Andrea Hirata", "Novel",20);
    const comiBook = new Book("Naruto", 500, "Mashasi Kisimito", "Novel",20);

    novelBook.borrow()
    novelBook.returnBook()



