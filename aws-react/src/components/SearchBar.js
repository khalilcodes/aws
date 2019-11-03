import React from 'react'

class SearchBar extends React.Component {
    render() {
        return (
            <div>
            <div style={{ marginTop: '10px'}}>
                <div className="card" style={{width: '36rem', margin: 'auto', borderRadius: '10px', position: 'absolute', left: '0', right: '0'}}>
                    <div className="card-body" style={{margin: '0', padding: '0.4rem 0.4rem 0 0.4rem'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card" style={{border: 'none'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{margin: '0'}}><b>What</b></h5>
                                    <p className="card-text" style={{fontSize: '0.8rem'}}>Job title, keywords or company</p>
                                    <form class="form-inline my-2 my-lg-12">
                                       <input class="form-control mr-md-6" type="search" placeholder="Search" aria-label="Search" style={{background: '#F6F6F6', borderRadius: '10px', width: '100%'}}/>
                                    </form>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card" style={{border: 'none'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{margin: '0'}}><b>Where</b></h5>
                                    <p className="card-text" style={{fontSize: '0.8rem'}}>city or state</p>
                                    <form class="form-inline my-2 my-lg-12">
                                       <input class="form-control mr-md-6" type="search" placeholder="Search" aria-label="Search" style={{background: '#F6F6F6', borderRadius: '10px', width: '100%'}} />
                                    </form>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{width: '20rem', margin: '0 auto', borderRadius: '10px', position: 'relative', top: '9rem', border: 'none'}}>
                <div className="card-body" style={{margin: '0', textAlign: 'center', padding: '0 0.3rem 0.3rem 0.3rem'}}>
                    <button style={{width: '100%',borderRadius: '10px', background: '#2680EB', padding: '1.2rem', color: 'white'}}><b>F i n d</b></button>
                </div>
            </div>
            </div>
        )
    }
}

export default SearchBar