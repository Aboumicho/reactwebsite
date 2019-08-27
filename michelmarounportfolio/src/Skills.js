import React from 'react'
import TechnicalSkills from './TechnicalSkills';
import ProfessionalSkills from './ProfessionalSkills';

export default class Skills extends React.Component{
    render(){
        return( 
            <section class="mh-skills" id="mh-skills">
            <div class="container">
                <div class="row section-separator">
                    <div class="section-title text-center col-sm-12">
            
                    </div>
                    <TechnicalSkills/>
                    <ProfessionalSkills/>
                </div>
            </div>
        </section>
        )
    }
}