export const Work = () => {
    return (
        <>
            <div id="work" className="page-content-container-centered-1000">
                <div className="passage-text-header">Work Experience</div>
                <div className="passage-text">
                    Since 2024, I have been working for <a className="hover-image-text" href="https://ardx.net/" target="_blank" rel="noopener noreferrer">ARDX</a>, a CMMI-SVC level 5 management and technology consulting firm that serves as an Application Development Organization (ADO) for the Centers for Medicare & Medicaid Services (CMS).
                    As a software developer, my primary responsibilty is maintaining and developing REGTAP, our federal web application which supports over 180,000 users. 
                </div>
                <img className="full-image" src='/REGTAP.png'></img>
                <div className="passage-text">
                    Although I am technically a junior, I've had the great opportunity to serve as the primary developer for this LAMP stack application (RHEL9; AWS hosted), handling the bulk of the development work through multiple major releases and hotfixes. I've played a key role in guiding the team through penetration testing and audits, ensuring our systems meet security & accessibility compliance standards and that we demonstrate competency for contract recompete purposes. I regularly communicate with leaders, business analysts, and testers, explaining the code and outlining what needs to be done to maintain and improve the system.
                </div>
                <div className="passage-text">
                    I leverage tools such as Git, GitHub, Fortify, AWS, Docker, and VSCode to efficiently deliver high-quality & maintainable solutions. My current aspirations are to migrate legacy PHP scripts to Node.js microservices to modernize the system and ensure it remains future-proof, and to move our CI/CD pipeline and monitoring processes fully to AWS.
                </div>
            </div>
        </>
    )
};