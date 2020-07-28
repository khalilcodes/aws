import React from 'react'

class SearchBar extends React.Component {
    render() {
        return (
            <div>
            <div style={{ marginTop: '10px', boxShadow: '0px 2px 8px #888888'}}>
                <div className="card" style={{width: '36rem', margin: 'auto', borderRadius: '10px'}}>
                    <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card" style={{border: 'none'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{margin: '0'}}><b>What</b></h5>
                                    <p className="card-text" style={{fontSize: '0.8rem'}}><i>Job title, keywords or company</i></p>
                                    <form class="form-inline my-2 my-lg-12">
                                       <input class="form-control mr-lg-6" type="search" placeholder="Search" aria-label="Search" style={{background: '#F6F6F6', borderRadius: '10px'}}/>
                                    </form>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card" style={{border: 'none'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{margin: '0'}}><b>Where</b></h5>
                                    <p className="card-text" style={{fontSize: '0.8rem'}}><i>city or state</i></p>
                                    <form class="form-inline my-2 my-lg-12">
                                       <input class="form-control mr-lg-6" type="search" placeholder="Search" aria-label="Search" style={{background: '#F6F6F6', borderRadius: '10px'}} />
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            <div className="card" style={{width: '20rem', margin: '0 auto', borderRadius: '10px', border: 'none'}}>
=======
            <div className="card" style={{width: '20rem', margin: '0 auto', borderRadius: '10px', position: 'relative', top: '12rem', border: 'none'}}>
>>>>>>> 1242ebde2fd029ce06b9e313f29c7904062554a5
                <div className="card-body" style={{margin: '0', textAlign: 'center', padding: '0 0.3rem 0.3rem 0.3rem'}}>
                    <button style={{width: '100%',borderRadius: '10px', background: '#2680EB', padding: '1.2rem', color: 'white'}}><b>F i n d</b></button>
                </div>
            </div>
            </div>
        )
    }
}

export default SearchBar