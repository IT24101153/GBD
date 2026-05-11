/**
 * Isometric 3D cube echoing the company logo (amber top, orange face,
 * ember side, charcoal accent).
 */
export default function IsoCube({ size = 260 }: { size?: number }) {
  const s = size;
  const half = s / 2;
  return (
    <div
      className="iso-stage relative"
      style={{ width: s, height: s }}
      aria-hidden
    >
      <div
        className="iso-cube relative"
        style={{ width: s, height: s, transformOrigin: "50% 50%" }}
      >
        {/* front */}
        <div
          className="iso-face"
          style={{
            background:
              "linear-gradient(160deg, #ff7a2a 0%, #f04a0c 60%, #c12200 100%)",
            transform: `translateZ(${half}px)`,
          }}
        />
        {/* back */}
        <div
          className="iso-face"
          style={{
            background:
              "linear-gradient(160deg, #c12200 0%, #7a1500 100%)",
            transform: `translateZ(${-half}px) rotateY(180deg)`,
          }}
        />
        {/* right */}
        <div
          className="iso-face"
          style={{
            background:
              "linear-gradient(180deg, #ff8a3a 0%, #ff6a1a 60%, #d8420a 100%)",
            transform: `rotateY(90deg) translateZ(${half}px)`,
          }}
        />
        {/* left */}
        <div
          className="iso-face"
          style={{
            background:
              "linear-gradient(180deg, #2a2a2d 0%, #0f0f10 100%)",
            transform: `rotateY(-90deg) translateZ(${half}px)`,
          }}
        />
        {/* top */}
        <div
          className="iso-face"
          style={{
            background:
              "linear-gradient(135deg, #ffd17a 0%, #ffb547 55%, #ff8c1a 100%)",
            transform: `rotateX(90deg) translateZ(${half}px)`,
          }}
        />
        {/* bottom */}
        <div
          className="iso-face"
          style={{
            background: "linear-gradient(135deg, #1a1a1d, #0a0a0b)",
            transform: `rotateX(-90deg) translateZ(${half}px)`,
          }}
        />
      </div>
    </div>
  );
}
