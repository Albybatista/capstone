class App extends React.Component {
    state = {
        notes: []
    }

    componentDidMount = () => {
        axios.get('/notes').then(
            (response) => {
                this.setState({
                    notes: response.data
                })
            }
        )
    }

    // =========
    //  CREATE
    // =========
    createNote = (event) => {
        event.preventDefault();
        axios.post(
            '/notes',
            {
                dated: this.state.newNoteDated,
                title: this.state.newNoteTitle,
                codeLanguage: this.state.newCodeLanguage,
                codeBlock: this.state.newNoteCodeBlock,
                comments: this.state.newNoteComments,
            }
        ).then(
            (response) => {
                this.setState({
                    notes: response.data
                })
            }
        )
    }

    // ============================
    // SET STATES OF CREATE VALUES
    // ============================
    addNoteDated = (event) => {
        this.setState({
            newNoteDated: event.target.value
        });
    }
    addNoteTitle = (event) => {
        this.setState({
            newNoteTitle: event.target.value
        });
    }
    addNotecodeLanguage = (event) => {
        this.setState({
            newNoteCodeLanguage: event.target.value
        });
    }
    addNoteCodeBlock = (event) => {
        this.setState({
            newNoteCodeBlock: event.target.value
        });
    }
    addNoteComments = (event) => {
        this.setState({
            newNoteComments: event.target.value
        });
    }


    // =========
    //  DELETE
    // =========
    deleteNote = (event) => {
        axios.delete('/notes/' + event.target.value).then(
            (response) => {
                this.setState({
                    notes: response.data
                })
            }
        )
    }

    // =========
    //  UPDATE 
    // =========
    updateNote = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/notes/' + id,
            {
                dated: this.state.updateNoteDated,
                title: this.state.updateNoteTitle,
                codeLanguage: this.state.updateNoteCodeLanguage,
                codeBlock: this.state.updateNoteCodeBlock,
                comments: this.state.updateNoteComments,
            }
        ).then(
            (response) => {
                this.setState({
                    notes: response.data,
                    dated: '',
                    title:'',
                    codeLanguage: '',
                    codeBlock: '',
                    comments: '',
                })
            }
        )
    }

    // =============================
    // SET STATES OF UPDATED VALUES
    // =============================
    changedNoteDated = (event) => {
        this.setState({
            updateNoteDated: event.target.value
        });
    }
    changedNoteTitle = (event) => {
        this.setState({
            updateNoteTitle: event.target.value
        });
    }
    changedNoteCodeLanguage = (event) => {
        this.setState({
            updateNoteCodeLanguage: event.target.value
        });
    }
    changedNoteCodeBlock = (event) => {
        this.setState({
            updateNoteCodeBlock: event.target.value
        });
    }
    changedNoteComments = (event) => {
        this.setState({
            updateNoteComments: event.target.value
        });
    }

    // ==========================================
    // SHOW EVERYTHING ON THE WEBPAGE LIKE SO -- 
    // ==========================================
    render = () => {
        return <div>
            <h2>Create Note</h2>
            <form onSubmit={this.createNote}>
                <input onKeyUp={this.newNoteDated} type="text" placeholder="date" /><br/>
                <input onKeyUp={this.newNoteTitle} type="text" placeholder="title" /><br/>
                <input onKeyUp={this.newNoteCodeLanguage} type="text" placeholder="code language" /><br/>
                <input onKeyUp={this.newNoteCodeBlock} type="<code>" placeholder="code block" /><br/>
                <input onKeyUp={this.newNoteComments} type="text" placeholder="note" /><br/>
                <input type="submit" value="Create Note" />
            </form>
            <h2>List of notes</h2>
            <ul>
                {
                    this.state.notes.map(
                        (thisNote, index) => {
                            return <li key={index}>

                                {/* ?? */}
                                {thisNote.dated}: {thisNote.title}
                                {thisNote.codeLanguage}: {thisNote.codeBlock}: {thisNote.comments}

                                <button value={thisNote.id} onClick={this.deleteNote}>
                                    Delete
                                </button>

                                <form id={thisNote.id} onSubmit={this.updateNote}>
                                    <input onKeyUp={this.changedNoteDated} type="text" placeholder="date"/><br/>
                                    <input onKeyUp={this.changedNoteTitle} type="text" placeholder="title"/><br/>
                                    <input onKeyUp={this.changedNoteCodeLanguage} type="text" placeholder="language"/><br/>
                                    <input onKeyUp={this.changedNoteCodeBlock} type="text" placeholder="code block"/><br/>
                                    <input onKeyUp={this.changedNoteComments} type="text" placeholder="comments"/><br/>
                                    <input type="submit" value="Update Note"/>
                                </form>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    }

    }

ReactDOM.render(
    <App></App>, 
    document.querySelector('main')
)