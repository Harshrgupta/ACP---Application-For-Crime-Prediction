import './homepage.styles.scss';
import MenuContainer from '../../components/menu-container/menu-container.component'
import React from 'react';
import Contact from '../../components/contact/contact';
import SearchBox from '../../components/search-bar/search-bar';

const DATA =[];

class Homepage extends React.Component
{
    constructor(){
        super();
        this.state = {
            items:DATA,
        }

    }
   render ()
    { return (
            <div className="section-container">
                <div className="sections" >
                <SearchBox />
                </div>
                <div className="sections" id="ipcs">
                    <MenuContainer items={this.state.items} title={'IPCs'} link='branch'/>
                </div>
                
                <div className="sections" id="about-us">
                    <div className="section-heading">about us</div>
                </div>
                <div className="sections" id="contact-us">
                    <Contact/>
                </div>
            </div>
        )
    }
}

export default Homepage;