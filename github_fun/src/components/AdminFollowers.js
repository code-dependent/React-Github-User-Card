import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    Button } from 'reactstrap';

const AdminFollowers = (props)=>{

    return(
        <div style={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-around', 
            width:'85%'}}>
            {
                props.usersInfo.map(user=>(
                    <Card key={user.id} style={{width:'27%'}}>
                        <CardImg top width='100%' src={user.avatar_url}/>
                        <CardBody style={{backgroundColor:'black'}}>
                            
                            <Button style={{margin:'0 auto'}} href={user.html_url}>{user.login}</Button>
                        </CardBody>
                        </Card>
                    )
                )
            }
            
            
        </div>
    )
}


export default AdminFollowers;