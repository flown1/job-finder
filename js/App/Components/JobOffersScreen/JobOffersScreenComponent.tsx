import * as React from 'react'
import {Component} from 'react';
import {View} from 'react-native';
import OffersSlider from "./OffersSlider/OffersSlider";

// Styles
import styles from './Styles/JobOffersScreenStyle'
import AppLogo from "../Utils/AppLogo/AppLogo";

interface JobOffersScreenProps {
}
interface JobOffersScreenState {
  offers: Array<JobOffer>
}
export default class JobOffersScreenComponent extends Component <JobOffersScreenProps, JobOffersScreenState> {
  constructor(props) {
    super(props);

    this.state = {
      offers: new Array<JobOffer>()
    }
  }

  _loadJobOffers = () => {
    let loadedOffers = new Array<JobOffer>();
    loadedOffers.push(
      {position: 'JavaScript Developer', level: 'Junior', location: 'Łódź', company: "IT Systems CEE",
        desc: "A world leader in IT outsourcing is looking for a new passionate JavaScript developer to help us change the world. If you think you fit all the description below be sure to contact us!\n Requirements: \n - JavaScript\n - Angular 4\n - ASP .NET\nPerks: - praca w młodym, dynamicznym zespole (zatrudniamy studentów i mamy w chuj dużą rotację)\n - karta multi-sport\n - MediCover\n - płacone w teminie wow",
        salaryMin: "3000", salaryMax: "4000", currency: 'zł', link: 'http://wp.pl'},
      {position: '.NET Developer', level: 'Senior', location: 'Łódź', salaryMin: "12000", salaryMax: "16000", currency: 'zł', company: "IT Systems CEE",
        desc: "A world leader in IT outsourcing is looking for a new passionate JavaScript developer to help us change the world. If you think you fit all the description below be sure to contact us!\n Requirements: \n - JavaScript\n - Angular 4\n - ASP .NET\nPerks: - praca w młodym, dynamicznym zespole (zatrudniamy studentów i mamy w chuj dużą rotację)\n - karta multi-sport\n - MediCover\n - płacone w teminie wow", link: 'http://wp.pl'},
      {position: 'C++ Developer', level: 'Junior', location: 'Radom', salaryMin: "3000", salaryMax: "4000", currency: 'zł', company: "Asseco",
        desc: "A world leader in IT outsourcing is looking for a new passionate JavaScript developer to help us change the world. If you think you fit all the description below be sure to contact us!\n Requirements: \n - JavaScript\n - Angular 4\n - ASP .NET\nPerks: - praca w młodym, dynamicznym zespole (zatrudniamy studentów i mamy w chuj dużą rotację)\n - karta multi-sport\n - MediCover\n - płacone w teminie wow", link: 'http://wp.pl'},
      {position: 'Front-end Developer', level: 'Mid', location: 'Warsaw', salaryMin: "8000", salaryMax: "10000", currency: 'zł', company: "Comarch Sp. z o.o",
        desc: "A world leader in IT outsourcing is looking for a new passionate JavaScript developer to help us change the world. If you think you fit all the description below be sure to contact us!\n Requirements: \n - JavaScript\n - Angular 4\n - ASP .NET\nPerks: - praca w młodym, dynamicznym zespole (zatrudniamy studentów i mamy w chuj dużą rotację)\n - karta multi-sport\n - MediCover\n - płacone w teminie wow", link: 'http://wp.pl'},
      {position: 'Ruby Developer', level: 'Junior', location: 'Łódź', salaryMin: "3000", salaryMax: "4000", currency: 'zł', company: "Vistex Poland CEE",
        desc: "A world leader in IT outsourcing is looking for a new passionate JavaScript developer to help us change the world. If you think you fit all the description below be sure to contact us!\n Requirements: \n - JavaScript\n - Angular 4\n - ASP .NET\nPerks: - praca w młodym, dynamicznym zespole (zatrudniamy studentów i mamy w chuj dużą rotację)\n - karta multi-sport\n - MediCover\n - płacone w teminie wow", link: 'http://wp.pl'},
    );

    this.setState({
      offers: loadedOffers.reverse()
    })
  };
  componentDidMount() {
    this._loadJobOffers();
  }
  render () {
    const { offers } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <AppLogo size={"small"}/>
        </View>
        <OffersSlider offers={offers}/>
      </View>
    )
  }
}
