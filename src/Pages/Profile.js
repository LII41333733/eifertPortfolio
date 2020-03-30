import React, { useEffect } from 'react';
import { scrollPastHeader, navScroll, pageArr } from '../Utilities';

export const profileLibrary = {
    PLCC: {
        caption: "Series of print collateral and mobile app design for the launch of the Burlington Private Label Credit Card Program.",
        count: 7,
        title: "PLCC"
    },
    Textiles: {
        caption: "Logo, web, mobile and textile designs for an online shop selling home products, shoes and accessories.",
        count: 20,
        title: "Textiles"
    },
    Harlem: {
        caption: "Illustrations for a Burlington grand opening event in Harlem, New York. The creative is a representation of the vintage Harlem community and modern-day fashion styles for women.",
        count: 6,
        title: "Harlem"
    },
    BabyDepot: {
        caption: "Logo, landing page and in-store sign package for Baby Depot – Burlington’s sister company, selling the most mom-trusted brands in baby products like apparel, travel gear, feeding and more.",
        count: 13,
        title: "Baby Depot"
    },
    Beauty: {
        caption: "In-store sign package for Burlington’s Beauty Department. Creative assets include end caps, category signs and category inserts with custom illustrations.",
        count: 12,
        title: "Beauty"
    },
    Animations: {
        caption: "A collection of animation designs for Burlington digital ads, emails and social cover art.",
        count: 9,
        title: "Digital Animations",
        arr: []
    },
    Holiday: {
        caption: "Web design, animation, illustrations, and custom typography for Burlington’s “This Way to Holiday HQ” Christmas campaign.",
        count: 16,
        title: "Holiday"
    },
    AOE: {
        caption: "Logo and event banner design for AOE University’s island-resort themed, 2018 Art Ed Fest – a conference for art teachers across the globe, hosted in the Dominican Republic.",
        count: 2,
        title: "AOE University"
    },
    Peace: {
        caption: "Logo ideations, t-shirts, and web page designs for Foundation for Peace, a non- profit organization that helps restore communities and the lives of many people in Haiti, the Dominican Republic and Kenya through building relationships, offering hope and creating long- lasting change.",
        count: 9,
        title: "Foundation for Peace"
    },
    Home: {
        caption: "In-store signage and custom line drawings for Burlington’s Home Department. Creative assets include a free-standing poster and tower topper inserts.",
        count: 9,
        title: "Home"
    },
    PMGSC: {
        caption: "Logo, event shirt and group champions banner for the 2020 Pennsylvania Men’s Gymnastics State Championships, held in Upper Chichester, PA.",
        count: 4,
        title: "Pennsylvania Men's Gymnastic State Championships"
    },
    WomenHeart: {
        caption: "Cause marketing campaign for WomenHeart to help bring awareness to heart disease, the leading cause of death in women. The creative was used as the face of the campaign and to help support Burlington’s partnership with this prestigious organization. The design assets convey a powerful message to the viewers and give an in-depth look at how heart disease has impacted the lives of women all around the world.",
        count: 7,
        title: "WomenHeart"
    }
}

export const ProfileImages = ({ page, func, isMobile }) => {
    const count = profileLibrary[page].count;
    const images = [];
    for (let i = 1; i <= count; i++) {
        const isEven = i % 2 === 0;
        const line =
            isEven
                ? isMobile
                    ? `line-left-mobile`
                    : `line-left`
                : isMobile
                    ? 'line-right-mobile'
                    : `line-right`;
        const isLast = count === i;
        const isGif =
            (page === "Holiday" && i === 2)
            || (page === "Animations" && i === 5)
            || (page === "Animations" && i === 6);
        const isVideo =
            (page === "Animations" && i === 1)
            || (page === "Animations" && i === 2)
            || (page === "Animations" && i === 3)
            || (page === "Animations" && i === 4)
            || (page === "Animations" && i === 7)
            || (page === "Animations" && i === 8)
            || (page === "Animations" && i === 9)
            || (page === "Animations" && i === 10);

        const media = isVideo
            ? (<video className="animationVideo" width="500" autoplay muted loop>
                <source src={`images/profiles/${page}/${page}-${i}.mp4`} type="video/mp4"></source></video>)
            : (<img
                className="profile-img"
                src={`images/profiles/${page}/${page}-${i}.${isGif ? "gif" : "jpg"}`}></img>);

        images.push(
            <>
                <div className="profile-img-div">
                    {media}
                </div>
                {<div className={isLast ? "" : line}
                ></div >}
            </>
        );
    }
    return (
        <div className={`${isMobile ? "profile-img-container-mobile" : "profile-img-container-desktop"}`}>
            {images}
        </div>
    )
}

export const ProfileDetailsDesktop = ({ page, func }) => {
    const { title, caption } = profileLibrary[page];
    const currentIndex = pageArr.indexOf(page);
    const prevPage = pageArr[currentIndex - 1];
    const nextPage = pageArr[currentIndex + 1];
    const lastPage = pageArr[pageArr.length - 1];
    const firstPage = pageArr[0];

    return (
        <div className="profile-container">
            <div className="profile-info-div">
                <div className="profile-name textCenter">{title}</div>
                <p>{caption}</p>
                <div className={"controls textCenter mx-auto"}>
                    <span
                        onClick={() => {
                            prevPage === undefined
                                ? func(lastPage)
                                : func(prevPage)
                            scrollPastHeader();
                        }}
                        className="control-left control cursor">
                        {"<  PREV"}
                    </span>
                    {"/"}
                    <span
                        onClick={() => {
                            nextPage === undefined
                                ? func(firstPage)
                                : func(nextPage)
                            scrollPastHeader();
                        }}
                        className="control-right control cursor
          ">
                        {"NEXT  >"}
                    </span>
                </div>
            </div>
        </div>
    )
}

export const ProfileDetailsMobile = ({ page, func }) => {
    const { title, caption } = profileLibrary[page];
    return (
        <div className="profile-container-mobile">
            <div className="profile-info-div-mobile">
                <div className="profile-name-mobile">{title}</div>
                <p>{caption}</p>
            </div>
        </div>
    )
}

export default { profileLibrary, ProfileImages, ProfileDetailsDesktop, ProfileDetailsMobile };

{/* <ul>
    <li>Exterior</li>
    <p>Bus Shelters, Phone Kiosks, Rail Two Sheets, Urban Panels and Billboards used to drive customers to the new store. Campaign designed to create a journey within a one-mile radius of the store location.</p>
    <li>Interior</li>
    <p>Illustrations representing both the vintage and modern Harlem community. Artwork hung on the walls of the 4-story building, home to Burlington, and several other retailers.</p>
</ul> */}

// export const ProfileImagesMobile = ({ page, func }) => {
//     return (
//         <>
//             {/* <div className="profile-img-div-mobile">
//         <img className="profile-img-mobile" src={`images/profiles/${page}/${page}-1.jpg`}></img>
//       </div>
//       <div className="line-left"></div>
//       <div className="profile-img-div-mobile">
//         <img className="profile-img-mobile" src={`images/profiles/${page}/${page}-2.jpg`}></img>
//       </div>
//       <div className="line-right"></div>
//       <div className="profile-img-div-mobile">
//         <img className="profile-img-mobile" src={`images/profiles/${page}/${page}-3.jpg`}></img>
//       </div> */}
//         </>
//     )
// }