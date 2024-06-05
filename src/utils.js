export const DESKTOP = "desktop";
export const MOBILE = "mobile";

export const PATH_HOME = "/";
export const PATH_BRANDING = "/branding";
export const PATH_ART_DIRECTION = "/art-direction";
export const PATH_ILLUSTRATIONS_AND_MORE = "/illustrations-and-more";
export const PATH_CONTACT = "/contact";
export const PATH_ABOUT = "/about";

export const PAGE_HOME = "home";
export const PAGE_CONTACT = "contact";
export const PAGE_ABOUT = "about";
export const PAGE_ART = "art";
export const PAGE_CASE = "case";
export const PAGE_ILLUSTRATIONS = "illustrations";

const ENV = "DEV"; // PROD
export const SOURCE = ENV === "DEV" ? "" : "https://www.eifertdesign.com";

export const getSource = () => SOURCE;

export const getPlatform = (isMobile) => (isMobile ? MOBILE : DESKTOP);

export const getImages = () => `${getSource()}/images`;

export const getImagesByPlatform = (isMobile) =>
  `${getImages()}/${getPlatform(isMobile)}`;

export const convertIdToPage = (id) => {
  switch (id) {
    case PAGE_CASE:
      return "branding";

    case PAGE_ILLUSTRATIONS:
      return "illustrations-and-more";

    case PAGE_ART:
      return "art-direction";

    default:
      return id;
  }
};

// const RenderLoader = ({ page }) => {
//     const [loaded, setLoaded] = useState(false);
//     const [elementsLoaded, setElementsLoaded] = useState(0);
//   const containerRef = React.useRef(null);

//   React.useEffect(() => {
//     const images = containerRef.current.querySelectorAll("img");
//     const videos = containerRef.current.querySelectorAll("video");
//     const svg = containerRef.current.querySelectorAll("svg");
//     const totalElements = images.length + videos.length + svg.length;

//     if (elementsLoaded === totalElements) {
//       setLoaded(true);
//     }
//   }, [elementsLoaded]);

//   return (
//     <div ref={containerRef}>
//       <RenderPage page={page} />
//     </div>
//   );
// };
