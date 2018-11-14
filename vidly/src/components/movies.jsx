import React, {Component} from 'react';
import * as moviesAPI from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        data: moviesAPI.getMovies()
    }

    handleDelete = (id) => {
        moviesAPI.deleteMovie(id);
        this.setState({
            data: moviesAPI.getMovies()
        });
    }

    render() {
        const {length: count} = this.state.data;

        if (count === 0) 
            return <p>There are no movies in the database!</p>
        return <React.Fragment>
            <h2>Showing {count}
                movies in the database.</h2>
            <div className='table-responsive'>
                <table className='table table-striped table-md'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{this
                            .state
                            .data
                            .map(movie => <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button
                                        onClick={() => this.handleDelete(movie._id)}
                                        className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>)
}</tbody>
                </table>
            </div>
        </React.Fragment>;
    }
}

export default Movies;