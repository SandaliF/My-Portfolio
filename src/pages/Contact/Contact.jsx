// import React from 'react';
// import './Contact.css'; 
// import HeadingText from '../../components/HeadingText/HeadingText'

// export default function ContactMe() {
//     return (
//         <section className="contact-me">
//             <HeadingText title={'Contact'} titlePrimary={'Me'}/>
//             <p>If you have any questions or would like to connect, feel free to reach out!</p>
//             <div className="contact-info">
//                 <div className="contact-item">
//                     <h3>Email</h3>
//                     <a href="mailto:sandalif.21@cse.mrt.ac.lk" className="contact-link">sandalif.21@cse.mrt.ac.lk</a>
//                 </div>
//                 <div className="contact-item">
//                     <h3>LinkedIn</h3>
//                     <a href="https://www.linkedin.com/in/sandali-malshika-fernando/" target="_blank" rel="noopener noreferrer" className="contact-link">
//                         LinkedIn Profile
//                     </a>
//                 </div>
//                 <div className="contact-item">
//                     <h3>GitHub</h3>
//                     <a href="https://github.com/SandaliF" target="_blank" rel="noopener noreferrer" className="contact-link">
//                         GitHub Profile
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }


import React from 'react';
import './Contact.css'; 
import HeadingText from '../../components/HeadingText/HeadingText';

export default function ContactMe() {
    return (
        <section className="contact-me">
            <HeadingText title={'Contact'} titlePrimary={'Me'} />
            <p>If you have any questions or would like to connect, feel free to reach out!</p>
            <div className="contact-info">
                <div className="contact-item">
                    <h3>Email</h3>
                    <a href="mailto:sandalif.21@cse.mrt.ac.lk" className="contact-link">sandalif.21@cse.mrt.ac.lk</a>
                </div>
                <div className="contact-item">
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/sandali-malshika-fernando/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        LinkedIn Profile
                    </a>
                </div>
                <div className="contact-item">
                    <h3>GitHub</h3>
                    <a href="https://github.com/SandaliF" target="_blank" rel="noopener noreferrer" className="contact-link">
                        GitHub Profile
                    </a>
                </div>
            </div>
        </section>
    );
}
