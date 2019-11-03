import React from 'react'

class Profile extends React.Component {
    render(){
        return(
            <div>
                <div className="" style={{margin: '14rem auto'}}>
                <div className="card" style={{margin: '1rem auto', width: '60%', borderRadius: '9px', boxShadow: '0px 2px 8px #888888'}}>
                    <div className="card-body">
                    <div class="list-group rounded-0">
                        <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle" />
                        
                        <h5>Amazon</h5>
                        
                    </div>
                    </div>
                    </div>
                </div>
                <div className="card" style={{margin: '1rem auto', width: '60%', borderRadius: '9px', boxShadow: '0px 2px 8px #888888'}}>
                    <div className="card-body">
                        <div class="list-group rounded-0">
                        <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle" />
                        <h5>Google</h5>
                    </div>
                    </div>
                </div>
                </div>                                    
                <div className="card" style={{margin: '1rem auto', width: '60%', borderRadius: '9px', boxShadow: '0px 2px 8px #888888'}}>
                    <div className="card-body">
                    <div class="list-group rounded-0">
                        <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle" />
                        <h5>Facebook</h5>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Profile;