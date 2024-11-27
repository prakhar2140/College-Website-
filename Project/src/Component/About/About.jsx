import './About.css'
import about_img from '../../assets/about.png'
import play_img from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} className='about-img' />
                <img src={play_img} className='play-icon' />
            </div>
            <div className='about-right'>
                <h3>ABOUT COLLEGE</h3>
                <h2>Nurturing tommorow Leader Today</h2>
                <p>Embark on a transformative educatiol joueney with our
                    University comprehensive education programs. Our cutting-edge
                    curriculum is designed to empower student with the knowledge,
                    skills, and experiences needed to excel in the dynamic field of
                    education.</p>
                <p>With a focus on innovation, hands-on learning, and personalized
                    mentorship, our program prepare aspiring education to make a
                    meaningful impact in classrooms, schools, and communities.</p>
                <p>Whether you aspire to become a teacher, administrator,
                    counselor, or educational leader, our diverse range of programs
                    offers the perfect pathway to achieve yours goals and unlock your
                    full potentional in shaping the future of education.</p>

            </div>
        </div>
    )
}

export default About
