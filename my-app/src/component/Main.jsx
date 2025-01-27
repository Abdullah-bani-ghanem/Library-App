import React from 'react';

function Main({ books }) {
  return (
    <main style={{ padding: '1rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {books.map((book) => (
        <div
          key={book.id}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          <h3>{book.title}</h3>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
        </div>
      ))}
    </main>
  );
}

export default Main;
