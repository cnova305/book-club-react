import React from 'react';
import { Book } from '../../types/types';

import './BookCard.css'

interface BookCardProps {
  book: Book
}

const BookCard = ({
  book,
  ...props
}:BookCardProps) => {
  return (
    <div>{book.title}</div>
  )
}

export default BookCard