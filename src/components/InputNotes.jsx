import React from 'react';

class InputNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        this.props.addNotes(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa Karakter: {50 - this.state.title.length}</p>
                    <input maxLength='50' type="text" className='note-input__title' placeholder='Masukkan judul catatan ...' required onChange={this.onTitleChangeEventHandler} />
                    <textarea className='note-input__body' type='text' placeholder='Tuliskan catatanmu disini ...' required onChange={this.onBodyChangeEventHandler} ></textarea>
                    <button type='submit'>Buat</button>
                </form>
            </div>
        );
    }
}

export default InputNotes;