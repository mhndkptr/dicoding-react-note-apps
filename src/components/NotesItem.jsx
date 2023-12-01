import React from 'react';
import NotesItemContent from './NotesItemContent';
import NotesItemAction from './NotesItemAction';

function NotesItem({id, title, body, archived, createdAt, showFormattedDate, onDelete, onArchived}) {
    return (
        <div className="note-item">
            <NotesItemContent title={title} body={body} createdAt={createdAt} showFormattedDate={showFormattedDate} />
            <NotesItemAction id={id} archived={archived} onDelete={onDelete} onArchived={onArchived} />
        </div>
    );
}

export default NotesItem;