import React, {useState, useEffect} from "react"
import StoriesComponent from "../../Components/Stories"
const BASE_URL = 'https://firestore.googleapis.com/v1'

export default class StoriesList extends React.Component {
state = {
    stories: null,
}
componentDidMount() {
    this.fetchStories();
}
fetchStories = async () => {
    const url = `${BASE_URL}/projects/syrian-success-story/databases/(default)/documents/stories`
    const response = await fetch(url);
    const json = await response.json();
    this.setState({stories: json.documents});
}
render () {
    if (this.state.stories === null){
        return (<h1>Loading...</h1>)
    }
    return (
        <div>
            <StoriesComponent
            stories = {this.state.stories}
            updateFavoritesCount={this.updateFavoritesCount}
            ></StoriesComponent>
        </div>
    )
}
}