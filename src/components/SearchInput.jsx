import React from 'react'

export class SearchInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
    }

    this.onQueryChanged = this.onQueryChanged.bind(this)
    this.onSearchSubmitted = this.onSearchSubmitted.bind(this)
  }

  onQueryChanged(event) {
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
          id='search'
          name='search'
          value={this.state.query}
          onChange={this.onQueryChanged}
        />
      </form>
    )
  }
}