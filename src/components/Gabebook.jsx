
export const Gabebook = ({ className }) => {
    return (
        <div className={className}>
             <div className="passage-text">
                TheGabebook (<a className="hover-image-text" href="https://github.com/GabrielWelvaert/TheGabebook" target="_blank" rel="noopener noreferrer">GitHub</a>) is a social media website that I built with vanilla HTML, CSS, JavaScript, and Node/Express.js.
                This project gave me hands-on experience with modern web development techniques and allowed me to practice essential web development concepts such as RESTful design and Model-View-Controller <a className="hover-image-text" href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank" rel="noopener noreferrer">(MVC)</a> architectural adherence.
            </div>
            ^ can be rewritten "gave me hands-on experience with modern web development techniques" is a meaningless sentence. I learned the html css js node and express. say that. the rest of it is okay
            where to mention list of features? show dont tell? only mention the ones that aren't interesting like websocket and notificaion -- indirectly show these for brevity
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-image w-[80%]" src="/TheGabebook.png"></img>    
            </div>
            <div className="passage-text">
                MVC allows for a clear separation of concerns, keeping the project organized and easy to scale. Node/Express.js make it simple to create routes, controllers, and models to support this:
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
                <div className="passage-text">Once the response is received by the client, the view will automatically update:</div>
                <img className="rounded-image" src="/unlikePostUI.png"></img>    
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="passage-text">
                    Controllers aren't restricted to their own models; the LikesController uses both the LikesModel and PostModel.
                    This is because model methods are intentionally granular so they can be called from any controller, which improves code maintainability and scalability.
                    Here are a few examples of model methods:
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img className="rounded-image w-150" src="/model1.png"></img>
                    <img className="rounded-image w-150" src="/model2.png"></img>
                    <img className="rounded-image w-150" src="/model3.png"></img>  
                </div>
                <div className="passage-text">
                    They are essentially wrappers for queries, usually with no extra logic.
                </div>
            </div>
            <div className="passage-text">
                This request/response pattern, which dynamically updates views, drives most of the application's core functionality that users directly interact with (posting, commenting, messaging, etc.). Now, we'll explore some other interal server-side features:
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