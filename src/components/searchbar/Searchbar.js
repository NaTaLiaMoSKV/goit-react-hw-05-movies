import { useState } from "react";

export default function Searchbar({ changeQueryString }) {
    const [movieName, setMovieName] = useState('');

    const onFormSubmit = evt => {
        evt.preventDefault();

        if (movieName.trim() === '') return;
        changeQueryString(movieName);
    }

    const onInputChange = evt => {
        setMovieName(evt.currentTarget.value);
    }

     return (
        <div className="searchbar">
             <form className="searchForm" onSubmit={onFormSubmit}>
                 
                <input
                    className="searchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    onChange={onInputChange}
                 />
                 <button type="submit" className="searchForm-button">
                <span className="searchForm-button-label">Search</span>
                </button>
            </form>
        </div>
    )
}