import React, { Component } from 'react';
import HeaderComp from '../components/header/header';
import FooterComp from "../components/footer/footer";
import ModalRegister from '../components/modal-register/modal-register';
import ModalLogin from "../components/modal-login//modal-login";
import ProfileDriverContent from '../components/profile-driver-content/profile-driver-content';

export default class ProfileDriver extends Component {
  render() {
    const { driverId } = (this.props.match.params);
    return (
      <div>
        <HeaderComp />
        <ProfileDriverContent driverId={driverId} />
        <FooterComp />
        <ModalRegister />
        <ModalLogin />
      </div>
    )
  }
}
