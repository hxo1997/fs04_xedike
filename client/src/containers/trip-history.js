import React, { Component } from 'react';
import HeaderComp from '../components/header/header';
import FooterComp from '../components/footer/footer';
import ModalRegister from '../components/modal-register/modal-register';
import ModalLogin from "../components/modal-login//modal-login";
import TripHistoryContent from '../components/trip-history/trip-history-content';
import { connect } from "react-redux";

class TripHistoryPage extends Component {

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        if (!localStorage.jwtToken) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <HeaderComp />
                <TripHistoryContent />
                <FooterComp />
                <ModalLogin />
                <ModalRegister />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(TripHistoryPage);
