"use client";

import type {
  CountertopCatalogItem,
  DoorStyleId,
  FacadeCatalogItem,
  FurnitureTypeId,
  HardwareCatalogItem,
} from "@/data/materialsCatalog";

interface MaterialPreviewSceneProps {
  furnitureType: FurnitureTypeId;
  facade: FacadeCatalogItem;
  countertop: CountertopCatalogItem;
  hardware: HardwareCatalogItem;
  doorStyle: DoorStyleId;
  ledOn: boolean;
}

export default function MaterialPreviewScene({
  furnitureType,
  facade,
  countertop,
  hardware,
  doorStyle,
  ledOn,
}: MaterialPreviewSceneProps) {
  const facadeFill =
    facade.texture === "wood"
      ? "url(#woodGrainPattern)"
      : facade.texture === "gloss"
      ? "url(#glossFacadeGrad)"
      : "url(#matteFacadeGrad)";

  const ledGlowOpacity = ledOn ? 0.85 : 0;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-[#191310] shadow-2xl">
      <svg
        viewBox="0 0 800 540"
        className="w-full h-auto block"
        role="img"
        aria-label="Live furniture material preview"
      >
        <defs>
          {/* Room Wall & Floor Gradients */}
          <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2b231f" />
            <stop offset="70%" stopColor="#211a17" />
            <stop offset="100%" stopColor="#16110e" />
          </linearGradient>

          <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#32251d" />
            <stop offset="100%" stopColor="#1c140f" />
          </linearGradient>

          {/* Facade Gradients & Woodgrain */}
          <linearGradient id="matteFacadeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={facade.colorHex} />
            <stop offset="100%" stopColor={facade.secondaryHex} />
          </linearGradient>

          <linearGradient id="glossFacadeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={facade.colorHex} />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="50%" stopColor={facade.colorHex} />
            <stop offset="100%" stopColor={facade.secondaryHex} />
          </linearGradient>

          <pattern
            id="woodGrainPattern"
            width="60"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <rect width="60" height="120" fill={facade.colorHex} />
            <path
              d="M8 0 C12 35, 5 75, 9 120 M20 0 C16 40, 24 85, 19 120 M35 0 C39 30, 32 80, 36 120 M50 0 C46 45, 54 90, 49 120"
              stroke={facade.secondaryHex}
              strokeWidth="2.2"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M14 0 C15 50, 13 90, 15 120 M42 0 C44 45, 40 95, 43 120"
              stroke="#000000"
              strokeWidth="0.8"
              fill="none"
              opacity="0.18"
            />
          </pattern>

          {/* Fluted Vertical Rib Overlay */}
          <pattern
            id="flutedOverlay"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <rect width="5" height="10" fill="#000000" fillOpacity="0.18" />
            <rect x="5" width="1.5" height="10" fill="#ffffff" fillOpacity="0.08" />
          </pattern>

          {/* Stone / Quartz Marble Veining Pattern */}
          <pattern
            id="stonePattern"
            width="180"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <rect width="180" height="120" fill={countertop.colorHex} />
            <path
              d="M-10 35 Q45 20, 85 52 T190 42"
              stroke={countertop.veinHex}
              strokeWidth="1.8"
              fill="none"
              opacity="0.55"
            />
            <path
              d="M10 95 Q65 70, 115 98 T185 82"
              stroke={countertop.veinHex}
              strokeWidth="1.2"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M40 5 Q80 35, 125 18"
              stroke={countertop.veinHex}
              strokeWidth="0.9"
              fill="none"
              opacity="0.35"
            />
          </pattern>

          {/* Hardware Metallic Gradient */}
          <linearGradient id="hardwareGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={hardware.colorHex} />
            <stop offset="100%" stopColor={hardware.accentHex} />
          </linearGradient>

          {/* Warm LED Lighting Glows */}
          <linearGradient id="ledStripGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe4a8" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#f5c978" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#f5c978" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="ambientHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe6ae" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffe6ae" stopOpacity="0" />
          </radialGradient>

          {/* Vitrine Smoked Glass */}
          <linearGradient id="vitrineGlass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#1b1512" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Background Wall & Floor */}
        <rect width="800" height="445" fill="url(#wallGrad)" />
        <rect y="445" width="800" height="95" fill="url(#floorGrad)" />
        <line x1="0" y1="445" x2="800" y2="445" stroke="#000000" strokeOpacity="0.45" strokeWidth="2" />

        {/* Subtle Wall Planks / Shadow */}
        <rect y="0" width="800" height="18" fill="#000000" fillOpacity="0.28" />

        {/* SCENE 1: KITCHEN */}
        {furnitureType === "kitchen" && (
          <g>
            {/* Floor Contact Shadow */}
            <ellipse cx="400" cy="456" rx="345" ry="12" fill="#000000" fillOpacity="0.55" />

            {/* Left Tall Oven & Pantry Column */}
            <g>
              <rect x="70" y="65" width="145" height="365" rx="3" fill={facadeFill} stroke="#0e0b09" strokeWidth="1.5" />
              {doorStyle === "fluted" && (
                <rect x="70" y="65" width="145" height="365" fill="url(#flutedOverlay)" />
              )}
              {/* Upper pantry seam */}
              <line x1="72" y1="185" x2="213" y2="185" stroke="#000000" strokeOpacity="0.4" strokeWidth="1.5" />
              {/* Built-in Oven */}
              <rect x="82" y="196" width="121" height="92" rx="4" fill="#171719" stroke="#2c2c30" strokeWidth="2" />
              <rect x="92" y="216" width="101" height="58" rx="3" fill="#0b0b0d" stroke="#36363b" strokeWidth="1" />
              <line x1="100" y1="210" x2="185" y2="210" stroke="url(#hardwareGrad)" strokeWidth="3" strokeLinecap="round" />
              {/* Oven warm subtle glow */}
              <rect x="106" y="226" width="73" height="38" rx="2" fill="#c4a56b" fillOpacity={ledOn ? 0.14 : 0.04} />
              {/* Lower tall door */}
              <line x1="72" y1="298" x2="213" y2="298" stroke="#000000" strokeOpacity="0.4" strokeWidth="1.5" />
              <rect x="196" y="320" width="5" height="44" rx="2" fill="url(#hardwareGrad)" />
              <rect x="196" y="122" width="5" height="40" rx="2" fill="url(#hardwareGrad)" />
            </g>

            {/* Backsplash Stone */}
            <rect x="217" y="186" width="513" height="122" fill="url(#stonePattern)" />
            <rect x="217" y="186" width="513" height="122" fill="#000000" fillOpacity="0.06" />

            {/* Under-cabinet LED Strip & Glow */}
            <rect x="220" y="185" width="506" height="4" fill="#fff0c9" opacity={ledOn ? 0.95 : 0.15} />
            <rect
              x="217"
              y="188"
              width="513"
              height="95"
              fill="url(#ledStripGlow)"
              opacity={ledGlowOpacity}
            />

            {/* Upper Wall Cabinets (4 modules) */}
            {[0, 1, 2, 3].map((col) => {
              const x = 217 + col * 128.5;
              const isVitrine = doorStyle === "vitrine" && (col === 1 || col === 2);
              return (
                <g key={col}>
                  {isVitrine ? (
                    <g>
                      <rect x={x} y="65" width="126.5" height="120" rx="2" fill="#231c18" stroke={facade.colorHex} strokeWidth="5" />
                      {/* Shelves inside vitrine */}
                      <line x1={x + 6} y1="106" x2={x + 120} y2="106" stroke="#c4a56b" strokeOpacity="0.4" strokeWidth="1.5" />
                      <line x1={x + 6} y1="146" x2={x + 120} y2="146" stroke="#c4a56b" strokeOpacity="0.4" strokeWidth="1.5" />
                      {/* Warm shelf LEDs */}
                      {ledOn && (
                        <>
                          <rect x={x + 6} y="70" width="114" height="34" fill="#ffd98e" fillOpacity="0.16" />
                          <rect x={x + 6} y="108" width="114" height="36" fill="#ffd98e" fillOpacity="0.12" />
                        </>
                      )}
                      {/* Minimal decor silhouettes */}
                      <rect x={x + 28} y="82" width="16" height="22" rx="2" fill="#d4c5b0" fillOpacity="0.35" />
                      <circle cx={x + 76} cy="134" r="10" fill="#d4c5b0" fillOpacity="0.3" />
                      <rect x={x + 2} y="67" width="122.5" height="116" fill="url(#vitrineGlass)" />
                    </g>
                  ) : (
                    <g>
                      <rect x={x} y="65" width="126.5" height="120" rx="2" fill={facadeFill} stroke="#0e0b09" strokeWidth="1.2" />
                      {doorStyle === "fluted" && (
                        <rect x={x} y="65" width="126.5" height="120" fill="url(#flutedOverlay)" />
                      )}
                    </g>
                  )}
                  <rect x={x + 48} y="172" width="30" height="4" rx="2" fill="url(#hardwareGrad)" />
                </g>
              );
            })}

            {/* Undermount Sink & Gooseneck Faucet */}
            <g>
              <rect x="292" y="302" width="102" height="6" rx="2" fill="#2a2a2d" />
              {/* Faucet */}
              <path
                d="M343 302 L343 266 C343 248, 366 248, 366 266 L366 274"
                stroke="url(#hardwareGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
              <rect x="337" y="297" width="12" height="6" rx="2" fill="url(#hardwareGrad)" />
            </g>

            {/* Induction Cooktop */}
            <g>
              <rect x="525" y="303" width="122" height="5" rx="1" fill="#141416" />
              <ellipse cx="560" cy="304" rx="18" ry="1.5" fill="#4e4e55" />
              <ellipse cx="614" cy="304" rx="14" ry="1.5" fill="#4e4e55" />
            </g>

            {/* Countertop Slab with Bevel Edge */}
            <rect x="215" y="308" width="517" height="14" rx="2" fill="url(#stonePattern)" stroke="#000000" strokeOpacity="0.3" strokeWidth="1" />
            <rect x="215" y="320" width="517" height="3" fill="#000000" fillOpacity="0.28" />

            {/* Lower Base Cabinets (4 modules) */}
            {[0, 1, 2, 3].map((col) => {
              const x = 217 + col * 128.5;
              const isDrawers = col === 2 || col === 3;
              return (
                <g key={col}>
                  {isDrawers ? (
                    <g>
                      {[0, 1, 2].map((row) => {
                        const y = 323 + row * 36;
                        return (
                          <g key={row}>
                            <rect x={x} y={y} width="126.5" height="34" rx="2" fill={facadeFill} stroke="#0e0b09" strokeWidth="1.2" />
                            {doorStyle === "fluted" && (
                              <rect x={x} y={y} width="126.5" height="34" fill="url(#flutedOverlay)" />
                            )}
                            <rect x={x + 42} y={y + 10} width="42" height="4" rx="2" fill="url(#hardwareGrad)" />
                          </g>
                        );
                      })}
                    </g>
                  ) : (
                    <g>
                      <rect x={x} y="323" width="126.5" height="107" rx="2" fill={facadeFill} stroke="#0e0b09" strokeWidth="1.2" />
                      {doorStyle === "fluted" && (
                        <rect x={x} y="323" width="126.5" height="107" fill="url(#flutedOverlay)" />
                      )}
                      <rect x={x + 42} y="334" width="42" height="4" rx="2" fill="url(#hardwareGrad)" />
                    </g>
                  )}
                </g>
              );
            })}

            {/* Toe-kick Plinth */}
            <rect x="75" y="430" width="650" height="18" fill="#120d0b" />
          </g>
        )}

        {/* SCENE 2: WARDROBE */}
        {furnitureType === "wardrobe" && (
          <g>
            <ellipse cx="400" cy="456" rx="310" ry="12" fill="#000000" fillOpacity="0.55" />
            {[0, 1, 2, 3].map((col) => {
              const x = 110 + col * 145;
              const isVitrine = doorStyle === "vitrine" && (col === 1 || col === 2);
              return (
                <g key={col}>
                  {isVitrine ? (
                    <g>
                      <rect x={x} y="55" width="142" height="375" rx="2" fill="#1e1714" stroke={facade.colorHex} strokeWidth="6" />
                      {ledOn && (
                        <rect x={x + 8} y="62" width="126" height="270" fill="#ffd98e" fillOpacity="0.14" />
                      )}
                      {/* Hanging rail & shelves */}
                      <line x1={x + 10} y1="110" x2={x + 132} y2="110" stroke="url(#hardwareGrad)" strokeWidth="2.5" />
                      <line x1={x + 10} y1="240" x2={x + 132} y2="240" stroke="#c4a56b" strokeOpacity="0.4" strokeWidth="1.5" />
                      <line x1={x + 10} y1="300" x2={x + 132} y2="300" stroke="#c4a56b" strokeOpacity="0.4" strokeWidth="1.5" />
                      {/* Garment silhouettes */}
                      <path d={`M${x + 35} 112 L${x + 25} 180 L${x + 45} 180 Z`} fill="#d4c5b0" fillOpacity="0.22" />
                      <path d={`M${x + 65} 112 L${x + 54} 195 L${x + 76} 195 Z`} fill="#c4a56b" fillOpacity="0.25" />
                      <rect x={x + 4} y="59" width="134" height="367" fill="url(#vitrineGlass)" />
                    </g>
                  ) : (
                    <g>
                      <rect x={x} y="55" width="142" height="375" rx="2" fill={facadeFill} stroke="#0e0b09" strokeWidth="1.5" />
                      {doorStyle === "fluted" && (
                        <rect x={x} y="55" width="142" height="375" fill="url(#flutedOverlay)" />
                      )}
                    </g>
                  )}
                  {/* Tall Architectural Vertical Handle */}
                  <rect
                    x={col % 2 === 0 ? x + 124 : x + 12}
                    y="165"
                    width="5"
                    height="120"
                    rx="2.5"
                    fill="url(#hardwareGrad)"
                  />
                </g>
              );
            })}
            {/* Wardrobe Plinth */}
            <rect x="114" y="430" width="572" height="18" fill="#110d0b" />
          </g>
        )}

        {/* SCENE 3: BEDROOM */}
        {furnitureType === "bedroom" && (
          <g>
            {/* Ambient Headboard LED Glow */}
            {ledOn && <ellipse cx="400" cy="210" rx="290" ry="130" fill="url(#ambientHalo)" />}

            {/* Custom Architectural Wall Panels */}
            <rect x="115" y="95" width="570" height="235" rx="6" fill={facadeFill} stroke="#0e0b09" strokeWidth="1.5" />
            {doorStyle === "fluted" && (
              <rect x="115" y="95" width="570" height="235" fill="url(#flutedOverlay)" />
            )}
            {/* Panel seams */}
            {[230, 345, 455, 570].map((lx) => (
              <line key={lx} x1={lx} y1="95" x2={lx} y2="330" stroke="#000000" strokeOpacity="0.35" strokeWidth="1.5" />
            ))}

            {/* Bed Base & Mattress */}
            <ellipse cx="400" cy="452" rx="260" ry="12" fill="#000000" fillOpacity="0.55" />
            <rect x="225" y="340" width="350" height="100" rx="8" fill={facadeFill} stroke="#0e0b09" strokeWidth="1.5" />
            <rect x="235" y="295" width="330" height="58" rx="10" fill="#e8dfd3" />
            <rect x="235" y="325" width="330" height="52" rx="6" fill="#cfc3b4" />
            {/* Pillows */}
            <rect x="258" y="258" width="128" height="46" rx="12" fill="#f5eee4" stroke="#d9cebf" />
            <rect x="414" y="258" width="128" height="46" rx="12" fill="#f5eee4" stroke="#d9cebf" />

            {/* Left & Right Nightstands */}
            {[115, 595].map((nx) => (
              <g key={nx}>
                <rect x={nx} y="325" width="90" height="10" rx="2" fill="url(#stonePattern)" />
                <rect x={nx} y="335" width="90" height="75" rx="3" fill={facadeFill} stroke="#0e0b09" strokeWidth="1.2" />
                <line x1={nx} y1="372" x2={nx + 90} y2="372" stroke="#000000" strokeOpacity="0.35" />
                <rect x={nx + 30} y="348" width="30" height="4" rx="2" fill="url(#hardwareGrad)" />
                <rect x={nx + 30} y="386" width="30" height="4" rx="2" fill="url(#hardwareGrad)" />
                {/* Bedside Lamp Glow */}
                {ledOn && <circle cx={nx + 45} cy="290" r="32" fill="url(#ambientHalo)" />}
                <rect x={nx + 43} y="296" width="4" height="29" fill="url(#hardwareGrad)" />
                <path d={`M${nx + 28} 296 L${nx + 62} 296 L${nx + 54} 274 L${nx + 36} 274 Z`} fill="#f5e6d3" opacity={ledOn ? 0.95 : 0.6} />
              </g>
            ))}
          </g>
        )}

        {/* SCENE 4: VANITY TABLE */}
        {furnitureType === "vanity" && (
          <g>
            {/* Fluted Decorative Wall Accent */}
            <rect x="220" y="55" width="360" height="390" rx="6" fill={facadeFill} opacity="0.25" />
            {doorStyle === "fluted" && (
              <rect x="220" y="55" width="360" height="390" fill="url(#flutedOverlay)" opacity="0.5" />
            )}

            {/* Backlit Arch Mirror */}
            {ledOn && <ellipse cx="400" cy="175" rx="115" ry="130" fill="url(#ambientHalo)" />}
            <path
              d="M310 265 L310 155 A90 90 0 0 1 490 155 L490 265 Z"
              fill="#2e3136"
              stroke="url(#hardwareGrad)"
              strokeWidth="4"
            />
            <path
              d="M316 260 L316 156 A84 84 0 0 1 484 156 L484 260 Z"
              fill="url(#vitrineGlass)"
            />

            {/* Floating Vanity Console with Stone Top */}
            <ellipse cx="400" cy="452" rx="220" ry="10" fill="#000000" fillOpacity="0.5" />
            <rect x="190" y="280" width="420" height="14" rx="2" fill="url(#stonePattern)" stroke="#000000" strokeOpacity="0.3" />
            <rect x="192" y="294" width="416" height="72" rx="3" fill={facadeFill} stroke="#0e0b09" strokeWidth="1.5" />
            {doorStyle === "fluted" && (
              <rect x="192" y="294" width="416" height="72" fill="url(#flutedOverlay)" />
            )}
            {/* 3 Drawer Seams & Handles */}
            <line x1="330" y1="294" x2="330" y2="366" stroke="#000000" strokeOpacity="0.35" strokeWidth="1.5" />
            <line x1="470" y1="294" x2="470" y2="366" stroke="#000000" strokeOpacity="0.35" strokeWidth="1.5" />
            {[240, 380, 520].map((hx) => (
              <rect key={hx} x={hx} y="326" width="40" height="4.5" rx="2" fill="url(#hardwareGrad)" />
            ))}
            {/* Slim Metal Legs */}
            <rect x="210" y="366" width="8" height="80" fill="url(#hardwareGrad)" />
            <rect x="582" y="366" width="8" height="80" fill="url(#hardwareGrad)" />
            {/* Vanity Pouf */}
            <rect x="350" y="382" width="100" height="62" rx="16" fill="#d8cbb8" stroke="#b9a993" />
          </g>
        )}
      </svg>
    </div>
  );
}
