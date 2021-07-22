import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <label>Search GIFS:</label>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGIFs = (query = "cats") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=SDisjxSTUzjpfr0HBPbdW4W3zrNnU4si&rating=g&limit=3`)
            .then(res => res.json())
            .then(({ data }) => {
                this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url })) })
            })
    }

    componentDidMount() {
        this.fetchGIFs()
    }
}

export default GifListContainer
