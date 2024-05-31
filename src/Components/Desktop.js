const spanWidth = {
  0: {
    a: "",
    b: "8.7rem",
    c: "",
  },
  // case studies
  1: {
    a: "",
    b: "",
    c: "",
  },
  // art direction
  3: {
    a: "14rem",
    b: "14rem",
    c: "13rem",
  },
  // illustrations
  2: {
    a: "15rem",
    b: "15rem",
    c: "12rem",
  },
};

const Desktop = ({
  titles,
  urls,
  loadedImages,
  layer,
  setLayer,
  imageTags,
  setPage,
}) => {
  return (
    <div id="desktop-body">
      <div id="left-column">
        <div
          id="zoneA"
          onClick={() => {
            if (layer === 0) {
              setLayer(1);
            } else {
              setPage(imageTags[layer].a);
            }
          }}
        >
          <img
            src={urls[0]}
            className={loadedImages.includes(urls[0]) ? "loaded" : ""}
            alt=""
          />
          <span style={{ width: spanWidth[layer].a || "initial" }}>
            {titles[layer].a}
          </span>
        </div>
        <div
          id="zoneB"
          onClick={() => {
            if (layer === 0) {
              setLayer(2);
            } else {
              setPage(imageTags[layer].b);
            }
          }}
        >
          <img
            src={urls[1]}
            className={loadedImages.includes(urls[1]) ? "loaded" : ""}
            alt=""
          />
          <span style={{ width: spanWidth[layer].b || "initial" }}>
            {titles[layer].b}
          </span>
        </div>
      </div>
      <div id="right-column">
        <div
          id="zoneC"
          onClick={() => {
            if (layer === 0) {
              setLayer(3);
            } else {
              setPage(imageTags[layer].c);
            }
          }}
        >
          <img
            src={urls[2]}
            className={loadedImages.includes(urls[2]) ? "loaded" : ""}
            alt=""
          />
          <span style={{ width: spanWidth[layer].c || "initial" }}>
            {titles[layer].c}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
