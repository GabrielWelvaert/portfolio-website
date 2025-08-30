export function scrollToId(id){
    if(!id){
        id = window.location.hash.replace("#","");    
    }
    const section = document.getElementById(id);
    if(section){
        section.scrollIntoView({ behavior: "smooth" });
    }
}

export function getCurrentIndexFromURL(){
    const href =  window.location.hash.replace("#","");
    const index = sectionIds.indexOf(href);
    return index >= 0 ? index : 0;
}

export const sectionIds = ["home", "about", "work", "projects", "contact"];