import { loader } from "melonjs";

// a melonJS data manifest
const DataManifest: loader.loader.Asset[] = [

    /* Bitmap Text */
    {
        name: "PressStart2P",
        type: "image",
        src:  "/data/fnt/PressStart2P.png"
    },
    {
        name: "PressStart2P",
        type: "binary",
        src: "/data/fnt/PressStart2P.fnt"
    },

    {
        name: "Tilemap",
        type: "tmx",
        src: "/data/map/Tilemap.tmx"
    },
    {
        name: "Tileset",
        type: "image",
        src: "/data/map/Tileset.png"
    }
];

export default DataManifest;
