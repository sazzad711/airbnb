import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import CoronaVirus from './CoronaVirus'


// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <CoronaVirus />
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            
            <div className='home__section'>
            <Card
                src="https://cdn.pixabay.com/photo/2015/12/08/00/27/cabin-1081733__340.jpg"
                title="Live in a Sherwood Forest"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://cdn.pixabay.com/photo/2021/01/13/13/46/house-5914171__340.jpg"
                title="Explore Winter Wonderland"
                description="Enjoy the amazing sights of Mason Mountain with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://cdn.pixabay.com/photo/2016/11/21/14/25/architecture-1845689__340.jpg"
                title="1 Bedroom apartment in James Town"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1616046913255-344e75b5a21d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGludGVyaW9yJTIwZGVjb3JhdGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="4 Bedroom Flat in Liverpool"
                description="Elegent house to live and explore the city"
                price="£100/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1616046619793-7e4badf3fe1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGludGVyaW9yJTIwZGVjb3JhdGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Villa in Manchester"
                description="Enjoy the amazing scene of Manchester from here"
                price="£250/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1616046913255-344e75b5a21d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGludGVyaW9yJTIwZGVjb3JhdGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Studio flat in Birmingham"
                description="Stunning house in the heart of Birmingham"
                price="£90/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286__340.jpg"
                title="2 Bedroom Flat in Oxford"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£150/night"
            />
            <Card
                src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221__340.jpg"
                title="Penthouse in Nottingham"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245__340.jpg"
                title="3 Bedroom villa"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£170/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="4 Bedroom Flat in Newcastle"
                description="Stunning view of the beachside in Sunny Newcastle"
                price="£250/night"
            />
            <Card
                src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Villa in Cardiff"
                description="Enjoy the amazing sights of Cardiff with this stunning villa"
                price="£180/night"
            />
            <Card
                src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="3 Bedroom villa in Everton"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£270/night"
            />
            </div>
            
            
        </div>
    )
}

export default Home
