import React from 'react';
import Grid from '../Grid/Grid';
import Searchbar from '../SearchBar/Searchbar';
import Error from '../UI/Error/Error';

const Application = ():JSX.Element => {
    return (
        <React.Fragment>
            <header>
                <Searchbar />
            </header>
            <main>
                <Grid />
            </main>
            <Error />
        </React.Fragment>
    )
}

export default Application;