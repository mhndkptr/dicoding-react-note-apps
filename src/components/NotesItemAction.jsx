import React from 'react';

function NotesItemAction({id, archived, onDelete, onArchived}) {
    return(
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => onArchived(id)}>{archived ? 'Pindahkan' : 'Arsipkan'}</button>
        </div>
    );
}

export default NotesItemAction;