
export const Gabebook = ({ className }) => {
    return (
        <div className={className}>
             <div className="passage-text">
                TheGabebook (<a className="hover-image-text" href="https://github.com/GabrielWelvaert/TheGabebook" target="_blank" rel="noopener noreferrer">GitHub</a>) is a social platform that I built to practice full-stack web development using vanilla HTML, CSS, JavaScript, Node/Express.js, Model-View-Controller <a className="hover-image-text" href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank" rel="noopener noreferrer">(MVC)</a> adherence, and <a className="hover-image-text" href="https://en.wikipedia.org/wiki/REST" target="_blank" rel="noopener noreferrer">RESTful</a> design.
                It includes profiles, posting, friendships, messaging, commenting, liking, and notifications.
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-image w-[80%]" src="/TheGabebook.png"></img>    
            </div>
            <div className="passage-text">
                MVC was used to enforce a clear separation of concerns, keeping the project organized, modular, and scalable. Node/Express.js makes it simple to create routes, controllers, and models to support this design:
            </div>
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-image" src="/MVC.drawio.png"></img>    
            </div>
            <div className="passage-text">
                For example, let's see how liking a post is done with MVC:
            </div>
            <div className="grid grid-cols-[46%_54%] items-start justify-around gap-2">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">
                        On the client side, the post view provides a like button whose handler sends an HTTPS request to the likePost endpoint:
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
                <div className="passage-text">Once the response is received by the client, the view will update by directly modifying DOM elements:</div>
                <img className="rounded-image" src="/unlikePostUI.png"></img>    
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="passage-text">
                    Notably, controllers aren't restricted to their own models; the LikesController uses both the LikesModel and PostModel.
                    To improve code maintainability and scalability, model methods are intentionally granular and self-contained so they can be called from any controller. 
                    Here are a few examples:
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img className="rounded-image w-150" src="/model1.png"></img>
                    <img className="rounded-image w-150" src="/model2.png"></img>
                    <img className="rounded-image w-150" src="/model3.png"></img>  
                </div>
            </div>
            <div className="passage-text">
                Most other user-facing features, including liking, posting, and commenting, follow the same request/response architecture as liking a post. Rather than reviewing these, we'll examine other internal features:
            </div>
            <div className="passage-text">
                authentication, authorization, custom middleware
            </div>
            <div className="passage-text">
                security
            </div>
            <div className="passage-text">
                websockets
            </div>
            <div className="passage-text">
                production implementation: AWS (ec2, email, route58 blah blah!)
            </div>
        </div>
    )
}