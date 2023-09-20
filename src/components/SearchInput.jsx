import React from 'react'

export class SearchInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
    }

    this.onQueryChange = this.onQueryChange.bind(this)
    this.onSearchSubmitted = this.onSearchSubmitted.bind(this)
  }

  onQueryChange(event) {
    this.setState(() => {
      return {
        query: event.target.value
      }
    })
  }

  onSearchSubmitted(event) {
    event.preventDefault()
    this.props.onSearch(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.onSearchSubmitted}>
        <input
          type="search"
          className="note-search"
          placeholder='Cari catatan...'
          value={this.state.query}
          onChange={this.onQueryChange}
        />
      </form>
    )
  }
}