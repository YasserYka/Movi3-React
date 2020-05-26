import React, { Component } from 'react';

class Browse extends Component {

    render () {
        return (
            <form>
                <input type="text" class="form-control mb-3" id="" placeholder="Title" />

                <div class="form-group">
                    <select id="inputState" class="form-control mb-3">
                        <option selected>Rating</option>
                        <option>9+</option>
                        <option>8+</option>
                        <option>7+</option>
                        <option>6+</option>
                        <option>5+</option>
                        <option>4+</option>
                        <option>3+</option>
                        <option>2+</option>
                        <option>1+</option>
                    </select>
                </div>

                <div class="form-group">
                    <select id="inputState" class="form-control mb-3">
                        <option selected>Genre</option>
                        <option>Horror</option>
                        <option>Action</option>
                        <option>Comedy</option>
                        <option>Adventure</option>
                        <option>Crime</option>
                        <option>Romance</option>
                        <option>Documetary</option>
                        <option>Anime</option>
                    </select>
                </div>

                <input type="text" class="form-control mb-3" id="" placeholder="Release" />

                <button type="submit" class="btn btn-secondary btn-lg btn-block">Search</button>
            </form>
        )
    }
}

export default Browse;
