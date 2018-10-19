import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


import "./About.css"


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 53.548729, lng: 23.578079 }}
  >
    {props.isMarkerShown && <Marker position={{ lat:  53.548729, lng:  23.578079 }} />}
  </GoogleMap>
))


export const About = () => {
    return (
        <div>
            <section className='container'>
                <p className='icon'><i class="fas fa-child fa-7x"></i></p>
                <h2 className='stage-header'>Narodziny</h2>
                <p className='stage-description'>Pewnego jesiennego listopadowego dnia 1988 roku, gdy internet jeszcze nie dotarł do Polski, przyszła na świat dziewczynka. To byłam ja…</p>
            </section>
            <section className='container'>
                <p className='icon'><i class="fas fa-map-marker-alt fa-7x"></i></p>
                <h2 className='stage-header'>Tutaj dorastałam</h2>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />          
            </section>
            <section className='container'>
                <p className='icon education-icon'><i class="fas fa-user-graduate fa-7x"></i></p>
                <h2 className='stage-header'>Edukacja</h2>
                <p className='stage-description'>
                    Od początku mojej szkolejnej edukacji najbardziej interesowały mnie przedmioty ścisłe, w szczególności królowa nauk – matematyka. Polubiłam cyferki na tyle, że będąc jeszcze w gimnazjum zapragnęłam zostać ksiegową. Gimnazjum to był szczególny etap w moim życiu również ze względu na to, że po raz pierwszy miałam styczność z komputerem. Tak, pierwsza lekcja informatyki w moim życiu. Niesamowite doświadczenie wtedy :-) Poznawanie Worda, Painta, Excela... Nie miałam wtedy pojęcia jakie możliwości daje komputer i internet, ale ogromnie mi się to podobało.
                </p>
            </section>
            <section className='container'>
                <p className='icon briefecase-icon'><i class="fas fa-briefcase fa-7x"></i></p>
                <h2 className='stage-header'>Praca</h2>
                <p className='stage-description'>Swoje pierwsze prace podjełam już w trakcie nauki. Doświadczyłam pracy w bankowości, w księgowości, w handlu, w administracji, w firmie branży IT. Obecnie szukam pracy jako Junior Front-end Developer</p>
            </section>
            <section  className='container'>
                <p className='icon briefecase-icon'><i class="fas fa-camera-retro fa-7x"></i></p>
                <h2 className='stage-header'>Fotografia</h2>
                <p className='stage-description'>Nie pamiętam od kiedy lubię robić zdjęcia, może to się ma we krwi :) Kilka lat temu dostałam swoją pierwszą lustrzankę i wtedy na dobre rozpoczęła się moja przygoda z fotografią. Od tamtej pory zabieram ją ze sobą na każdy wyjazd. Niektóre z moich zdjęć możesz obejrzeć <a href="#/photography">tutaj</a></p>
            </section>
            <section className='container'>
                <h2 className='stage-header'>cdn.</h2>
            </section>
        </div>
    )
};