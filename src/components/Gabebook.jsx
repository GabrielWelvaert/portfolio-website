
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
                The majority of user-facing features (profile customization, posting, commenting, etc.) follow this same MVC request/response architecture. Rather than reviewing the same pattern in those features, we'll pivot to other internal mechanisms of the application.
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
                By applying the middleware to a given route, it will execute before the controller is reached. If the middleware rejects the request, then the controller will never be invoked:
                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="rounded-image" src="/friendshipmiddlewareroute.png"></img>
                </div>
            </div>
            <div className="passage-text">
                As you can see, middleware are useful for generic, pre-controller logic that can be applied to any route. For this reason, I implemented CSRF protection using the csurf middleware:
                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="rounded-image" src="/csurf.png"></img>
                </div>
            </div>
            <div className="passage-text">
                This middleware allows me to verify the origin of state-changing (POST) requests. <strong>TODO concise explanation of how it was implemented</strong>
                <div className="grid grid-cols-2 items-center justify-around gap-2">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <img className="rounded-image" src="/csurfget.png"></img>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <img className="rounded-image" src="/.png"></img>
                    </div>
                </div>
            </div>
            <div className="passage-text">
                As with the friendship middleware, the CSRF middleware is applied to routes and exceutes before the controller is reached:
                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="rounded-image" src="/likePostRouterFull.png"></img>
                </div>
            </div>
            <div className="passage-text">
                Other security measures:
                <div className="grid grid-cols-2 items-start justify-center gap-12">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <div className="passage-text font-bold">SQL Injection:</div>
                        <div className="passage-text">Parameterized queries are used to prevent SQL injection by safely separating SQL code from user input.</div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <div className="passage-text font-bold">XSS:</div>
                        <div className="passage-text">Code representation:</div>
                    </div>
                </div>
            </div>
            <div className="passage-text">
                security (CSRF, sql injection, XSS)
                "the likepost route also actually has CSRF middleware"
            </div>
            <div className="passage-text">
                websockets
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