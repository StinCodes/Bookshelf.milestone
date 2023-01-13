// created function to randomly color each book
function randomColorBG(){
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${x}, ${y}, ${z})`;
  return bgColor;
}

// created function that creates querySelectors for each individual book
let createQS = (bookObj) => {
  //create variable initialized to an empty string, loop through string to select each book
  let query = "";
  for (let i = 0; i < bookData.length; i++){
    query[i] = document.querySelector(bookObj.title);
  }
}

/* Book: tracks all properties in data ✅ */
class Book {
    constructor(author, language, subject, title){
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
      this.fav = false;
    }
    checkFav(){
      for(let i = 0; i < bookData.length; i++){
        if(this.fav){
          let bookInQuestion
          // push to favArray
          // problem: how do we figure out how to select the favorited book???
        } else{
          // if book is in favArray...
            // take out of favArray
        }
      }
      
    }
    Render(){
      // make a rectangle to symbolize a book
      let div = document.querySelector("#bookSection")
      let rectangle = document.createElement("div");
      rectangle.classList.add("bookCard");    
      // created text element to center text in book
      let bookTextEle = document.createElement("div"); 
      bookTextEle.classList.add("bookText")
      rectangle.append(bookTextEle);
      
      // add color to each book's background
      rectangle.style.backgroundColor = randomColorBG();

      // create favorite button within each book
      let starContainer = document.createElement("button");
      starContainer.classList.add("btn");
      starContainer.classList.add("btn-primary");
      starContainer.setAttribute("type", "button");
      starContainer.innerText = "Favorite!"
      starContainer.setAttribute("id", this.title)
      rectangle.append(starContainer)

      // added innertext to book face by using this keyword
      bookTextEle.innerText = 
      `${this.title}
      by ${this.author} 

      ${this.language}

      ${this.subject}
      `
      rectangle.inner
      div.append(rectangle);
      //create comment button, add bootstrap class to change button color to blue
      const commentButton = document.createElement("button")
      commentButton.classList.add("btn")
      commentButton.classList.add("btn-primary")
      commentButton.setAttribute("type", "button")
      commentButton.innerText = "Comment"
      rectangle.append(commentButton)
      //add event listener to comment button
      commentButton.addEventListener("click", function(){
        //each click will create a text box and hide the comment button
        const commentBox = document.createElement("textarea")
        commentBox.setAttribute("maxlength", "280")
        commentButton.style.visibility = "hidden"
        rectangle.append(commentBox)
        //each click will create a send button (to send comment)
        const sendCommentButton = document.createElement("button")
        sendCommentButton.classList.add("btn")
        sendCommentButton.classList.add("btn-primary")
        sendCommentButton.setAttribute("type", "button")
        sendCommentButton.innerText = "Send"
        rectangle.append(sendCommentButton)
        //write another event listener for when send comment button is clicked
        sendCommentButton.addEventListener("click", function(){
          //each click of send comment button will create a div tag that contains the comment
          const postedComment = document.createElement("div")
          postedComment.classList.add("postedComment")
          postedComment.innerText = commentBox.value
          //each click will hide comment text box and the send comment button
          commentBox.style.visibility = "hidden"
          sendCommentButton.style.visibility = "hidden"
          rectangle.append(postedComment)
        })
      })
    }
}
/*bookshelf should: 1. maintain array of shelf 2. add books to bookshelf ✅*/
class Bookshelf {
    constructor(){
        this.shelf = [];
    }
    // adding book to bookshelf
    Add(bookObj){
      this.shelf.push(bookObj);
    }
}

// create eternal bookshelf (holds all books ever created)
let eternalBookshelf = new Bookshelf();


// I used .map to render all the books within book-data.js
let loopThrough = (currEle) => {
  let currBook = new Book(currEle.author, currEle.language, currEle.subject, currEle.title);
  currBook.Render();
  eternalBookshelf.Add(currBook);
}

//loop through bookData
bookData.map(loopThrough);


// ALTERNATIVE WAY TO LOOP THROUGH BOOKDATA
// for (let i = 0; i < bookData.length; i++){
//   let currEle = bookData[i];
//   // create book element that will transform given object into "Book"
//   let currBook = new Book(currEle.author, currEle.language, currEle.subject, currEle.title);
//   // add book to webpage
//   currBook.Render();
//   // add book to bookshelf
//   eternalBookshelf.Add(currBook); // it worked!!!! ✅
// }
// adding book to same shelf
// let book2 = new Book(["Clear, James"], "en", ["self-help", "non-fiction"], "Atomic Habits");
// eternalBookshelf.Add(book2); //✅
// book2.Render();


document.querySelector("#submit").addEventListener("click", function (){
  let newTitle = document.querySelector('#Title').value;
  let newAuthor = document.querySelector('#Author').value;
  let newLang = document.querySelector('#Language').value;
  let newSubj = document.querySelector('#Subject').value;
  let newBook = new Book (newAuthor, newLang, newSubj, newTitle);
  eternalBookshelf.Add(newBook);
  newBook.Render();
  document.querySelector("#newBookForm").reset();
})


class FavoritesArr{
  constructor(){
    this.favArr = []
  }
  add(bookObj){
    console.log(bookObj)
    this.favArr.push(bookObj)
  }
}
// creates an array of favorites
let favorites = new FavoritesArr();

// when favorites is clicked... 
let starContainer = document.querySelector(".starContainer")
let starredBook = document.querySelector('#The Beasts of Tarzan')
starContainer.addEventListener("click", function(event){
  
  // add book that's favorited to favorites array
  // console.log(event, event.target)
  favorites.add();
  // console.log(favorites)
})

let book1 = new Book ()
book1.checkFav();
// create a status within each book that starts as false

// if starContainer is clicked, status = true




