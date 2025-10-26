
export const Gabebook = ({ className }) => {
    return (
        <div className={className}>
             <div className="passage-text">
                TheGabebook (<a className="hover-image-text" href="https://github.com/GabrielWelvaert/TheGabebook" target="_blank" rel="noopener noreferrer">GitHub</a>) is a social platform that I built to practice full-stack web development using vanilla HTML, CSS, JavaScript, Node/Express.js, Model-View-Controller <a className="hover-image-text" href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank" rel="noopener noreferrer">(MVC)</a> adherence, <a className="hover-image-text" href="https://en.wikipedia.org/wiki/REST" target="_blank" rel="noopener noreferrer">RESTful</a> design, and Amazon Web Services <a className="hover-image-text" href="https://en.wikipedia.org/wiki/Amazon_Web_Services" target="_blank" rel="noopener noreferrer">(AWS)</a> hosting.
                It includes profiles, posting, friendships, messaging, commenting, liking, and notifications.
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-image w-[80%]" src="/TheGabebook.png"></img>    
            </div>
            <div className="passage-text">
                MVC was used to keep the project organized, modular, and extensibile through a clear separation of concerns. Node/Express.js makes it easy to create routes, controllers, and models to support this design:
                <div className="flex flex-col justify-center items-center">
                    <img className="rounded-image" src="/MVC.drawio.png"></img>    
                </div>
            </div>
            <div className="passage-text">
                For example, let's see how liking a post is done with MVC:
            </div>
            <div className="grid grid-cols-[46%_54%] items-start justify-around gap-2">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">
                        On the client side, the post view is built from database data and includes a like button that sends an HTTPS request to the likePost endpoint:
                    </div>
                    <img className="rounded-image" src="/likePostUI.png"></img>
                    <img className="rounded-image" src="/likePostEventHandler.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">
                        On the server, the Express.js router maps this endpoint to a method of the LikesController, which handles the request by accessing various model methods:
                    </div>
                    <img className="rounded-image" src="/likePostRouter.png"></img>
                    <img className="rounded-image" src="/likePostController.png"></img>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="passage-text">Once the response is received by the client, the view will update by directly modifying <a className="hover-image-text" href="https://en.wikipedia.org/wiki/Document_Object_Model" target="_blank" rel="noopener noreferrer">DOM</a> elements:</div>
                <img className="rounded-image" src="/unlikePostUI.png"></img>    
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="passage-text">
                    Controllers aren't restricted to their own models; the LikesController uses both the LikesModel and PostModel.
                    Model methods are intentionally simple so they can be called from any controller, which greatly improves code extensibility. 
                    Here are a few examples:
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img className="rounded-image w-150" src="/model1.png"></img>
                    <img className="rounded-image w-150" src="/model2.png"></img>
                </div>
            </div>
            <div className="passage-text">
                The majority of user-facing features (profile customization, posting, commenting, etc.) follow this same MVC request/response architecture:
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-image w-[80%]" src="/profile.png"></img>    
            </div>
            <div className="passage-text">
                 Rather than reviewing the same pattern in those features, we'll pivot to examining other internal mechanisms of the application.
            </div>
            <div className="passage-text">
                Session-based authentication was implemented using the <a className="hover-image-text" href="https://expressjs.com/en/resources/middleware/session.html" target="_blank" rel="noopener noreferrer">express-session</a> middleware.
                On login, the user receives a session cookie that we can compare to what we have in the session store to authenticate actions:
                <div className="grid grid-cols-2 items-center justify-around gap-2">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <img className="rounded-image" src="/sessionMiddleWare.png"></img>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <img className="rounded-image" src="/session.drawio.png"></img>
                    </div>
                </div>
            </div>
            <div className="passage-text">
                In other words, we can identify a user on the server side by simply checking req.session:
                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="rounded-image w-[60%]" src="/req.session.userId.png"></img>
                </div>
            </div>
            <div className="passage-text">
                Authorization is enforced through a friendship check before processing inter-user requests.
                Even though the views to request these actions are only visible if the friendship exists, the system still enforces this check for these interactions.
                Since this behavior is needed across many routes, it was implemented using custom middleware that executes before controller logic:
                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="rounded-image" src="/friendshipmiddleware.png"></img>
                </div>
            </div>
            <div className="passage-text">
                When applied to a route, the middleware runs before the controller and blocks the request if validation fails:
                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="rounded-image" src="/friendshipmiddlewareroute.png"></img>
                </div>
            </div>
            <div className="passage-text">
                As you can see, middleware are useful for generic, pre-controller logic that can be applied to any route. 
                For this reason, I used the <a className="hover-image-text" href="https://www.npmjs.com/package/csurf" target="_blank" rel="noopener noreferrer">csurf</a> middleware to provide <a className="hover-image-text" href="https://en.wikipedia.org/wiki/Cross-site_request_forgery" target="_blank" rel="noopener noreferrer">CSRF</a> protection on POST routes by issuing a secret token and validating it on each request.
            </div>
            <div className="passage-text">
                csurf uses a cookie to store a per-client secret for token validation:
                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="rounded-image" src="/csurf.png"></img>
                </div>
            </div>
            <div className="grid grid-cols-2 items-start justify-around gap-6">
                <div className="passage-text">
                    A token is issued to clients through a dedicated route:
                    <div className="flex flex-col items-center justify-center gap-1">
                        <img className="rounded-image" src="/csurfget.png"></img>
                    </div>
                </div>
                <div className="passage-text">
                    That token must be included in request headers for POST routes:
                    <div className="flex flex-col items-center justify-center gap-1">
                        <img className="rounded-image" src="/csrflike.png"></img>
                    </div>
                </div>
            </div>
            <div className="passage-text">
                As with the friendship middleware, the csurf middleware runs before the controller and rejects invalid requests:
                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="rounded-image" src="/likePostRouterFull.png"></img>
                </div>
            </div>
            <div className="passage-text">
                Additional security measures were implemented:
            </div>
            <div className="grid grid-cols-2 items-start justify-center gap-12">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text font-bold"><a className="hover-image-text" href="https://en.wikipedia.org/wiki/SQL_injection" target="_blank" rel="noopener noreferrer">SQL Injection:</a></div>
                    <div className="passage-text">Parameterized queries (using ?) prevent SQL injection by stopping input from altering the query structure:</div>
                    <img className="rounded-image" src="/model2.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text font-bold"><a className="hover-image-text" href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noopener noreferrer">XSS:</a></div>
                    <div className="passage-text">This <a className="hover-image-text" href="https://www.npmjs.com/package/xss?activeTab=dependents" target="_blank" rel="noopener noreferrer">xss package</a> was used on the server side to stop user-input from being stored or interpreted as HTML:</div>
                    <img className="rounded-image" src="/xss.png"></img>
                </div>
            </div>
            <div className="passage-text">
                Instant client-to-client behavior was implemented using websockets (via <a className="hover-image-text" href="https://socket.io/" target="_blank" rel="noopener noreferrer">Socket.io</a>), which allows users to receive live notifications and messages.
                This is done by maintaining a map of active users and relaying data between them for specific actions:
                <div className="flex flex-col items-center justify-center gap-2">
                    <img className="rounded-image w-[80%]" src="/websocket.drawio.png"></img>
                    <img className="rounded-image w-[70%]" src="/msg-final.gif"></img>
                </div>
            </div>
            <div className="passage-text">
                production implementation: AWS (ec2, email, route58 blah blah!)
            </div>
            <div className="passage-text">
                This project was fun blah blah if I continued with this project section ie pagination, lazy loading, group messaging.
            </div>
            <div className="passage-text mb-10">
                <a href="#projects" className="interactable-text focus:outline-none cursor-pointer" onClick={() => setTimeout(() => setProject("This Website"), 1250)}>
                    Click To View Next Project
                </a>    
            </div>
        </div>
    )
}