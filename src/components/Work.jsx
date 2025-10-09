import { ColumnCard } from "./ColumnCard";

export const Work = () => {
    return (
        <>
            <div id="work" className="non-centered-scrollable-section page-content-container-1000">
                <div className="passage-text-header">Work</div>
                <div className="passage-text">
                    Since 2024, I have been working for <a className="hover-image-text" href="https://ardx.net/" target="_blank" rel="noopener noreferrer">ARDX</a>, a CMMI-SVC level 5 management and technology consulting firm that serves as an Application Development Organization (ADO) for the Centers for Medicare & Medicaid Services (CMS).
                    As a software developer, my primary duty is maintaining and developing REGTAP, an AWS-hosted LAMP-stack federal web application which supports over 180,000 users. 
                </div>
                <img className="rounded-image w-7/8 h-auto" src='/REGTAP.png'></img>
                <div className="passage-text">
                    I am responsible for developing hotfixes and releases by collaborating with testers, analysts, and technical leaders to deliver solutions in a complex framework-less legacy codebase, while supporting contract re-compete efforts, maintaining compliance, and responding to client demands, for example:
                </div>
                <ColumnCard
                    title=""
                    className="card-wide"
                    description={[
                        "Optimized file synchronization between application servers and S3 by leveraging AWS Lambda, reducing CPU usage and server load by orders of magnitude",
                        "Designed and implemented Git utilization strategies to optimize ticket-to-release workflow, adopted as team standard",
                        "Implemented defenses for security vulnerabilities including custom CSV injection protection and CSRF protection via synchronizer tokens",
                        "Refactored legacy code by relocating client-side logic from the server to the browser, reducing unnecessary server load while preserving final backend validation",
                        "Modernized page design and layout, ensuring 508 accessibility compliance",
                        "Implemented constraints and query optimizations to improve performance, maintain data integrity, and prevent duplicates in parallel, lag-heavy operations",
                    ]}
                />
            </div>
        </>
    )
};