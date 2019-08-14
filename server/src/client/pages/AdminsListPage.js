import React from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from "../actions";
import requireAuth from '../components/hocs/requireAuth';

class AdminListPage extends React.Component{
    componentDidMount(){
        this.props.fetchAdmins();
    }
    renderAdmins(){
        return this.props.admins.map((admin)=>{
            return <li key={admin.id}>{admin.name}</li>
        });
    }
    render(){
        return (
            <div>
                <h3>Protected list of admins</h3>
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({admins}) => {
    return {
        admins
    }
}

export default {
    component: connect(mapStateToProps, {fetchAdmins})(
        requireAuth(AdminListPage)
    ),
    loadData: ({dispatch}) => dispatch(fetchAdmins())
}