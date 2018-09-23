import React from 'react'


const SearchBar = props => {
    let placeholder = "cari ape aje.."
    return (
        <div style={styles.contentSearch}>
            {/* Props: {props.name}<br />
            Id: {props.id} */}
            <input type="text" placeholder={placeholder} 
                // value={props.search} 
                style={styles.inputSearch}
                onChange={props.onChangeSearch} 
            />
        </div>
    )
}
const styles = {
    inputSearch: {
        width: 500,
        height: 30
    },
    contentSearch: {
        backgroundColor: "#bcbcbd",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
}
export default SearchBar;