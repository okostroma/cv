import React from 'react'
import './App.css';
import mainPhoto from './mainPhoto.png';
import mailIcon from './icons/mail-icon.svg'
import behanceIcon from './icons/behance-icon.svg'
import phoneIcon from './icons/phone-icon.svg'
import locationIcon from './icons/location-icon.svg'
import CV from './Curriculum Vitae..png'
import figma from './icons/figma.svg'
import ps from './icons/ps.svg'
import ai from './icons/ai.svg'
import ae from './icons/ae.svg'
import ux from './icons/ux.svg'
import html from './icons/html.svg'
import css from './icons/css.svg'
import eng from './icons/eng.svg'
import lin from './icons/linkedin-icon.svg'
import experience from './Experience.svg'
import education from './education.svg'
import interests from './interests.svg'
import behanceBlack from './icons/behance-black.svg'
import dribble from './icons/dribble.svg'
import awwwards from './icons/awwwards.svg'

function App() {
    return (
        <div className="App">
            <div className='App-mainPhoto'>
                <img className='mainImg' src={mainPhoto} alt=''/>
                <div className='grey'></div>
                <div className='profile'>
                    <img className='cv' src={CV} alt='cv'/>
                    <p className='name'>oxana kostroma</p>
                    <p className='job'> UI/UX Designer</p>
                    <div className="contacts">
                        <div className='contactsItem'>
                            <img className='mailIcon' src={mailIcon} alt='mail-icon'/>
                            <p>oxakost@gmail.com</p>
                        </div>
                        <div className='contactsItem'>
                            <img className='mailIcon' src={behanceIcon} alt='behanceIcon'/>
                            <a href='https://www.behance.net/oxakost958d'>behance.net/oxakost958d</a>
                        </div>
                        <div className='contactsItem'>
                            <img className='mailIcon' src={phoneIcon} alt='phoneIcon'/>
                            <p>+375 (29) 927-20-96</p>
                        </div>
                        <div className='contactsItem'>
                            <img className='mailIcon' src={locationIcon} alt='locationIcon'/>
                            <p>Minsk, Belarus</p>
                        </div>
                    </div>

                    <div className='aboutMe'>
                        <p className='title'>about me</p>
                        <p className='titleDescription'>I am self-motivated, good-tempered and ambitious UI/UX Designer
                            with strong skills in UI/UX, typography, HTML5, CSS3, etc. I have experience with
                            Figma, Photoshop, Illuctrator, Adobe After Effects, React, SPA and etc. </p>

                    </div>
                    <div className='skills'>
                        <p className='title'>skills</p>
                        <div className='skillsContainer'>
                            <div className='skillsItem'>
                                <p>Figma</p>
                                <img className='figma' src={figma} alt='figma'/>
                            </div>
                            <div className='skillsItem'>
                                <p>Ps</p>
                                <img className='figma' src={ps} alt='ps'/>
                            </div>
                            <div className='skillsItem'>
                                <p>Ai</p>
                                <img className='figma' src={ai} alt='ai'/>
                            </div>
                            <div className='skillsItem'>
                                <p>Ae</p>
                                <img className='figma' src={ae} alt='ae'/>
                            </div>
                            <div className='skillsItem'>
                                <p>UX</p>
                                <img className='figma' src={ux} alt='ux'/>
                            </div>
                            <div className='skillsItem'>
                                <p>HTML</p>
                                <img className='figma' src={html} alt='html'/>
                            </div>
                            <div className='skillsItem'>
                                <p>CSS</p>
                                <img className='figma' src={css} alt='css'/>
                            </div>
                            <div className='skillsItem'>
                                <p>Typo</p>
                                <img className='figma' src={css} alt='typo'/>
                            </div>
                            <div className='skillsItem'>
                                <p>Usability</p>
                                <img className='figma' src={css} alt='usability'/>
                            </div>
                            <div className='skillsItem'>
                                <p>English</p>
                                <img className='figma' src={eng} alt='eng'/>
                            </div>
                        </div>
                    </div>

                    <div className="contacts cFooter">
                        <p className='title contactsTitle'>contacts</p>

                        <div className='contactsItem'>
                            <img className='mailIcon' src={mailIcon} alt='mail-icon'/>
                            <p>oxakost@gmail.com</p>
                        </div>
                        <div className='contactsItem'>
                            <img className='mailIcon' src={behanceIcon} alt='behanceIcon'/>
                            <a href='https://www.behance.net/oxakost958d'>behance.net/oxakost958d</a>
                        </div>
                        <div className='contactsItem'>
                            <img className='mailIcon' src={phoneIcon} alt='phoneIcon'/>
                            <p>+375 (29) 927-20-96</p>
                        </div>
                        <div className='contactsItem'>
                            <img className='mailIcon' src={lin} alt='lin'/>
                            <a href='https://www.linkedin.com/in/oxana-kostroma/'>linkedin.com/in/oxana-kostroma/</a>
                        </div>
                    </div>

                    <div className='footer'>
                        <p className='title'>Looking forward
                            <br/> to work with you! </p>

                    </div>


                </div>

                <div className='bioContainer'>
                <div className='bio'>
                    <img className='experienceImg' src={experience} alt='exp'/>
                    <div className='experienceContainer'>
                        <div className='experienceItem'>
                            <p className='period'>2016 - 2020</p>
                            <p className='place'>BNB-Bank</p>
                            <p className='vacancy'>Economist of 2nd category</p>

                        </div>
                        <div className='experienceItem'>
                            <p className='period'>2019 - 2021</p>
                            <p className='place'>Freelancer</p>
                            <p className='vacancy'>Front-end Developer</p>

                        </div>
                        <div className='experienceItem'>
                            <p className='period'>2020 - 2021</p>
                            <p className='place'>Abiatec Software Development Company</p>
                            <p className='vacancy'>Front-end Developer</p>

                        </div>
                        <div className='experienceItem'>
                            <p className='period'>2021 - Now</p>
                            <p className='place'>Freelancer</p>
                            <p className='vacancy'>UI/UX Designer</p>

                        </div>
                        <div className='line'>

                        </div>


                    </div>

                </div>
                    <div className='bio'>
                    <img className='experienceImg' src={education} alt='education'/>
                    <div className='experienceContainer'>
                        <div className='experienceItem'>
                            <p className='period'>2013 - 2017</p>
                            <p className='place'>Belarusian State Economic University</p>
                            <p className='vacancy'>Bachelor’s degree in Financial management</p>

                        </div>
                        <div className='experienceItem'>
                            <p className='period'>2017 - 2018</p>
                            <p className='place'>Belarusian State Economic University</p>
                            <p className='vacancy'>Master’s degree in Financial management</p>

                        </div>
                        <div className='experienceItem'>
                            <p className='period'>2019 - 2020</p>
                            <p className='place'>Educational center of High-Tech Park</p>
                            <p className='vacancy'>Web-site developer</p>

                        </div>
                        <div className='experienceItem'>
                            <p className='period'>2020</p>
                            <p className='place'>IT-incubator.by</p>
                            <p className='vacancy'>Front-end developer</p>

                        </div>
                        <div className='experienceItem'>
                            <p className='period'>2021</p>
                            <p className='place'>Upward School</p>
                            <p className='vacancy'>UI/UX Designer</p>

                        </div>
                        <div className='line'>

                        </div>


                    </div>

                </div>
                    <div className='bio'>
                    <img className='experienceImg' src={interests} alt='interests'/>
                    <div className='experienceContainer last'>
                        <div className='experienceItem'>
                            <p className='interest'>BOOKS</p>
                            <p className='vacancy'>Steve Krug «Don't make me think»</p>
                            <p className='vacancy'>Maxim Ilyahov «Write, abridge»</p>
                            <p className='vacancy'>Ethan Marcotte «Responsive Web Design»</p>

                        </div>
                        <div className='experienceItem'>
                            <p className='interest'>MEDIA</p>
                            <a href='https://medium.com/topic/design' className='vacancy'>https://medium.com/topic/design</a>
                            <a href='https://designpub.ru/' className='vacancy'>https://designpub.ru/</a>
                            <a href='https://ux.pub/' className='vacancy'>https://ux.pub/</a>

                        </div>
                        <div className='experienceItem'>
                            <p className='interest'>INSPIRATION</p>
                            <div className='inspirationIcons'>
                                <a href='https://www.behance.net/'> <img className='behanceBlack' src={behanceBlack} alt='behance'/> </a>
                                <a href='https://dribbble.com/'> <img className='dribble' src={dribble} alt='dribble'/> </a>
                                <a href='https://www.awwwards.com/'> <img className='awwwards' src={awwwards} alt='awwwards'/> </a>

                            </div>


                        </div>


                    </div>

                </div>

                </div>



            </div>

        </div>
    );
}

export default App;
