import autoBind from 'auto-bind';
import React from 'react';

export class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
        };

        autoBind(this);
    }

    onQueryChange(event) {
        event.preventDefault();

        const newQuery = event.target.value;
        this.props.onSearch(newQuery);

        this.setState(() => {
            return {
                query: newQuery,
            };
        });
    }

    render() {
        return (
            <input
                type='search'
                className='note-search'
                placeholder='Cari catatan...'
                value={this.state.query}
                onChange={this.onQueryChange}
            />
        );
    }
}
