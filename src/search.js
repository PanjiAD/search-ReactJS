import React, {Component} from 'react'

class Search extends Component{
    state={
        value:'',
    }

    handleInput=()=>{
        this.setState({
            value : this.search.value
        })
    }

    render(){
        return(
            <form>
                <input
                    placeholder="cari buku"
                    ref={input => this.search = input}
                    onChange={this.handleInput}
                >
                    <p>{this.state.value}</p>
                </input>
            </form>
        )
    }
}

export default Search