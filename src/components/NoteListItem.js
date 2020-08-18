import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const NoteListItem = ({ id, noteTitle, noteBody, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{noteTitle}</h3>
    </Link>
    <div>

        {ReactHtmlParser(noteBody)} ---  
       {moment(createdAt).format('MMMM Do, YYYY')}
    </div>
  </div>
);



export default NoteListItem;