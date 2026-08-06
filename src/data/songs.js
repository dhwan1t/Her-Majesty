import dontLetMeDown from '../assets/songs/library/Don\'t Let Me Down (Live Performance).mp3';
import getBack from '../assets/songs/library/Get Back (Remastered 2009).mp3';
import something from '../assets/songs/library/The Beatles - Something.mp3';
import americanPie from '../assets/songs/library/Don McLean - American Pie (Lyric Video).mp3';
import fridayImInLove from '../assets/songs/library/The Cure - Friday I\'m In Love.mp3';

// Temporary album artwork placeholder while real cover art is unavailable.
// Renders a vinyl-styled disc tinted with the song's centre label colour.
const makeArtwork = (label) => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'>
        <defs>
            <radialGradient id='g' cx='50%' cy='50%' r='50%'>
                <stop offset='0%' stop-color='${label}'/>
                <stop offset='70%' stop-color='${label}' stop-opacity='0.55'/>
                <stop offset='100%' stop-color='#14100c'/>
            </radialGradient>
        </defs>
        <rect width='600' height='600' fill='#17130e'/>
        <circle cx='300' cy='300' r='290' fill='url(#g)'/>
        <circle cx='300' cy='300' r='118' fill='${label}' stroke='#3e080c' stroke-width='3'/>
        <circle cx='300' cy='300' r='22' fill='#3e080c'/>
    </svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const songs = [
    {
        id: "something",
        title: "Something",
        artist: "The Beatles",
        audio: something,
        artwork: makeArtwork("#8b5d74"),
        label: "#8b5d74",
        durationLabel: "3:08",
        note: "A love letter from Abbey Road.",
    },
    {
        id: "get-back",
        title: "Get Back",
        artist: "The Beatles",
        audio: getBack,
        artwork: makeArtwork("#5b6d8b"),
        label: "#5b6d8b",
        durationLabel: "3:09",
        note: "Remastered 2009 — a call to come home.",
    },
    {
        id: "dont-let-me-down",
        title: "Don't Let Me Down",
        artist: "The Beatles",
        audio: dontLetMeDown,
        artwork: makeArtwork("#5b8b6f"),
        label: "#5b8b6f",
        durationLabel: "3:31",
        note: "A live performance filled with devotion.",
    },
    {
        id: "american-pie",
        title: "American Pie",
        artist: "Don McLean",
        audio: americanPie,
        artwork: makeArtwork("#b0733b"),
        label: "#b0733b",
        durationLabel: "8:32",
        note: "A long, golden road of memories.",
    },
    {
        id: "friday-im-in-love",
        title: "Friday I'm In Love",
        artist: "The Cure",
        audio: fridayImInLove,
        artwork: makeArtwork("#8b4b83"),
        label: "#8b4b83",
        durationLabel: "3:35",
        note: "Play it loud — it's the weekend.",
    },
];

export const makeArtworkFor = makeArtwork;