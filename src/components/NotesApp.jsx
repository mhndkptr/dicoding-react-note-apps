import React from 'react';
import { getInitialData, showFormattedDate } from '../utils/index'
import Header from './Header';
import InputNotes from './InputNotes';
import ActiveNotesList from './ActiveNotesList';
import ArchiveNotesList from './ArchiveNotesList';


class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        };

        this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
    }
    
    onAddNotesEventHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }
                ]
            };
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchivedHandler(id) {
        const notes = this.state.notes;
        notes.map((note) => {
            if(note.id == id) {
                note.archived = !note.archived;
            }
        });
        this.setState({ notes });
    }

    render() {
        return (
            <>
                <Header />
                <div className="note-app__body">
                    <InputNotes addNotes={this.onAddNotesEventHandler} />
                    <h2>Catatan Aktif</h2>
                    <ActiveNotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} showFormattedDate={showFormattedDate} />
                    <h2>Arsip</h2>
                    <ArchiveNotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} showFormattedDate={showFormattedDate} />
                </div>
            </>
        );
    }

}

export default NotesApp;