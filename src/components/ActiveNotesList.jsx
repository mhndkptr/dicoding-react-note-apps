import React from 'react';
import NotesItem from './NotesItem';
import EmptyNotes from './EmptyNotes';

function ActiveNotesList({notes, showFormattedDate, onDelete, onArchived}) {
    for(const note of notes) {
        if(!note.archived) {
            return (
                <div className="notes-list">
                    {
                        notes.map((note) => {
                            if(!note.archived) {
                                return (
                                    <NotesItem 
                                    key={note.id} 
                                    id={note.id} 
                                    onDelete={onDelete} 
                                    onArchived={onArchived} 
                                    showFormattedDate={showFormattedDate} 
                                    {...note} />
                                );
                            }
                        })
                    }
                </div>
            );
        }
    }

    return (
        <EmptyNotes />
    );
}

export default ActiveNotesList;