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
        event.target.reset();
        axios.post(
            '/notes',
            {
                dated: this.state.newNoteDated,
                title: this.state.newNoteTitle,
                codeLanguage: this.state.newNoteCodeLanguage,
                codeBlock: this.state.newNoteCodeBlock,
                comments: this.state.newNoteComments,
            }
        ).then(
            (response) => {
                this.setState({
                    notes: response.data
                })
                console.log(response.data);
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
    addNoteCodeLanguage = (event) => {
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
        console.log(event.target.value);
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
        event.target.reset();
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
        console.log(event.target.value);
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
        return(
         <div>
            <h2>Create Note</h2>
            <form onSubmit={this.createNote}>
                <input onKeyUp={this.addNoteDated} type="text" /><br/>
                &nbsp;
                <input onKeyUp={this.addNoteTitle} type="text" />
                &nbsp; 
                &nbsp;
                <input onKeyUp={this.addNoteCodeLanguage} type="text" /><br/>
                <input onKeyUp={this.addNoteCodeBlock} type="text" />
                <br/>
                <input onKeyUp={this.addNoteComments} type="text" /><br/>
                <input type="submit" value="Create Note"/>
            </form>
            <h2>List of notes</h2>
                {
                    this.state.notes.map(
                        (thisNote, index) => {
                            return <div>
            
                            <strong>Date: </strong>{thisNote.dated} <br/>
                            <strong>Title: </strong>{thisNote.title} <br/>
                            <strong>Language: </strong>{thisNote.codelanguage} <br/>
                            <strong>Code Block: </strong>
                            <code>{thisNote.codeblock}</code> 
                            <br/>
                            <strong>Notes: </strong>{thisNote.comments} <br/>

                                <button value={thisNote.id} onClick={this.deleteNote}>
                                    Delete
                                </button>
                                <form id={thisNote.id} onSubmit={this.updateNote}>
                                    <input onKeyUp={this.changedNoteDated} type="text" placeholder="Date"/><br/>
                                    <input onKeyUp={this.changedNoteTitle} type="text" placeholder="Title"/><br/>
                                    <input onKeyUp={this.changedNoteCodeLanguage} type="text" placeholder="Language"/><br/>
                                    <input onKeyUp={this.changedNoteCodeBlock} type="text" placeholder="Code"/><br/>
                                    <input onKeyUp={this.changedNoteComments} type="text" placeholder="Notes"/><br/>
                                    <input type="submit" value="Update"/>
                                </form>
                            
                            </div>
                        }
                    )
                }
        </div>
        )
    }
        
}

ReactDOM.render(
    <App></App>, 
    document.querySelector('main')
)