var React = require('react');


class Navbar extends React.Component {
    render() {
        return (
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        {/*<nav class="navbar navbar-dark bg-primary">*/}
                            <a class="navbar-brand" href="/"><img src="/img/download.jpeg" width="60" height="60" className="d-inline-block align-center" alt="" />Income Tracker</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                        </nav>
                    </div>

    );
  }
}

module.exports = Navbar;