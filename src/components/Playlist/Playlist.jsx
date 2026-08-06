import "./Playlist.css";

export default function Playlist({ songs, currentIndex, onSelect }) {
  return (
    <div className="playlist">
      <h3 className="playlist-title">Hlo</h3>

      <div className="playlist-tracks">
        {songs.map((song, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={song.id}
              className={`playlist-track ${isActive ? 'active' : ''}`}
              onClick={() => onSelect(index)}
            >
              <span className="track-indicator" />
              <span className="track-number">{index + 1}</span>
              <span className="track-name">
                <span className="track-title">{song.title}</span>
                <span className="track-artist">{song.artist}</span>
              </span>
              <span className="track-duration">{song.durationLabel || "0:00"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}