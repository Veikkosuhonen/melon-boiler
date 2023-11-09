import { loader } from "melonjs";

// a melonJS data manifest
const DataManifest: loader.loader.Asset[] = [

    /* Player sprite sheet */
    {
        name: "playerSpriteSheet",
        type: "image",
        src: "/data/sprite/playerSpriteSheet.png"
    },

    /* Map */
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
