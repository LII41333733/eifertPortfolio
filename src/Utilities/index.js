import { profileLibrary } from '../Pages/Profile';

export const pageArr = ["PLCC", "Textiles", "Harlem", "BabyDepot", "Beauty", "Animations", "Holiday", "AOE", "Peace", "Home", "PMGSC", "WomenHeart"];

export const resetDesktop = (isWork) => {
    const container = document.getElementsByClassName("container")
    const desktop = document.getElementsByClassName("desktop")
    if (container.length && desktop.length) {
        desktop[0].style.display = "block";
        desktop[0].style.position = "relative";
        desktop[0].style.top = "auto";
        desktop[0].style.height = "auto";
        container[0].style.height = "3700px";
    }
    isWork && scrollPastHeader();
}

export const scrollPastHeader = () => {
    setTimeout(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 230
        });
    }, 300)
}

export const navScroll = (page) => {
    const container = document.getElementsByClassName("container");
    const desktop = document.getElementsByClassName("desktop");
    resetDesktop();
    if (page === "about") {
        container[0].style.height = "1700px";
    } else if (page === "contact") {
        container[0].style.height = "1000px";
    } else if (page !== "home") {
        desktop[0].style.display = "block";
        desktop[0].style.position = "sticky";
        desktop[0].style.top = "-200px";
        desktop[0].style.height = "0px";
    }
}

export default { pageArr, resetDesktop, scrollPastHeader, navScroll };
