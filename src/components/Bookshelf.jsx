import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState(
        {
            title: '',
            author: ''
        }
    )

    const handleInputChange = (e) => {
        e.preventDefault();
        console.log('Title:', newBook.title)
        console.log('Author:', newBook.author)
        setNewBook({ ...newBook, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        setBooks([...books, newBook])
        console.log('Books:', books)
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit()
                    }}
                >
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                        name='title'
                        value={newBook.title}
                        onChange={handleInputChange}
                    />



                    <label htmlFor="title">Author:</label>
                    <input type="text"
                        name='author'
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            {books.map((book, i) => {
                return(
                <div className="bookCardsDiv">
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Bookshelf;