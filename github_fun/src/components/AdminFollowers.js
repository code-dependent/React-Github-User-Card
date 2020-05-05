import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText
} from 'reactstrap'

const AdminFollowers = (props)=>{

    return(
        <div style={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-around', 
            width:'85%'}}>
            {
                props.usersInfo.map(user=>(
                    <Card style={{width:'27%'}}>
                        <CardImg top width='100%' src={user.avatar_url}/>
                    </Card>
                    )
                )
            }
            
            
        </div>
    )
}


export default AdminFollowers;