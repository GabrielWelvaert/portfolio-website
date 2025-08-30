export function scrollToId(id){
    if(!id){
        id = window.location.hash.replace("#","");    
    }
    const section = document.getElementById(id);
    if(section){
        section.scrollIntoView({ behavior: "smooth" });
    }
}