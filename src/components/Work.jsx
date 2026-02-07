import { ColumnCard } from "./ColumnCard";

export const Work = () => {
    return (
        <>
            <div id="work" className="non-centered-scrollable-section page-content-container-1000">
                <div className="passage-text-header">Work</div>
                <div className="passage-text-left">
                    Since 2024, I have been working for <a className="hover-image-text" href="https://ardx.net/" target="_blank" rel="noopener noreferrer">ARDX</a>, a CMMI-SVC level 5 management and technology consulting firm that serves as an Application Development Organization (ADO) for the Centers for Medicare & Medicaid Services (CMS).
                    As a software developer, my primary responsibility is maintaining and developing REGTAP, an <a className="hover-image-text" href="https://en.wikipedia.org/wiki/Amazon_Web_Services" target="_blank" rel="noopener noreferrer">AWS</a>-integrated <a className="hover-image-text" href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank" rel="noopener noreferrer">LAMP</a>-stack web application which supports over 180,000 users. 
                </div>
                <img className="rounded-image w-7/8 h-auto" src='/REGTAP.png'></img>
                <div className="passage-text-left">
                    I am responsible for developing hotfixes and releases by collaborating with testers, analysts, and technical leaders to deliver solutions in a complex framework-less legacy codebase, while supporting business development proposals, maintaining compliance (<a className="hover-image-text" href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer">508</a>, <a className="hover-image-text" href="https://www.nist.gov/" target="_blank" rel="noopener noreferrer">NIST</a>, <a className="hover-image-text" href="https://www.fedramp.gov/" target="_blank" rel="noopener noreferrer">FedRAMP</a>), and responding to client demands, for example:
                </div>
                <ColumnCard
                    title=""
                    className="card-wide"
                    description={[
                        // read scalability with read replicas and caching
                        "Optimized file synchronization between application servers and S3 by leveraging AWS Lambda", // <- remove, probably
                        // database upgrade and audit
                        // Refactored legacy PHP scripts into JavaScript for modern client-server request handling, significantly reducing server load while preserving backend validations.
                        "Refactored legacy code by moving client-side logic to the browser, reducing server load while preserving final backend validation",
                        "Enhanced query performance and enforced constraints to maintain data integrity and prevent duplicates in parallel operations", // <- remove
                        "Strengthened defenses for security vulnerabilities including custom CSV injection protection and CSRF protection via synchronizer tokens", // <- rewrite
                        "Modernized page design and layout, ensuring 508 accessibility compliance",
                        "Implemented git strategies to optimize ticket-to-release workflow, adopted as team standard"
                    ]}
                />
            </div>
        </>
    )
};