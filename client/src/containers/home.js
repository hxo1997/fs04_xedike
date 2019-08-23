import React, { Component } from 'react';
import {connect} from "react-redux";

// TODO: import actions
import {actGetUserList} from "../actions/user-action";
import {actGetTripList} from "../actions/trip-action";

// TODO: import components
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MainBanner from "../components/home/main-banner/main-banner";
import TripList from '../components/home/trips-list-home/trip-list';
import Introduction from "../components/home/introduction/introduction";
import Introduction2 from "../components/home/introduction-2/introduction-2";
import Introduction3 from "../components/home/introduction-3/introduction-3";
import ModalRegister from '../components/modal-register/modal-register';
import ModalLogin from "../components/modal-login//modal-login";

class HomePage extends Component {

    componentWillMount(){
      this.props.onStoreUsersList();
      this.props.onStoreTripList();
    }

  render() {    
    return (
      <div>
          <Header/>
          <MainBanner/>
          <TripList/>
          <Introduction/>
          <Introduction2/>
          <Introduction3/>
          <Footer/>     
          <ModalRegister/>     
          <ModalLogin/>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onStoreUsersList: () => {
      dispatch(actGetUserList())
    },

    onStoreTripList: () => {
      dispatch(actGetTripList())
    },
  }
}

export default connect(null ,mapDispatchToProps)(HomePage);