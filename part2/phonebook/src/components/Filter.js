import React from 'react'

const Filter = (props) => (
    <div>
        Search: <input value={props.filterChange} onChange={props.handleFilterChange} />
    </div>
)

export default Filter