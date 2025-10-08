import { ColumnCard } from "./ColumnCard";

export const Work = () => {
    return (
        <>
            <div id="work" className="page-content-container-centered-1000">
                <div className="passage-text-header">Work</div>
                <div className="passage-text">
                    Since 2024, I have been working for <a className="hover-image-text" href="https://ardx.net/" target="_blank" rel="noopener noreferrer">ARDX</a>, a CMMI-SVC level 5 management and technology consulting firm that serves as an Application Development Organization (ADO) for the Centers for Medicare & Medicaid Services (CMS).
                    As a software developer, my primary responsibility is maintaining and developing REGTAP, an AWS-hosted LAMP-stack federal web application which supports over 180,000 users. 
                </div>
                <img className="rounded-image w-7/8 h-auto" src='/REGTAP.png'></img>
                <div className="passage-text">
                    I've written the majority of code for hotfixes and major releases, collaborating with testers, analysts, and technical leaders to deliver solutions in a complex framework-less legacy codebase, while supporting contract re-compete efforts, compliance, and client satisfaction, for example:
                </div>
                {/* <div className="passage-text">
                    <div className="flex flex-col gap-2">
                        <ul className="list-none space-y-2">
                            <li>&#9679; Remediated critical security issues (POA&Ms) including contextualized CSV attack protections and synchronizer-token CSRF mitigation on public pages.</li>
                            <li>&#9679; Optimized legacy code by converting server-side client logic to modern client-side JavaScript, reducing server hits while preserving final backend checks.</li>
                            <li>&#9679; Modernized page design and layout, ensuring 508 accessibility compliance.</li>
                            <li>&#9679; Implemented constraints and query optimizations to maintain data integrity and prevent duplicates in parallel, lag-heavy operations.</li>
                            <li>&#9679; Designed and implemented Git utilization strategy to optimize ticket-to-release workflow, adopted as team standard.</li>
                        </ul>
                    </div>
                </div> */}
                <ColumnCard
                    title=""
                    className="w-[900px]"
                    description={[
                        "Remediated critical security issues (POA&Ms) including contextualized CSV attack protections and synchronizer-token CSRF mitigation on public pages",
                        "Optimized legacy code by converting server-side client logic to modern client-side JavaScript, reducing server hits while preserving final backend checks",
                        "Modernized page design and layout, ensuring 508 accessibility compliance",
                        "Implemented constraints and query optimizations to maintain data integrity and prevent duplicates in parallel, lag-heavy operations",
                        "Designed and implemented Git utilization strategy to optimize ticket-to-release workflow, adopted as team standard"
                    ]}
                />
            </div>
        </>
    )
};