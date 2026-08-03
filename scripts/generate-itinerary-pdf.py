#!/usr/bin/env python3
"""
Regenerates public/lalita-ayush-weekend-itinerary.pdf.

This mirrors the event/venue copy in src/lib/wedding-content.server.ts and
src/routes/_gated.events.tsx. When that content changes, update CONTENT
below to match and re-run:

    pip install reportlab
    python3 scripts/generate-itinerary-pdf.py
"""

import os

from reportlab.lib.colors import Color
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

OUTPUT_PATH = os.path.join(
    os.path.dirname(__file__), "..", "public", "lalita-ayush-weekend-itinerary.pdf"
)

FONT_DIR = "/usr/share/fonts/truetype/dejavu"
pdfmetrics.registerFont(TTFont("DejaVuSerif", f"{FONT_DIR}/DejaVuSerif.ttf"))
pdfmetrics.registerFont(TTFont("DejaVuSerif-Bold", f"{FONT_DIR}/DejaVuSerif-Bold.ttf"))
pdfmetrics.registerFont(TTFont("DejaVuSans", f"{FONT_DIR}/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DejaVuSans-Bold", f"{FONT_DIR}/DejaVuSans-Bold.ttf"))

PAGE_W, PAGE_H = A4

FRAME_MARGIN = 34.02
CONTENT_L = 62.36
CONTENT_R = 532.91
CONTENT_W = CONTENT_R - CONTENT_L
COL_TIME_X = 68.36
COL_TITLE_X = 187.42
DETAIL_W = CONTENT_R - COL_TITLE_X

BG = Color(0.972549, 0.960784, 0.941176)
FRAME = Color(0.772549, 0.643137, 0.427451)
DARK = Color(0.243137, 0.196078, 0.172549)
MUTED = Color(0.454902, 0.415686, 0.376471)
GOLD = FRAME
PEACH = Color(0.909804, 0.85098, 0.784314)
HAIRLINE = Color(0.886275, 0.854902, 0.815686)
CARD_BG = Color(0.992157, 0.984314, 0.972549)
SAGE = Color(0.662745, 0.709804, 0.635294)

BODY_LEADING = 13.5
ASCENT = 0.80  # approximate ascent fraction, converts a "top" cursor to a text baseline

CONTINUATION_TOP = 74.0  # where content starts on a page with no header block
BOTTOM_LIMIT = 780.0  # cursor value beyond which content must flow to a new page

FOOTER_TEXT = "Lalita & Ayush  ·  20–22 February 2027  ·  Avani Kalutara Resort, Sri Lanka"

CONTENT = {
    "header": {
        "eyebrow": "The Wedding of",
        "title": "Lalita & Ayush",
        "subtitle": "Weekend Itinerary",
        "dates": "20 – 22 February 2027",
        "venue": "Avani Kalutara Resort, Kalutara, Sri Lanka",
    },
    "days": [
        {
            "label": "Saturday 20 February",
            "sublabel": "Arrival & Civil Ceremony",
            "events": [
                {
                    "time": "1:00 – 3:30 pm",
                    "title": "Welcome Lunch",
                    "detail": "Whether you've had time to settle in or have come straight "
                    "from the plane, join us for a relaxed buffet lunch.",
                    "location": "Mangrove Restaurant, Avani Kalutara Resort",
                },
                {
                    "time": "4:45 – 7:30 pm",
                    "title": "Civil Ceremony & Cocktail Hour",
                    "detail": "Our official 'I do'. Join us as we exchange our vows with the "
                    "ocean as our backdrop, followed by sunset cocktails and canapés. We "
                    "kindly ask that you are seated by 4:45 pm for the ceremony.",
                    "location": "The beach, Avani Kalutara Resort",
                },
                {
                    "time": "8:00 pm – 1:00 am",
                    "title": "Dinner & Dance",
                    "detail": "Raise a glass, enjoy dinner, hear a few heartfelt words and "
                    "dance the night away to the sounds of our live band.",
                    "location": "The River Mouth, Avani Kalutara Resort",
                },
            ],
        },
        {
            "label": "Sunday 21 February",
            "sublabel": "Pool Party & Sangeet",
            "events": [
                {
                    "time": "7:00 – 11:00 am",
                    "title": "Buffet Breakfast",
                    "detail": "Join us for a leisurely breakfast. Recharge, refuel and get "
                    "ready for round two.",
                    "location": "Mangrove Restaurant, Avani Kalutara Resort",
                },
                {
                    "time": "11:30 am – 3:30 pm",
                    "title": "Pool Party",
                    "detail": "Sunshine, cocktails, pool games, live food stalls and a DJ "
                    "playing all afternoon.",
                    "location": "The pool, Avani Kalutara Resort",
                },
                {
                    "time": "7:30 pm until late",
                    "title": "Sangeet, Dinner & DJ Night",
                    "detail": "The grand finale: vibrant performances, incredible food and a "
                    "packed dance floor, late into the early hours.",
                    "location": "Anantara Ballroom",
                },
            ],
        },
        {
            "label": "Monday 22 February",
            "sublabel": "Farewell",
            "events": [
                {
                    "time": "Breakfast before 11",
                    "title": "Breakfast & Checkout",
                    "detail": "One last buffet breakfast, a final coffee and goodbyes before "
                    "checking out by 12 pm.",
                    "location": "Mangrove Restaurant, Avani Kalutara Resort",
                },
            ],
        },
    ],
    "dress_codes": [
        {
            "eyebrow": "CIVIL CEREMONY · DINNER & DANCE",
            "title": "Summer Formal",
            "detail": "Pastels, florals and soft colour — colour is encouraged. Linen suits, "
            "flowing dresses and heels that can handle sand. Please avoid black, white and red.",
        },
        {
            "eyebrow": "POOL PARTY",
            "title": "Resort Beach Chic",
            "detail": "Elegant swimwear, kaftans and cover-ups, open linen shirts and swim "
            "shorts. Sunglasses essential.",
        },
        {
            "eyebrow": "SANGEET, DINNER & DJ NIGHT",
            "title": "Bollywood Glam",
            "detail": "Indian and Indo-Western at its most vibrant — sarees, lehengas, "
            "bandhgalas and kurtas. The brighter the better, and made for dancing.",
        },
    ],
    "info_rows": [
        (
            "Venue",
            "Avani Kalutara Resort, St. Sebastian's Road, Kalutara, Sri Lanka — where "
            "the Kalu Ganga meets the Indian Ocean.",
        ),
        ("Sangeet venue", "Anantara Ballroom."),
        (
            "Airport",
            "Colombo Bandaranaike International (CMB), roughly 1 hour 30 minutes north "
            "of the resort.",
        ),
        (
            "Transfers",
            "Provided for guests arriving Saturday and departing Monday. We'll collect "
            "flight details closer to the time.",
        ),
        ("Adults only", "This is an adults-only celebration."),
        ("RSVP", "Please RSVP by 7 November 2026."),
        ("Weather", "Warm and humid, around 30°C. Light, breathable fabrics recommended."),
    ],
}


def wrap_text(text, font, size, max_width):
    words = text.split(" ")
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if pdfmetrics.stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines or [""]


def y_for_top(top, size):
    return PAGE_H - top - size * ASCENT


def draw_text(c, x, top, text, font, size, color, centered=False):
    c.setFont(font, size)
    c.setFillColor(color)
    y = y_for_top(top, size)
    if centered:
        c.drawCentredString(x, y, text)
    else:
        c.drawString(x, y, text)


def draw_wrapped(c, x, top, lines, font, size, color, leading=BODY_LEADING):
    for i, line in enumerate(lines):
        draw_text(c, x, top + i * leading, line, font, size, color)
    return top + len(lines) * leading


def draw_page_chrome(c):
    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(FRAME)
    c.setLineWidth(1)
    c.rect(
        FRAME_MARGIN,
        FRAME_MARGIN,
        PAGE_W - 2 * FRAME_MARGIN,
        PAGE_H - 2 * FRAME_MARGIN,
        fill=0,
        stroke=1,
    )
    draw_text(c, PAGE_W / 2, 792.3, FOOTER_TEXT, "DejaVuSans", 7.5, MUTED, centered=True)


class Flow:
    """Tracks the vertical cursor and breaks to a new page when content overflows."""

    def __init__(self, c):
        self.c = c
        self.cursor = 0.0
        self.new_page(with_header=True)

    def new_page(self, with_header):
        if self.cursor:
            self.c.showPage()
        draw_page_chrome(self.c)
        self.cursor = CONTINUATION_TOP

    def ensure_space(self, needed):
        if self.cursor + needed > BOTTOM_LIMIT:
            self.new_page(with_header=False)

    def force_new_page(self):
        self.new_page(with_header=False)


def draw_header(c):
    h = CONTENT["header"]
    draw_text(c, PAGE_W / 2, 98.5, h["eyebrow"], "DejaVuSans", 7.5, GOLD, centered=True)
    draw_text(c, PAGE_W / 2, 117.9, h["title"], "DejaVuSerif-Bold", 30, DARK, centered=True)
    draw_text(c, PAGE_W / 2, 153.8, h["subtitle"], "DejaVuSerif", 13, GOLD, centered=True)
    draw_text(c, PAGE_W / 2, 173.1, h["dates"], "DejaVuSans", 10, MUTED, centered=True)
    draw_text(c, PAGE_W / 2, 189.1, h["venue"], "DejaVuSans", 10, MUTED, centered=True)


def event_block_height(event):
    detail_lines = wrap_text(event["detail"], "DejaVuSans", 8.8, DETAIL_W)
    return 18.1 + len(detail_lines) * BODY_LEADING + 16.3 + 12.06


def draw_event(c, top, event):
    draw_text(c, COL_TIME_X, top, event["time"], "DejaVuSans-Bold", 9, DARK)
    draw_text(c, COL_TITLE_X, top + 0.9, event["title"], "DejaVuSerif-Bold", 12.5, DARK)

    detail_lines = wrap_text(event["detail"], "DejaVuSans", 8.8, DETAIL_W)
    detail_top = top + 18.1
    last_line_top = detail_top + (len(detail_lines) - 1) * BODY_LEADING
    draw_wrapped(c, COL_TITLE_X, detail_top, detail_lines, "DejaVuSans", 8.8, MUTED)

    location_top = last_line_top + 16.3
    draw_text(c, COL_TITLE_X, location_top, f"◆ {event['location']}", "DejaVuSans", 8.2, GOLD)

    divider_top = location_top + 12.06
    c.setStrokeColor(HAIRLINE)
    c.setLineWidth(0.75)
    c.line(CONTENT_L, PAGE_H - divider_top, CONTENT_R, PAGE_H - divider_top)

    return divider_top


def draw_day_pill(c, top, day):
    height = 42.0
    c.setFillColor(PEACH)
    c.rect(CONTENT_L, PAGE_H - top - height, CONTENT_W, height, fill=1, stroke=0)
    c.setStrokeColor(GOLD)
    c.setLineWidth(3)
    c.line(CONTENT_L, PAGE_H - top - height, CONTENT_L, PAGE_H - top)
    draw_text(c, COL_TIME_X, top + 9.14, day["label"], "DejaVuSerif-Bold", 13, DARK)
    draw_text(c, COL_TIME_X, top + 27.94, day["sublabel"], "DejaVuSans", 8, MUTED)
    return top + height


def render_itinerary(flow):
    c = flow.c
    draw_header(c)
    flow.cursor = 231.06

    for day_index, day in enumerate(CONTENT["days"]):
        flow.ensure_space(42.0)
        flow.cursor = draw_day_pill(c, flow.cursor, day) + 12.14

        for event in day["events"]:
            flow.ensure_space(event_block_height(event))
            flow.cursor = draw_event(c, flow.cursor, event) + 11.14

        if day_index < len(CONTENT["days"]) - 1:
            flow.cursor += 33.07 - 11.14

    flow.cursor += 30.73 - 11.14


def render_dress_codes(flow):
    c = flow.c
    flow.ensure_space(17 + 24.1 + 27 + 16.35)
    draw_text(c, CONTENT_L, flow.cursor, "What to Wear", "DejaVuSerif-Bold", 17, DARK)
    intro_lines = wrap_text(
        "Sri Lanka in February is warm and humid — think breathable fabrics, and heels "
        "that can handle sand and grass.",
        "DejaVuSans",
        8.8,
        CONTENT_W,
    )
    draw_wrapped(c, CONTENT_L, flow.cursor + 24.1, intro_lines, "DejaVuSans", 8.8, MUTED)
    flow.cursor += 24.1 + len(intro_lines) * BODY_LEADING + 2.85

    pad_x = CONTENT_L + 9
    for dc in CONTENT["dress_codes"]:
        detail_lines = wrap_text(dc["detail"], "DejaVuSans", 8.8, CONTENT_W - 2 * 9)
        height = 50.0 + len(detail_lines) * BODY_LEADING

        flow.ensure_space(height)
        top = flow.cursor

        c.setFillColor(CARD_BG)
        c.rect(CONTENT_L, PAGE_H - top - height, CONTENT_W, height, fill=1, stroke=0)
        c.setStrokeColor(SAGE)
        c.setLineWidth(0.75)
        c.rect(CONTENT_L, PAGE_H - top - height, CONTENT_W, height, fill=0, stroke=1)

        draw_text(c, pad_x, top + 6.75, dc["eyebrow"], "DejaVuSans", 7.5, GOLD)
        draw_text(c, pad_x, top + 18.35, dc["title"], "DejaVuSerif-Bold", 12, DARK)
        draw_wrapped(c, pad_x, top + 47.15, detail_lines, "DejaVuSans", 8.8, MUTED)

        flow.cursor = top + height + 6.0


def render_venue_page(flow):
    c = flow.c
    flow.force_new_page()
    draw_text(c, CONTENT_L, 72.4, "Venue & Good to Know", "DejaVuSerif-Bold", 17, DARK)

    value_x = 158.74
    value_w = CONTENT_R - value_x
    flow.cursor = 101.5

    for label, value in CONTENT["info_rows"]:
        c.setFont("DejaVuSans-Bold", 8.8)
        c.setFillColor(DARK)
        c.drawString(CONTENT_L, y_for_top(flow.cursor, 8.8), label)

        value_lines = wrap_text(value, "DejaVuSans", 8.8, value_w)
        draw_wrapped(c, value_x, flow.cursor, value_lines, "DejaVuSans", 8.8, MUTED)

        row_height = len(value_lines) * BODY_LEADING
        divider_top = flow.cursor + row_height + 1.86
        c.setStrokeColor(HAIRLINE)
        c.setLineWidth(0.75)
        c.line(CONTENT_L, PAGE_H - divider_top, CONTENT_R, PAGE_H - divider_top)

        flow.cursor += row_height + 8.0

    draw_text(c, COL_TITLE_X, 300.6, "We can't wait to celebrate with you.", "DejaVuSerif", 12, GOLD)


def main():
    c = canvas.Canvas(OUTPUT_PATH, pagesize=A4)
    c.setTitle("Lalita & Ayush — Weekend Itinerary")
    c.setAuthor("Lalita & Ayush")

    flow = Flow(c)
    render_itinerary(flow)
    render_dress_codes(flow)
    render_venue_page(flow)

    c.showPage()
    c.save()
    print(f"Wrote {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
