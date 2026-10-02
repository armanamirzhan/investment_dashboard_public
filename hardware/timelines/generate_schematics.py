#!/usr/bin/env python3
"""Generate interactive CPO schematic SVGs (cell/box layout, not flat timelines)."""
from __future__ import annotations
from pathlib import Path

OUT = Path(__file__).resolve().parent
FONT = "system-ui,sans-serif"


def esc(s: str) -> str:
    return (
        str(s)
        .replace("&", "&")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def cell(
    stage: str,
    x: float,
    y: float,
    w: float,
    h: float,
    title: str,
    sub: str = "",
    fill: str = "#1a2836",
    aria: str | None = None,
    scarcity: str = "",
) -> str:
    label = aria or title
    cls = "stage-hotspot"
    if scarcity:
        cls += f" scarcity-{scarcity}"
    lines = [
        f'<g class="{cls}" data-stage="{esc(stage)}" tabindex="0" role="button" '
        f'focusable="true" aria-label="{esc(label)}. Activate for stage details.">',
        f'<rect class="box" x="{x}" y="{y}" width="{w}" height="{h}" rx="6" '
        f'fill="{fill}" stroke="#3d4a5c" stroke-width="1.4"/>',
    ]
    cx = x + w / 2
    if sub:
        lines.append(
            f'<text x="{cx}" y="{y + h / 2 - 4}" text-anchor="middle" fill="#e8eef6" '
            f'font-size="12" font-family="{FONT}" font-weight="600">{esc(title)}</text>'
        )
        lines.append(
            f'<text x="{cx}" y="{y + h / 2 + 12}" text-anchor="middle" fill="#9aa7b8" '
            f'font-size="9.5" font-family="{FONT}">{esc(sub)}</text>'
        )
    else:
        lines.append(
            f'<text x="{cx}" y="{y + h / 2 + 4}" text-anchor="middle" fill="#e8eef6" '
            f'font-size="12" font-family="{FONT}" font-weight="600">{esc(title)}</text>'
        )
    lines.append("</g>")
    return "\n".join(lines)


def arrow(x1: float, y1: float, x2: float, y2: float) -> str:
    return (
        f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="#5b9fd4" '
        f'stroke-width="1.6" marker-end="url(#arrow)"/>'
    )


def frame(w: int, h: int, title_id: str, title: str, subtitle: str) -> list[str]:
    return [
        f'<svg viewBox="0 0 {w} {h}" xmlns="http://www.w3.org/2000/svg" role="img" '
        f'aria-labelledby="{title_id}">',
        f'<title id="{title_id}">{esc(title)}</title>',
        f'<defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" '
        f'orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b9fd4"/></marker></defs>',
        f'<rect x="12" y="12" width="{w - 24}" height="{h - 24}" rx="12" fill="#0f1319" '
        f'stroke="#2a3340" stroke-width="1.5"/>',
        f'<text x="32" y="40" fill="#5b9fd4" font-size="14" font-family="{FONT}" '
        f'font-weight="700">{esc(title)}</text>',
        f'<text x="32" y="58" fill="#6b7788" font-size="10.5" font-family="{FONT}">'
        f'{esc(subtitle)}</text>',
    ]


def fig1() -> str:
    """Scale-out CPO switches — stack + platforms + phases."""
    w, h = 980, 620
    p = frame(
        w,
        h,
        "tl1-title",
        "Scale-out CPO switches — optics beside the switch chip",
        "Click a cell · Companies in the panel · Esc closes · Not investment advice",
    )
    # Today vs CPO path
    p.append(
        f'<text x="32" y="88" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Path</text>'
    )
    p.append(cell("so-pluggable", 32, 98, 200, 56, "Pluggable modules", "today’s faceplate optics", "#243028"))
    p.append(arrow(240, 126, 270, 126))
    p.append(cell("so-cpo-package", 278, 98, 220, 56, "CPO package", "optics next to switch ASIC", "#1e3a4a", scarcity="soon"))
    p.append(arrow(506, 126, 536, 126))
    p.append(cell("so-end", 544, 98, 400, 56, "End state: CPO default for AI scale-out", "switches ship with co-packaged optics", "#0d3d32"))

    # Inside the CPO package
    p.append(
        f'<text x="32" y="188" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Inside a CPO switch package</text>'
    )
    p.append(cell("so-switch-asic", 32, 200, 220, 70, "Switch ASIC", "Ethernet / InfiniBand silicon", "#2a4060"))
    p.append(cell("so-coupe", 268, 200, 220, 70, "Photonic engine", "TSMC COUPE-class", "#243050", scarcity="soon"))
    p.append(cell("so-els-feed", 504, 200, 200, 70, "ELS fiber feed", "external laser light in", "#2a3048"))
    p.append(cell("so-ports", 720, 200, 224, 70, "Optical ports", "800G-class lanes out", "#1a3040"))

    # Platform cells
    p.append(
        f'<text x="32" y="308" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Near-term platforms (~2026)</text>'
    )
    p.append(cell("so-quantum-x", 32, 320, 300, 72, "NVIDIA Quantum-X Photonics", "InfiniBand CPO · 144×800G", "#1e3a5a", scarcity="soon"))
    p.append(cell("so-spectrum-x", 348, 320, 300, 72, "NVIDIA Spectrum-X Photonics", "Ethernet CPO on TSMC COUPE", "#1e3a5a", scarcity="soon"))
    p.append(cell("so-bailly", 664, 320, 280, 72, "Broadcom Bailly → Davisson", "51.2T (2024) · 102.4T TH6-Davisson", "#1e3a5a", scarcity="soon"))

    # Phase cells
    p.append(
        f'<text x="32" y="428" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Adoption phases</text>'
    )
    p.append(cell("so-mainstream", 32, 440, 300, 64, "Becoming mainstream", "2026–2028 AI scale-out nets", "#243040"))
    p.append(cell("so-volume", 348, 440, 300, 64, "Volume wave", "2027–2028 shipments ramp", "#243040", scarcity="soon"))
    p.append(cell("so-ramp-2030", 664, 440, 280, 64, "Still ramping 2030", "adoption past first wave", "#243040"))

    p.append(
        f'<text x="32" y="545" fill="#6b7788" font-size="10" font-family="{FONT}">'
        f"Scale-out = linking racks through switch fabrics. Not investment advice.</text>"
    )
    p.append("</svg>")
    return "\n".join(p)


def fig2() -> str:
    """Scale-up optical I/O — on-package light for GPU-to-GPU."""
    w, h = 980, 600
    p = frame(
        w,
        h,
        "tl2-title",
        "Scale-up optical I/O — light on the GPU package",
        "Click a cell · Companies in the panel · Esc closes · Not investment advice",
    )
    p.append(
        f'<text x="32" y="88" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">On-package hop (no separate switch ASIC for this link)</text>'
    )
    p.append(cell("su-gpu", 32, 100, 160, 80, "GPU / XPU", "compute die", "#2a4060"))
    p.append(cell("su-serdes", 208, 100, 160, 80, "SerDes", "drives the modulator", "#283848"))
    p.append(cell("su-modulator", 384, 100, 160, 80, "Modulator", "imprints bits on light", "#243050", scarcity="soon"))
    p.append(cell("su-detector", 560, 100, 160, 80, "Detector", "light → electrons", "#243050"))
    p.append(cell("su-fiber", 736, 100, 208, 80, "Fiber out", "to peer GPU package", "#1a3040"))

    p.append(arrow(112, 190, 112, 220))
    p.append(cell("su-els", 32, 228, 336, 64, "External light source (ELS)", "laser lives off-package · shared feed", "#2a3048", scarcity="soon"))
    p.append(cell("su-end", 392, 228, 552, 64, "End state: SerDes → modulator; ELS feeds light; no switch ASIC on this hop", "peer optical I/O between GPUs", "#0d3d32"))

    p.append(
        f'<text x="32" y="332" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Specialists & timing</text>'
    )
    p.append(cell("su-ayar", 32, 344, 300, 70, "Ayar Labs TeraPHY + SuperNova", "private · OFC / Hot Chips demos", "#1e3a5a"))
    p.append(cell("su-lightmatter", 348, 344, 300, 70, "Lightmatter Passage", "private · optical interconnect", "#1e3a5a"))
    p.append(cell("su-celestial", 664, 344, 280, 70, "Celestial AI → Marvell", "photonic fabric · follow MRVL", "#1e3a5a"))

    p.append(cell("su-demos", 32, 432, 220, 70, "2025 demos", "OFC / Hot Chips showcases", "#243040"))
    p.append(cell("su-integration", 268, 432, 220, 70, "2026–2027 integration", "customer bring-up · lasers", "#243040", scarcity="soon"))
    p.append(cell("su-vendor-window", 504, 432, 220, 70, "Vendor-optimistic volume", "suppliers pitch 2027–2029", "#243040"))
    p.append(cell("su-sa-timing", 740, 432, 204, 70, "Analyst volume timing", "late 2028–2029 framing", "#243040"))

    p.append(
        f'<text x="32" y="545" fill="#6b7788" font-size="10" font-family="{FONT}">'
        f"Scale-up = linking GPUs inside a tightly coupled domain. Not investment advice.</text>"
    )
    p.append("</svg>")
    return "\n".join(p)


def fig3() -> str:
    """TSMC COUPE roadmap as generation cells."""
    w, h = 980, 560
    p = frame(
        w,
        h,
        "tl3-title",
        "TSMC Compact Universal Photonic Engine (COUPE)",
        "Click a cell · Companies in the panel · Esc closes · Not investment advice",
    )
    p.append(
        f'<text x="32" y="88" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Foundry building block — optics beside compute</text>'
    )
    p.append(cell("coupe-foundry", 32, 100, 280, 72, "TSMC foundry role", "silicon photonics + advanced package", "#1e3a5a", scarcity="soon"))
    p.append(cell("coupe-customer", 328, 100, 300, 72, "Platform customers", "e.g. NVIDIA Spectrum-X Photonics", "#243050"))
    p.append(cell("coupe-end", 644, 100, 300, 72, "End state: COUPE at scale", "optics beside dies as a standard brick", "#0d3d32"))

    p.append(
        f'<text x="32" y="210" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Generation stepping stones</text>'
    )
    p.append(cell("coupe-2026", 32, 224, 220, 100, "2026 substrate CPO", "200 Gb/s per lane microrings", "#2a4060", scarcity="soon"))
    p.append(arrow(260, 274, 290, 274))
    p.append(cell("coupe-6p4", 298, 224, 220, 100, "~2027 · 6.4 Tb/s", "next bandwidth step", "#2a4060", scarcity="soon"))
    p.append(arrow(526, 274, 556, 274))
    p.append(cell("coupe-12p8", 564, 224, 220, 100, "12.8 Tb/s on-interposer", "pathfinding · no firm volume date", "#283848"))
    p.append(arrow(792, 274, 822, 274))
    p.append(cell("coupe-density", 830, 224, 114, 100, "By 2030", "~4 Tb/s / mm density", "#1a3040"))

    p.append(cell("coupe-microring", 32, 360, 300, 80, "Microring modulators", "tiny rings that imprint data on light", "#243040"))
    p.append(cell("coupe-interposer", 348, 360, 300, 80, "On-interposer optics", "optics share package with compute", "#243040"))
    p.append(cell("coupe-density-goal", 664, 360, 280, 80, "Edge density goal", "more Tb/s per millimeter of edge", "#243040"))

    p.append(
        f'<text x="32" y="490" fill="#6b7788" font-size="10" font-family="{FONT}">'
        f"COUPE = Compact Universal Photonic Engine. Not investment advice.</text>"
    )
    p.append("</svg>")
    return "\n".join(p)


def fig4() -> str:
    """External light source schematic."""
    w, h = 980, 560
    p = frame(
        w,
        h,
        "tl4-title",
        "External light source (ELS) for co-packaged optics",
        "Click a cell · Companies in the panel · Esc closes · Not investment advice",
    )
    p.append(
        f'<text x="32" y="88" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Why lasers sit off the hot package</text>'
    )
    p.append(cell("els-arch", 32, 100, 300, 80, "ELS / ELSFP off-package", "~30% wall-plug efficiency class", "#2a3048", scarcity="soon"))
    p.append(cell("els-why", 348, 100, 300, 80, "Why external?", "swap · cool · share across engines", "#243050"))
    p.append(cell("els-end", 664, 100, 280, 80, "End state: swappable ELS", "multi-wavelength feeds, no hot lasers on every engine", "#0d3d32"))

    p.append(
        f'<text x="32" y="220" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Who supplies the light</text>'
    )
    p.append(cell("els-lumentum", 32, 234, 300, 80, "Lumentum", "lasers / optical engines / ELS", "#1e3a5a", scarcity="soon"))
    p.append(cell("els-coherent", 348, 234, 300, 80, "Coherent", "lasers & broader photonics", "#1e3a5a", scarcity="soon"))
    p.append(cell("els-nvidia-ties", 664, 234, 280, 80, "NVIDIA laser capacity ties", "2026 supply for AI optics ramps", "#1e3a5a"))

    p.append(
        f'<text x="32" y="350" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">Multi-wavelength sources</text>'
    )
    p.append(cell("els-supernova", 32, 364, 360, 80, "Ayar SuperNova", "many colors of light from one module · private", "#243050"))
    p.append(cell("els-mw", 408, 364, 280, 80, "Multi-wavelength", "WDM: one fiber, many channels", "#243040"))
    p.append(cell("els-axt", 704, 364, 240, 80, "Upstream InP wafers", "compound substrates for lasers", "#243040"))

    p.append(
        f'<text x="32" y="490" fill="#6b7788" font-size="10" font-family="{FONT}">'
        f"ELS = external light source. Not investment advice.</text>"
    )
    p.append("</svg>")
    return "\n".join(p)


def fig5() -> str:
    """Standards schematic."""
    w, h = 980, 540
    p = frame(
        w,
        h,
        "tl5-title",
        "Standards for optical chiplet I/O and external lasers",
        "Click a cell · Companies in the panel · Esc closes · Not investment advice",
    )
    p.append(
        f'<text x="32" y="88" fill="#9aa7b8" font-size="11" font-family="{FONT}" '
        f'font-weight="600">What must settle for mix-and-match optical parts</text>'
    )
    p.append(cell("std-ucie", 32, 100, 300, 100, "UCIe", "die-to-optical-chiplet electrical bridge", "#2a4060", scarcity="soon"))
    p.append(cell("std-msa", 348, 100, 300, 100, "Laser MSA", "common plugs & modules across suppliers", "#1e3a5a", scarcity="soon"))
    p.append(cell("std-protocols", 664, 100, 280, 100, "Optical protocols", "still less settled than copper SerDes", "#283848"))

    p.append(cell("std-copper-ref", 32, 240, 300, 80, "Copper SerDes maturity", "today’s reference for “settled”", "#243028"))
    p.append(cell("std-interop", 348, 240, 300, 80, "Cross-vendor interop", "mix engines, lasers, chiplets", "#243050"))
    p.append(cell("std-end", 664, 240, 280, 80, "End state: settled standards", "UCIe + laser MSAs + optical protocols as interchangeable as copper SerDes", "#0d3d32"))

    p.append(cell("std-chiplet", 32, 360, 300, 70, "Optical chiplet", "photonic I/O die beside compute", "#1a3040"))
    p.append(cell("std-bridge", 348, 360, 300, 70, "Electrical bridge", "short UCIe-class link on package", "#1a3040"))
    p.append(cell("std-ecosystem", 664, 360, 280, 70, "Ecosystem bodies", "consortia & MSA groups", "#1a3040"))

    p.append(
        f'<text x="32" y="480" fill="#6b7788" font-size="10" font-family="{FONT}">'
        f"UCIe = Universal Chiplet Interconnect Express · MSA = multi-source agreement. Not investment advice.</text>"
    )
    p.append("</svg>")
    return "\n".join(p)


FIGURES = [
    ("cpo-schematic-01-scale-out-switches.svg", fig1),
    ("cpo-schematic-02-scale-up-optical-io.svg", fig2),
    ("cpo-schematic-03-tsmc-coupe.svg", fig3),
    ("cpo-schematic-04-external-light-source.svg", fig4),
    ("cpo-schematic-05-standards.svg", fig5),
]


def main() -> None:
    for name, fn in FIGURES:
        path = OUT / name
        path.write_text(fn(), encoding="utf-8")
        print(f"wrote {path.name} ({path.stat().st_size}B)")


if __name__ == "__main__":
    main()
