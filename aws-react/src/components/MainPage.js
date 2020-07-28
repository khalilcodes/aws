import React from 'react';



class MainPage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div class="">
                <div class="row" >
                    <div class="col-3" style={{border : "2px solid"}}>
                        <form class="form-inline">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <select class="custom-select my-1 mr-sm-2" id="select-city">
                                        <option selected disabled="disabled">Select city</option>
                                        <option value="city0">Hyderabad</option>
                                        <option value="city1">Delhi</option>
                                        <option value="city2">Chennai</option>
                                    </select>
                                </li>
                                <li class="list-group-item">
                                    <b>Experience in</b><br/>
                                    <input type="checkbox" name="vehicle1" value="check0"/>React.js<br/>
                                    <input type="checkbox" name="vehicle2" value="check1"/>MongoDB<br/>
                                    <input type="checkbox" name="vehicle3" value="check2"/>Python</li>
                                <li class="list-group-item">
                                    <select class="custom-select my-1 mr-sm-2" id="select-exp">
                                        <option selected disabled="disabled">Min. Experience</option>
                                        <option value="none">None</option>
                                        <option value="month6">6 months</option>
                                        <option value="year1">1 year</option>
                                        <option value="year2">2 years</option>
                                        <option value="year3">3 years</option>
                                        <option value="year4">4 years</option>
                                        <option value="year5">5 years</option>
                                        <option value="year5p">5+ years</option>
                                    </select>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div class="col-9" style={{border : "1px solid"}}>
                        <div class=" bootstrap snippet">
                            <div class="profile card">
                                <div class="profile-body">
                                    <div class="profile-bio">
                                        <div class="row">
                                            <div class="col-md-5 text-center">
                                                <img class=" md-margin-bottom-10" src="http://pngimg.com/uploads/google/google_PNG19635.png" alt="" style={{width: '300px', height: '300px'}} />
                                            </div>
                                            <div class="col-md-7">
                                                <h2>Edward Rooster</h2>
                                                <span><strong>Job:</strong> Web Developer</span>
                                                <span><strong>Position:</strong> Web Designer</span>
                                                <hr />
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" bootstrap snippet">
                            <div class="profile card">
                                <div class="profile-body">
                                    <div class="profile-bio">
                                        <div class="row">
                                            <div class="col-md-5 text-center">
                                                <img class=" md-margin-bottom-10" src="http://pngimg.com/uploads/amazon/amazon_PNG5.png" alt="" style={{width: '300px', height: '300px'}} />
                                            </div>
                                            <div class="col-md-7">
                                                <h2>Edward Rooster</h2>
                                                <span><strong>Job:</strong> Web Developer</span>
                                                <span><strong>Position:</strong> Web Designer</span>
                                                <hr />
                                             </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" bootstrap snippet">
                            <div class="profile card">
                                <div class="profile-body">
                                    <div class="profile-bio">
                                        <div class="row">
                                            <div class="col-md-5 text-center">
                                                <img class=" md-margin-bottom-10" src="http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Microsoft-Logo-Icon-PNG-Transparent-500x500.png" alt="" />
                                            </div>
                                            <div class="col-md-7">
                                                <h2>Edward Rooster</h2>
                                                <span><strong>Job:</strong> Web Developer</span>
                                                <span><strong>Position:</strong> Web Designer</span>
                                                <hr />
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainPage;