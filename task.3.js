
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     genre: "Programming",
//     pageCount: 176,
//     isRead: true,
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Fiction",
//     pageCount: 281,
//     isRead: false,
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     genre: "Fiction",
//     pageCount: 180,
//     isRead: true,
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     genre: "Dystopian",
//     pageCount: 328,
//     isRead: false,
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     genre: "Fantasy",
//     pageCount: 310,
//     isRead: true,
//   },
// ];

//1. Fiction tipindeki kitablari consola yazdirin(filter)
// const record=(arr) =>{
//     const filtered =arr.filter(
//       (item) =>item.genre === "Fiction");
//       return  filtered;
//   };
//   console.log(record(books ));


  //2. Toplam seyfe sayi 200'den chox olan kitapların sayini tapin.
  // const record=(arr) =>{
  //   const filtered =arr.filter(
  //     (item) =>item.pageCount >= 200).length;
  //     return  filtered;
  // };
  // console.log(record(books ));



  //task 3 Kitapların umumi seyfe sayini hesablayın.
  // const reduce =(arr) =>{
  //   const sum=arr.reduce((acc,item) => acc + item.pageCount,0);
  //   return sum;
  // };
  // console.log(reduce(books));


  // 4.verilen bir kitabın oxunma veziyyetini yenileyin.
   
    // const isRead = (title,changes)  =>{
    //   const findBook=books.find ((item) => item.title ===title);
    //   if(findBook){
    //     findBook.isRead=changes;
    //   }
    //   return findBook;
    // };
    // console.log(isRead("The Hobbit",true));

    // task 5 Mueyyen bir kitabi araydan silin
    // const arr =books.findIndex(book => book.title === " To Kill a Mockingbird");
    // if(arr !== -1){
    //   books.splice(arr,1);
    // };
    // console.log(books);


    //  6 Fiction olan kitablarin ad ve authordan ibaret teze objectden ibaret arr yaradin.  
      //  let fictionList =books.filter(book => {
      //   if(book.genre === "Fiction"){
      //     return { name:book.title,author:book.author}
      //   }
      //  });
      //  console.log(fictionList);





//  taskkk 22



//       let books = [
//   {
//     author: "J.K. Rowling",
//     bookName: "Harry Potter and the Sorcerer's Stone",
//     bestseller: true,
//     genre: "Fantasy",
//   },
//   {
//     author: "George Orwell",
//     bookName: "1984",
//     bestseller: false,
//     genre: "Dystopian",
//   },
//   {
//     author: "J.R.R. Tolkien",
//     bookName: "The Hobbit",
//     bestseller: true,
//     genre: "Fantasy",
//   },
//   {
//     author: "Jane Austen",
//     bookName: "Pride and Prejudice",
//     bestseller: false,
//     genre: "Classic",
//   },
//   {
//     author: "Harper Lee",
//     bookName: "To Kill a Mockingbird",
//     bestseller: true,
//     genre: "Fiction",
//   },
//   {
//     author: "F. Scott Fitzgerald",
//     bookName: "The Great Gatsby",
//     bestseller: false,
//     genre: "Classic",
//   },
//   {
//     author: "Agatha Christie",
//     bookName: "Murder on the Orient Express",
//     bestseller: true,
//     genre: "Mystery",
//   },
//   {
//     author: "Ernest Hemingway",
//     bookName: "The Old Man and the Sea",
//     bestseller: false,
//     genre: "Fiction",
//   },
//   {
//     author: "Jules Verne",
//     bookName: "Twenty Thousand Leagues Under the Sea",
//     bestseller: true,
//     genre: "Adventure",
//   },
//   {
//     author: "Arthur Conan Doyle",
//     bookName: "Sherlock Holmes",
//     bestseller: false,
//     genre: "Mystery",
//   },
// ];


// 1Classic genre'ine sahip olub bestseller olmayan kitaplarin sayini tapin.
// 2Mystery genre'ine sahib olan kitablarin authorlarini elifba sirasina gore yazin.
// 3Fiction genre'ine sahib olan kitablarin ortalama seyfe sayini hesablayin.
// 4author adinda  "J" herfi olan kitabları yazin.




//1  Classic genre'ine sahip olub bestseller olmayan kitaplarin sayini tapin.

  //   let filtered =books.filter(book => book.genre === "Classic"  && !book.bestseller).length;
  // console.log(filtered);


  //2



    


  //3 Fiction genre'ine sahib olan kitablarin ortalama seyfe sayini hesablayin.
  // let reduce =(arr) =>{
  //   let fictionbooks=books.filter(book => book.genre === "Fiction");
  //   let sum=arr.reduce((acc,item) => acc + item.pageCount,0);
  //   return fictionbooks;
  // };
  // console.log(reduce(books));






  //4   author adinda  "J" herfi olan kitabları yazin.
  // let authors=books.filter(book => book.author.startsWith("J"));
  // console.log(authors)