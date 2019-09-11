import React, {Component} from 'react'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            search: []
        }
    }

    renderSearch(){
        let list = []
        this.state.search.map(src =>{
            return list.push(<li key={src.id}>{src.title}</li>)
        })

        return list
    }

    componentDidMount(){
        fetch('https://my-json-server.typicode.com/panjiad/search-ReactJS/books')
        .then(Response => Response.json())
        .then(search => {
            this.setState({
                search : search
            })
        })
        .catch(error => console.log(error))
    }
    
    render(){
        const ul = {
            textAlign : "left"
        }

        return(
            <div>
                <h1>Books List</h1>
                <ul style={ul}>
                    {this.renderSearch()}
                </ul>
            </div>
        )
    }
}

export default Search