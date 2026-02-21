export default function DoodleLines() {
    return (
        <svg
            viewBox="0 0 1400 600"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* Left big doodle */}
            <path d="M150 80 C40 220, 200 300, 180 520" className="doodle" />

            {/* Arrow to Primary Skills */}
            <path d="M420 160 C460 220, 500 260, 520 320" className="doodle" />
            <path d="M505 300 L520 320 L490 310" className="doodle" />

            {/* Arrow to Secondary Skills */}
            <path d="M820 200 C790 260, 840 320, 880 360" className="doodle" />
            <path d="M865 340 L880 360 L850 350" className="doodle" />

            {/* Right big doodle */}
            <path d="M1200 120 C1350 300, 1050 420, 1180 560" className="doodle" />
        </svg>
    );
}
