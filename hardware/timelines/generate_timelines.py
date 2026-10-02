#!/usr/bin/env python3
"""Generate CPO timeline SVG + PNG figures for the hardware photonics briefing."""

from __future__ import annotations

import html
from pathlib import Path

OUT = Path(__file__).resolve().parent
W = 1520

BG = "#f7f9fc"
CARD = "#ffffff"
INK = "#1a2332"
MUTED = "#5a6a7e"
LINE = "#c5d0de"
ACCENT = "#2b6cb0"
ACCENT2 = "#0d9488"
MARKER = "#1e40af"
END_BG = "#ecfdf5"
END_BORDER = "#10b981"
CAPTION = "#64748b"


def esc(s: str) -> str:
    return html.escape(s, quote=True)


def wrap_lines(text: str, max_chars: int = 40) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur: list[str] = []
    for w in words:
        trial = (" ".join(cur + [w])).strip()
        if cur and len(trial) > max_chars:
            lines.append(" ".join(cur))
            cur = [w]
        else:
            cur.append(w)
    if cur:
        lines.append(" ".join(cur))
    return lines or [""]


def timeline_svg(
    *,
    title: str,
    subtitle: str,
    milestones: list[dict],
    end_state: str,
    year_start: float,
    year_end: float,
    height: int = 780,
) -> str:
    H = height
    pad_l, pad_r = 52, 52
    axis_y = int(H * 0.42)
    end_box_y = H - 175
    usable = W - pad_l - pad_r

    def x_of(y: float) -> float:
        t = (y - year_start) / (year_end - year_start)
        return pad_l + max(0.0, min(1.0, t)) * usable

    ticks = list(range(int(year_start) if year_start == int(year_start) else int(year_start) + 1, int(year_end) + 1))
    # Always include integer years in range
    ticks = []
    y = int(year_start)
    if year_start > y:
        y += 1
    while y <= int(year_end):
        ticks.append(y)
        y += 1

    # Precompute marker x and assign staggered rows to reduce collisions
    # Sort by x for row assignment
    items = []
    for i, m in enumerate(milestones):
        if m.get("band"):
            mx = (x_of(m["band"][0]) + x_of(m["band"][1])) / 2
        else:
            mx = x_of(float(m["year_num"]))
        items.append((mx, i, m))
    items.sort(key=lambda t: t[0])

    # Greedy row assignment: 3 rows above axis
    row_last_x = [-9999.0, -9999.0, -9999.0]
    min_gap = 260.0
    row_for: dict[int, int] = {}
    for mx, i, m in items:
        placed = False
        for r in range(3):
            if mx - row_last_x[r] >= min_gap:
                row_for[i] = r
                row_last_x[r] = mx
                placed = True
                break
        if not placed:
            # pick farthest row
            r = max(range(3), key=lambda rr: mx - row_last_x[rr])
            row_for[i] = r
            row_last_x[r] = mx

    row_offset = [95, 175, 255]  # distance above axis for card bottom

    parts: list[str] = []
    parts.append(
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" '
        f'viewBox="0 0 {W} {H}" role="img" aria-labelledby="title desc">'
    )
    parts.append(f'<title id="title">{esc(title)}</title>')
    parts.append(f'<desc id="desc">{esc(subtitle)}. Not investment advice.</desc>')
    parts.append(f'<rect width="{W}" height="{H}" fill="{BG}"/>')
    parts.append(
        f'<rect x="20" y="16" width="{W-40}" height="{H-32}" rx="14" fill="{CARD}" '
        f'stroke="{LINE}" stroke-width="1.5"/>'
    )

    parts.append(
        f'<text x="{pad_l}" y="52" font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" '
        f'font-size="25" font-weight="700" fill="{INK}">{esc(title)}</text>'
    )
    parts.append(
        f'<text x="{pad_l}" y="78" font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" '
        f'font-size="13.5" fill="{MUTED}">{esc(subtitle)}</text>'
    )

    # Axis
    tip = W - pad_r
    parts.append(
        f'<line x1="{pad_l}" y1="{axis_y}" x2="{tip-10}" y2="{axis_y}" '
        f'stroke="{ACCENT}" stroke-width="3.5" stroke-linecap="round"/>'
    )
    parts.append(
        f'<polygon points="{tip},{axis_y} {tip-16},{axis_y-8} {tip-16},{axis_y+8}" fill="{ACCENT}"/>'
    )

    for ty in ticks:
        tx = x_of(float(ty))
        parts.append(
            f'<line x1="{tx}" y1="{axis_y-9}" x2="{tx}" y2="{axis_y+9}" '
            f'stroke="{ACCENT}" stroke-width="2"/>'
        )
        parts.append(
            f'<text x="{tx}" y="{axis_y+30}" text-anchor="middle" '
            f'font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="13" '
            f'font-weight="600" fill="{MUTED}">{ty}</text>'
        )

    for i, m in enumerate(milestones):
        band = m.get("band")
        if band:
            x1, x2 = x_of(band[0]), x_of(band[1])
            by = axis_y - 36 - (row_for[i] % 2) * 16
            parts.append(
                f'<rect x="{x1}" y="{by}" width="{max(10, x2 - x1)}" height="12" rx="4" '
                f'fill="{ACCENT2}" opacity="0.38"/>'
            )
            mx = (x1 + x2) / 2
        else:
            mx = x_of(float(m["year_num"]))

        row = row_for[i]
        card_bottom = axis_y - row_offset[row]

        label_lines = wrap_lines(m["label"], 36)
        detail_lines = wrap_lines(m.get("detail", ""), 38) if m.get("detail") else []
        card_h = 24 + 15 * len(label_lines) + 13 * len(detail_lines) + 6
        card_w = 268
        cx = max(pad_l + 2, min(mx - card_w / 2, W - pad_r - card_w - 2))
        cy = card_bottom - card_h

        # Stem from axis to card
        parts.append(
            f'<line x1="{mx}" y1="{axis_y}" x2="{mx}" y2="{cy + card_h}" '
            f'stroke="{MARKER}" stroke-width="1.4" stroke-dasharray="3 3"/>'
        )
        parts.append(
            f'<circle cx="{mx}" cy="{axis_y}" r="7.5" fill="{MARKER}" stroke="#fff" stroke-width="2.2"/>'
        )

        parts.append(
            f'<rect x="{cx}" y="{cy}" width="{card_w}" height="{card_h}" rx="8" '
            f'fill="#eff6ff" stroke="#93c5fd" stroke-width="1.2"/>'
        )
        ty = cy + 17
        parts.append(
            f'<text x="{cx + 10}" y="{ty}" font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" '
            f'font-size="11.5" font-weight="700" fill="{ACCENT}">{esc(m["year"])}</text>'
        )
        ty += 15
        for ln in label_lines:
            parts.append(
                f'<text x="{cx + 10}" y="{ty}" font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" '
                f'font-size="12.2" font-weight="600" fill="{INK}">{esc(ln)}</text>'
            )
            ty += 14.5
        for ln in detail_lines:
            parts.append(
                f'<text x="{cx + 10}" y="{ty}" font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" '
                f'font-size="11" fill="{MUTED}">{esc(ln)}</text>'
            )
            ty += 13

    # End-state
    end_lines = wrap_lines(end_state, 100)
    box_h = 36 + 22 * len(end_lines) + 10
    parts.append(
        f'<rect x="{pad_l}" y="{end_box_y}" width="{usable}" height="{box_h}" rx="10" '
        f'fill="{END_BG}" stroke="{END_BORDER}" stroke-width="1.5"/>'
    )
    parts.append(
        f'<text x="{pad_l + 18}" y="{end_box_y + 26}" '
        f'font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="12.5" '
        f'font-weight="700" fill="{ACCENT2}" letter-spacing="0.08em">END STATE</text>'
    )
    ey = end_box_y + 50
    for ln in end_lines:
        parts.append(
            f'<text x="{pad_l + 18}" y="{ey}" '
            f'font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="15.5" '
            f'font-weight="600" fill="{INK}">{esc(ln)}</text>'
        )
        ey += 22

    parts.append(
        f'<text x="{W / 2}" y="{H - 28}" text-anchor="middle" '
        f'font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="12.5" '
        f'fill="{CAPTION}">Not investment advice.</text>'
    )
    parts.append("</svg>")
    return "\n".join(parts)


FIGURES = [
    {
        "stem": "cpo-timeline-01-scale-out-switches",
        "height": 820,
        "title": "Co-packaged optics (CPO) for AI scale-out switches",
        "subtitle": "When optics sit next to the switch chip so AI clusters can connect racks at higher bandwidth",
        "year_start": 2025.6,
        "year_end": 2030.6,
        "milestones": [
            {
                "year": "2026",
                "year_num": 2026.05,
                "label": "NVIDIA Quantum-X Photonics InfiniBand CPO",
                "detail": "144 ports, 800 gigabits per second",
            },
            {
                "year": "H2 2026",
                "year_num": 2026.7,
                "label": "Spectrum-X Photonics Ethernet on TSMC COUPE",
                "detail": "Compact Universal Photonic Engine (COUPE)",
            },
            {
                "year": "2024",
                "year_num": 2024.5,
                "label": "Broadcom 51.2 terabits per second Bailly",
                "detail": "2nd-gen CPO milestone; Delta / Micas; Meta validation",
            },
            {
                "year": "Mar 2026",
                "year_num": 2026.2,
                "label": "Broadcom Tomahawk 6-Davisson 102.4T",
                "detail": "3rd-gen CPO; TH6 volume from ~2026-03-12",
            },
            {
                "year": "2026–2028",
                "year_num": 2027.2,
                "band": (2026.0, 2028.0),
                "label": "Becoming mainstream for AI scale-out networking",
                "detail": "",
            },
            {
                "year": "2027–2028",
                "year_num": 2027.75,
                "band": (2027.05, 2028.25),
                "label": "Volume wave",
                "detail": "Shipments ramp across vendors",
            },
            {
                "year": "2030",
                "year_num": 2030.05,
                "label": "Still ramping",
                "detail": "Adoption continues past first wave",
            },
        ],
        "end_state": "Co-packaged optics (CPO) becomes the default for AI scale-out switches.",
    },
    {
        "stem": "cpo-timeline-02-scale-up-optical-io",
        "height": 800,
        "title": "Scale-up optical I/O — light on the GPU package",
        "subtitle": "Moving bits between GPUs with on-package optics instead of copper cables for that hop",
        "year_start": 2024.6,
        "year_end": 2030.1,
        "milestones": [
            {
                "year": "2025",
                "year_num": 2025.15,
                "label": "Ayar Labs TeraPHY + SuperNova, Lightmatter Passage, Celestial AI photonic fabric",
                "detail": "Optical Fiber Communication Conference (OFC) / Hot Chips",
            },
            {
                "year": "2026",
                "year_num": 2026.2,
                "label": "Ayar customer integration; production late 2026–2027",
                "detail": "NVIDIA–Lumentum/Coherent laser ties",
            },
            {
                "year": "2027–2029",
                "year_num": 2028.0,
                "band": (2027.0, 2029.0),
                "label": "Vendor-optimistic window",
                "detail": "Suppliers pitch volume earlier",
            },
            {
                "year": "Late 2028–2029",
                "year_num": 2028.65,
                "label": "SemiAnalysis-style volume timing",
                "detail": "Copper through much of NVIDIA Rubin scale-up",
            },
            {
                "year": "Patel / SemiAnalysis",
                "year_num": 2029.25,
                "label": "Scale-up volume late 2028; real scale 2029",
                "detail": "Independent analyst framing of the ramp",
            },
        ],
        "end_state": "GPU serializer/deserializer (SerDes) drives the modulator; an external laser feeds light; no separate switch ASIC for that hop.",
    },
    {
        "stem": "cpo-timeline-03-tsmc-coupe",
        "height": 760,
        "title": "TSMC Compact Universal Photonic Engine (COUPE) roadmap",
        "subtitle": "Foundry path to put optics beside compute dies — density and bandwidth stepping stones",
        "year_start": 2025.5,
        "year_end": 2030.6,
        "milestones": [
            {
                "year": "2026",
                "year_num": 2026.2,
                "label": "Substrate-level co-packaged optics (CPO)",
                "detail": "200 gigabits per second per lane microrings",
            },
            {
                "year": "~2027",
                "year_num": 2027.2,
                "label": "6.4 terabits per second",
                "detail": "Next bandwidth step on the COUPE path",
            },
            {
                "year": "Pathfinding",
                "year_num": 2028.4,
                "label": "12.8 terabits per second on-interposer",
                "detail": "Pathfinding — no firm volume date",
            },
            {
                "year": "By 2030",
                "year_num": 2030.0,
                "label": "~4 terabits per second per millimeter density goal",
                "detail": "Optics packed tightly beside compute",
            },
        ],
        "end_state": "Optics beside compute dies at scale — Compact Universal Photonic Engine (COUPE) as a foundry building block.",
    },
    {
        "stem": "cpo-timeline-04-external-light-source",
        "height": 720,
        "title": "External light source (ELS) for co-packaged optics",
        "subtitle": "Lasers live off the package so they can be swapped, cooled, and shared across engines",
        "year_start": 2025.4,
        "year_end": 2028.2,
        "milestones": [
            {
                "year": "Architecture",
                "year_num": 2025.7,
                "label": "External light source (ELS) / ELSFP off-package",
                "detail": "~30% wall-plug efficiency",
            },
            {
                "year": "2026",
                "year_num": 2026.35,
                "label": "NVIDIA–Lumentum / Coherent capacity",
                "detail": "Laser supply tied to AI optics ramps",
            },
            {
                "year": "2026–2027",
                "year_num": 2026.9,
                "band": (2026.0, 2027.35),
                "label": "Ayar SuperNova multi-wavelength sources",
                "detail": "Many colors of light from one module",
            },
        ],
        "end_state": "Swappable multi-wavelength external light sources (ELS) feed co-packaged optics without putting hot lasers on every engine.",
    },
    {
        "stem": "cpo-timeline-05-standards",
        "height": 740,
        "title": "Standards for optical chiplet I/O and external lasers",
        "subtitle": "What still needs to settle so vendors can mix and match optical parts like copper links",
        "year_start": 2025.0,
        "year_end": 2030.0,
        "milestones": [
            {
                "year": "Die-to-chiplet",
                "year_num": 2026.0,
                "label": "Universal Chiplet Interconnect Express (UCIe)",
                "detail": "Die-to-optical-chiplet electrical bridge",
            },
            {
                "year": "Lasers",
                "year_num": 2027.3,
                "label": "Multi-source agreement (MSA) for external lasers",
                "detail": "Common plugs and modules across suppliers",
            },
            {
                "year": "Protocols",
                "year_num": 2028.5,
                "label": "Optical protocols less settled than copper SerDes",
                "detail": "Serializer/deserializer (SerDes) copper still more mature",
            },
        ],
        "end_state": "Settled cross-vendor optical I/O standards — Universal Chiplet Interconnect Express (UCIe), laser multi-source agreements (MSAs), and optical protocols as interchangeable as copper serializer/deserializer (SerDes).",
    },
]


def main() -> None:
    import cairosvg

    for fig in FIGURES:
        svg = timeline_svg(
            title=fig["title"],
            subtitle=fig["subtitle"],
            milestones=fig["milestones"],
            end_state=fig["end_state"],
            year_start=fig["year_start"],
            year_end=fig["year_end"],
            height=fig.get("height", 780),
        )
        svg_path = OUT / f"{fig['stem']}.svg"
        png_path = OUT / f"{fig['stem']}.png"
        svg_path.write_text(svg, encoding="utf-8")
        # Parse height from svg
        h = fig.get("height", 780)
        cairosvg.svg2png(
            bytestring=svg.encode("utf-8"),
            write_to=str(png_path),
            output_width=W,
            output_height=h,
        )
        print(f"{svg_path.name}: {svg_path.stat().st_size}B  {png_path.name}: {png_path.stat().st_size}B")


if __name__ == "__main__":
    main()
