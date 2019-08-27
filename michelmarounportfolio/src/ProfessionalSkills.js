import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';

export default class ProfessionalSkills extends React.Component{
    render(){
        return(
            <div class="col-sm-12 col-md-6">
                        <div class="mh-professional-skills wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                            <h3>Professional Skills</h3>
                            <ul class="mh-professional-progress" >
                                <li>
                                    <div class="mh-progress mh-progress-circle" data-progress="95"><CircularProgressbar value={95} /></div>
                                    <div class="pr-skill-name">Communication</div>
                                </li>
                                <li>
                                    <div class="mh-progress mh-progress-circle" data-progress="55"><CircularProgressbar value={80} /></div> 
                                    <div class="pr-skill-name">Team Work</div>
                                </li>
                                <li>
                                    <div class="mh-progress mh-progress-circle" data-progress="86"><CircularProgressbar value={86} /></div>
                                    <div class="pr-skill-name">Project Management</div>
                                </li> 
                                <li>
                                    <div class="mh-progress mh-progress-circle" data-progress="80"><CircularProgressbar value={80} /> </div>
                                    <div class="pr-skill-name">Creativity</div>
                                </li>
                            </ul>
                        </div>
                    </div>
        )
    }
}