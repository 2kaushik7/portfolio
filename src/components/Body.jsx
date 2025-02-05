import kaushik from '../images/kaushik-in.jpeg'
import java from '../images/java.png'
import spring from '../images/spring.svg'
import k8s from '../images/k8s.svg'
import docker from '../images/docker.svg'
import git from '../images/git.svg'
import github from '../images/github.svg'
import jenkins from '../images/jenkins.svg'
import maven from '../images/maven.svg'
import bitbucket from '../images/bitbucket.svg'
import terraform from '../images/terraform.svg'
import ansible from '../images/ansible.svg'
import tomcat from '../images/tomcat.svg'
import mysql from '../images/mysql.svg'
import oracle from '../images/oracle.svg'
import ubuntu from '../images/ubuntu.svg'
import react from '../images/react.svg'
import nginx from '../images/nginx.svg'
import linkedin from '../images/linkedin.svg'
import fb from '../images/facebook.svg'


function Body(){
    return (
        <div  id="about"  className="mainBody">
            <div className="imageBase">
                <img src={kaushik} className="image" alt="alt image"/>
            </div>
            <div className="about">
                <div className="about-1">
                    <h2>
                        I am
                    </h2>
                    <p>
                        Full stack developer experienced in developing java applications, spring boot microservices.
                        Interests are UI development and devops related skills. Certified Kubernetes Application developer.
                    </p>
                </div>
                <div className="about-2"><h2>
                    I am never
                </h2>
                    <p>
                        Full, always hungry to learn more. Creating new web applications. Troubleshooting is always my favorite.
                        Never let your team, company and family down. One thing at a time kind of mentality. Always eye on the prize.
                    </p></div>
            </div>
            <div id="skills" className="skills">
                <div className="skill">
                    <img className="skillImage" src={java} alt="Java"/>
                    <p>Java</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={spring} alt="Java"/>
                    <p>Spring</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={k8s} alt="Java"/>
                    <p>Kubernetes</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={docker} alt="Java"/>
                    <p>Docker</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={git} alt="Java"/>
                    <p>Git</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={jenkins} alt="Java"/>
                    <p>Jenkins</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={maven} alt="Java"/>
                    <p>Maven</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={bitbucket} alt="Java"/>
                    <p>Bitbucket</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={terraform} alt="Java"/>
                    <p>Terraform</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={ansible} alt="Java"/>
                    <p>Ansible</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={tomcat} alt="Java"/>
                    <p>Tomcat</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={mysql} alt="Java"/>
                    <p>Mysql</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={oracle} alt="Java"/>
                    <p>Oracle</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={ubuntu} alt="Java"/>
                    <p>Ubuntu</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={react} alt="Java"/>
                    <p>React</p>
                </div>
                <div className="skill">
                    <img className="skillImage" src={nginx} alt="Java"/>
                    <p>Nginx</p>
                </div>
            </div>
            <div id="education" className="education">
            <h1>Education</h1>
                <p>2007-2011 | Bachelors of Technology in Electrical and Electronics Engineering; </p>
                <p>Sept 2024 | Completed Certified Kubernetes Application Developer </p>
                <img src="/src/images/ckad.png" alt="ckad"/>
            </div>
            <div id="projects" className="projects">
                <h2>Projects</h2>
                <h3>E2Open - Jan 2022 - Apr 2024 – Software Engineer </h3>
                <ul>
                    <li>Developed and maintained microservices using Spring Boot and AWS.</li>
                    <li>Implemented REST APIs and integrated with cloud services.</li>
                    <li>Enhanced system performance and scalability.</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
                    <li>Led the migration of legacy systems to microservices architecture.</li>
                </ul>
                <h3>DELL EMC - Nov 2019 - Oct 2021 – Software Engineer - II </h3>
                <ul>
                    <li>Developed Digital Twin Service for enhanced asset monitoring and simulation.</li>
                    <li>Created Dockerfiles and YAML files for Kubernetes orchestration.</li>
                    <li>Deployed applications on Pivotal Cloud Foundry.</li>
                    <li>Achieved high code coverage and quality through rigorous testing.</li>
                    <li>Developed and maintained microservices using Spring Boot.</li>
                    <li>Received Customer Delight award for exceptional service delivery.</li>
                </ul>
                <h3>Tech Mahindra - Jul 2015 – Oct 2019 – Senior Software Engineer </h3>
                <ul>
                    <li>Developed and maintained microservices using Spring Boot.</li>
                    <li>Led the development of GMOX applications for supplier management.</li>
                    <li>Improved application performance through strategic recommendations.</li>
                    <li>Managed deployments across multiple environments.</li>
                    <li>Awarded Bravo and Winning Together awards for outstanding contributions.</li>
                </ul>
                <h3>Mahindra Satyam - June 2011 to January 2012 – Technical Associate </h3>
                <ul>
                    <li>Assisted in the development and support of enterprise applications.</li>
                    <li>Contributed to the successful delivery of client projects.</li>
                </ul>
                <h3>Individual Endeavors</h3>
                <ul>
                    <li>The website you are viewing</li>
                    <li>Quote of the day - created as micro-service using spring boot <a href="https://quoteoftheday.ryu3dsst.co.uk/" target="_blank" rel="noopener noreferrer">Try Me</a></li>
                    <li>Tic-Tac-Toe - created as micro-services using spring boot  <a href="https://tictactoe.ryu3dsst.co.uk/" target="_blank" rel="noopener noreferrer">Try Me</a></li>
                </ul>
            </div>
            <div id="contact" className="contact-me">
                <h3>CONTACT</h3>
                <p>Please don’t hesitate to contact me for more information about my work.</p>
                <p>Email: kavoyager@gmail.com</p>
                <p>Mobile: +44-744-200-4155</p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/sai-surineedi/" target="_blank" rel="noopener noreferrer"><img src={linkedin}/></a>
                    <a href="https://github.com/2kaushik7" target="_blank" rel="noopener noreferrer"><img src={github}/></a>
                    <a href="https://www.facebook.com/trinadh.kaushik/" target="_blank" rel="noopener noreferrer"><img src={fb}/></a>
                </div>
            </div>
        </div>
    );
}

export default Body;