export const memoryStrips = [
    {
        id: "strip_1",
        direction: "up",
        speed: 95, // slowed down to account for increased vertical gap
        delay: 0,
        left: "6%", // moved closer to left edge
        items: [
            { id: "s1_1", type: "vinyl", image: "photo_01", rot: 13, spinDur: 26, offsetX: -12 },
            { id: "s1_2", type: "polaroid", image: "photo_02", tilt: -4, swayDur: 9, offsetX: 18 },
            { id: "s1_3", type: "vinyl", image: "photo_03", rot: 142, spinDur: 31, offsetX: 5 },
            { id: "s1_4", type: "polaroid", image: "photo_04", tilt: 3, swayDur: 7.5, offsetX: -15 },
        ]
    },
    {
        id: "strip_2",
        direction: "down",
        speed: 110,
        delay: -12, // different delay to break the grid
        left: "24%", // generous negative space for the hero
        items: [
            { id: "s2_1", type: "polaroid", image: "photo_05", tilt: 5, swayDur: 8.5, offsetX: 10 },
            { id: "s2_2", type: "vinyl", image: "photo_06", rot: 205, spinDur: 23, offsetX: -20 },
            { id: "s2_3", type: "polaroid", image: "photo_07", tilt: -3, swayDur: 10, offsetX: -5 },
            { id: "s2_4", type: "vinyl", image: "photo_08", rot: 47, spinDur: 28, offsetX: 22 },
        ]
    },
    {
        id: "strip_3",
        direction: "up",
        speed: 100,
        delay: -25,
        right: "24%", // generous negative space
        items: [
            { id: "s3_1", type: "vinyl", image: "photo_09", rot: 319, spinDur: 29, offsetX: 14 },
            { id: "s3_2", type: "polaroid", image: "photo_10", tilt: -2, swayDur: 8, offsetX: -22 },
            { id: "s3_3", type: "vinyl", image: "photo_11", rot: 82, spinDur: 25, offsetX: -8 },
            { id: "s3_4", type: "polaroid", image: "photo_12", tilt: 6, swayDur: 9.5, offsetX: 16 },
        ]
    },
    {
        id: "strip_4",
        direction: "down",
        speed: 115,
        delay: -8,
        right: "6%", // moved closer to right edge
        items: [
            { id: "s4_1", type: "polaroid", image: "photo_03", tilt: -5, swayDur: 10.5, offsetX: 25 },
            { id: "s4_2", type: "vinyl", image: "photo_05", rot: 175, spinDur: 24, offsetX: -12 },
            { id: "s4_3", type: "polaroid", image: "photo_07", tilt: 4, swayDur: 7.8, offsetX: 8 },
            { id: "s4_4", type: "vinyl", image: "photo_09", rot: 237, spinDur: 27, offsetX: -18 },
        ]
    }
];