import andILoveHer from '../assets/songs/library/And I Love Her (Remastered 2009).mp3';
import nothing from '../assets/songs/library/Bruno Major - Nothing (Lyric & Chord Video).mp3';
import cantHelpFallingOfficial from '../assets/songs/library/Elvis Presley - Can\'t Help Falling In Love (Official Audio).mp3';
import cantHelpFallingLyrics from '../assets/songs/library/Elvis Presley - Can\'t Help Falling in Love (Lyrics).mp3';
import loveMeTender from '../assets/songs/library/Elvis Presley - Love Me Tender (Official Lyric Video).mp3';
import wonderfulTonight from '../assets/songs/library/Eric Clapton - Wonderful Tonight [Official Live].mp3';
import iWill from '../assets/songs/library/I Will (Remastered 2009).mp3';
import laVieEnRose from '../assets/songs/library/Louis Armstrong - La vie en rose.mp3';
import something from '../assets/songs/library/The Beatles - Something.mp3';

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
        id: "and-i-love-her",
        title: "And I Love Her",
        artist: "The Beatles",
        audio: andILoveHer,
        artwork: makeArtwork("#b3a06b"),
        label: "#b3a06b",
        durationLabel: "2:30",
        note: "An early love song from A Hard Day's Night.",
        coverArt: null,
    },
    {
        id: "nothing",
        title: "Nothing",
        artist: "Bruno Major",
        audio: nothing,
        artwork: makeArtwork("#7a8aa3"),
        label: "#7a8aa3",
        durationLabel: "2:46",
        note: "The quiet ache of wanting more.",
        coverArt: null,
    },
    {
        id: "cant-help-falling-official",
        title: "Can't Help Falling in Love",
        artist: "Elvis Presley",
        audio: cantHelpFallingOfficial,
        artwork: makeArtwork("#d8c39a"),
        label: "#d8c39a",
        durationLabel: "3:01",
        note: "A voice as warm as a candle.",
        coverArt: null,
    },
    {
        id: "cant-help-falling-lyrics",
        title: "Can't Help Falling in Love",
        artist: "Elvis Presley",
        audio: cantHelpFallingLyrics,
        artwork: makeArtwork("#c98a94"),
        label: "#c98a94",
        durationLabel: "3:03",
        note: "The lyric version — sing along.",
        coverArt: null,
    },
    {
        id: "love-me-tender",
        title: "Love Me Tender",
        artist: "Elvis Presley",
        audio: loveMeTender,
        artwork: makeArtwork("#5e7aa0"),
        label: "#5e7aa0",
        durationLabel: "2:42",
        note: "A tender waltz from the King.",
        coverArt: null,
    },
    {
        id: "wonderful-tonight",
        title: "Wonderful Tonight",
        artist: "Eric Clapton",
        audio: wonderfulTonight,
        artwork: makeArtwork("#6b2a34"),
        label: "#6b2a34",
        durationLabel: "6:11",
        note: "A slow dance in amber light.",
        coverArt: null,
    },
    {
        id: "i-will",
        title: "I Will",
        artist: "The Beatles",
        audio: iWill,
        artwork: makeArtwork("#6f7d4f"),
        label: "#6f7d4f",
        durationLabel: "1:46",
        note: "A gentle promise, softly sung.",
        coverArt: null,
    },
    {
        id: "la-vie-en-rose",
        title: "La Vie En Rose",
        artist: "Louis Armstrong",
        audio: laVieEnRose,
        artwork: makeArtwork("#b0714f"),
        label: "#b0714f",
        durationLabel: "3:24",
        note: "Swing-era romance with a smile.",
        coverArt: null,
    },
    {
        id: "something",
        title: "Something",
        artist: "The Beatles",
        audio: something,
        artwork: makeArtwork("#8b5d74"),
        label: "#8b5d74",
        durationLabel: "3:08",
        note: "A love letter from Abbey Road.",
        coverArt: null,
    },
];

export const makeArtworkFor = makeArtwork;