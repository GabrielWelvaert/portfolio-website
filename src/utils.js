export function scrollToId(id){
    console.log("scrolltoId");
    if(!id){
        id = window.location.hash.replace("#","");    
    }
    const section = document.getElementById(id);
    if(section){
        console.log("here");
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.log("??");
    }
}

export function getCurrentIndexFromURL(){
    const href =  window.location.hash.replace("#","");
    const index = sectionIds.indexOf(href);
    return index >= 0 ? index : 0;
}

export const sectionIds = ["about", "work", "projects"];

// section to Index
export const sectionToIndex = new Map(sectionIds.map((id, i) => [id, i]));

// index to Section
export const indexToSection = new Map(sectionIds.map((id, i) => [i, id]));