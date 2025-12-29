// Ruta: src/components/Timeline.jsx
import React from 'react';

const Timeline = () => {
    return (
        <section className="timeline-section">
            <div className="timeline-container">
                <div className="timeline-column">
                    <h2>My Education</h2>

                    <div className="timeline-item">
                        <h3>Bachelor’s Degree (In Progress)</h3>
                        <h4>UNAM – FES Acatlán</h4>
                        <span>| Currently studying</span>
                        <p>
                            Bachelor’s degree in Applied Mathematics and Computer Science, focused on
                            problem solving, logical thinking, and software development fundamentals.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h3>High School</h3>
                        <h4>Preparatoria Justo Sierra</h4>
                        <span>| Completed</span>
                        <p>
                            General high school education with emphasis on analytical skills and
                            academic foundations.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h3>High School</h3>
                        <h4>Colegio Estefanía</h4>
                        <span>| Completed</span>
                        <p>
                            Secondary education focused on academic development and discipline,
                            preparing for higher education.
                        </p>
                    </div>
                </div>


                <div className="timeline-column">
                    <h2>My Experience</h2>

                    <div className="timeline-item">
                        <h3>Full Stack Developer</h3>
                        <h4>AC Logistics</h4>
                        <span>| January 2024 – Present</span>
                        <p>
                            Full Stack development for internal logistics platforms, working on web
                            applications, backend services, database management, and process
                            optimization. Focused on building scalable solutions to support operational
                            workflows and improve system efficiency.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h3>Development Analyst</h3>
                        <h4>VCIP Soluciones</h4>
                        <span>| July 2022 – December 2023</span>
                        <p>
                            Analysis and development of software solutions for banking clients such as
                            BBVA, Banorte, and Banco Azteca. Involved in requirements analysis, system
                            development, and maintenance, ensuring reliable and efficient applications
                            aligned with business needs.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h3>Junior Developer</h3>
                        <h4>Contabilízate</h4>
                        <span>| August 2021 – July 2022</span>
                        <p>
                            Junior developer role focused on web application development, bug fixing,
                            and feature implementation. Collaborated with senior developers to enhance
                            existing systems and improve application stability.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h3>Junior Developer</h3>
                        <h4>Beredpoint</h4>
                        <span>| July 2020 – January 2021</span>
                        <p>
                            First professional experience in software development, contributing to web
                            projects, learning best practices, and supporting the development team in
                            building and maintaining applications.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Timeline;