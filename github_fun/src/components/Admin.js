import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    Button} from 'reactstrap';
import {Link} from 'react-router-dom';


const Admin = (props)=>{
    return(
        <div>
            <Card style={{ margin:'0 auto',width:'75%',backgroundColor:'black'}} key={props.userInfo.id}>
                <CardImg top width='100%' src={props.userInfo.avatar_url}/>
                <CardBody>
                    <CardText style={{textAlign:'left'}}>
                        <span style={{textDecoration:'underline'}}>Username:</span>&nbsp;
                        {props.userInfo.login}<br/>

                        <span style={{textDecoration:'underline'}}>Bio:</span>&nbsp;
                        {props.userInfo.bio}<br/>

                        <span style={{textDecoration:'underline'}}>Name:</span>&nbsp;
                        {props.userInfo.name}<br/>

                        <span style={{textDecoration:'underline'}}>Public Repos:</span>&nbsp;
                        {props.userInfo.public_repos}<br/>

                        <span style={{textDecoration:'underline'}}>Location:</span>&nbsp;
                        {props.userInfo.location}<br/>

                        <span style={{textDecoration:'underline'}}>Followers:</span>&nbsp;
                        {props.userInfo.followers}<br/>

                        <span style={{textDecoration:'underline'}}>Following:</span>&nbsp;
                        {props.userInfo.following}<br/>
                    </CardText>
                    <Link to='/followers'><Button style={{margin:'0 auto'}}>See Followers</Button></Link>
                    <img style={{width:'100%'}} src={`https://ghchart.rshah.org/${props.userInfo.login}`} alt={props.login} />
                </CardBody>
            </Card>
        </div>
    )
}

export default Admin