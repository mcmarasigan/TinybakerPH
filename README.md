# 🍪 TinyBaker PH — Landing Page

> A kawaii-themed bakery landing page for **TinyBaker PH**, a home-based gourmet bakery based in Project 8, Quezon City, Philippines. Built with React + Vite.

---

## ✨ Live Preview

> _Coming soon — deploy link here_

---

## 🧁 About TinyBaker PH

TinyBaker PH is a home-based bakery offering handcrafted gourmet cookies, triple chocolate brownies, croissants, and crookies — baked fresh and strictly pre-order only.

📍 **Location:** Project 8, Quezon City, Philippines  
📦 **Order type:** Pre-order only  
📱 **Social:**
- [Facebook](https://www.facebook.com/Tinybakerph)
- [Instagram](https://www.instagram.com/tinybaker_ph)
- [TikTok](https://www.tiktok.com/@tinybaker_ph)

---

## 🛍️ Menu

### 🍪 Gourmet Cookies
| Flavor | 40g (mini) | 100g (large) |
|--------|-----------|-------------|
| Dark Chocolate with Walnuts | ₱300/6pcs · ₱580/12pcs | ₱130/pc · ₱1,020/8pcs |
| Red Velvet with Creamcheese | ₱300/6pcs · ₱580/12pcs | ₱130/pc · ₱1,020/8pcs |
| Matcha with White Chocolate | ₱300/6pcs · ₱580/12pcs | ₱130/pc · ₱1,020/8pcs |
| Midnight Oreo ✨ NEW | ₱300/6pcs · ₱580/12pcs | ₱130/pc · ₱1,020/8pcs |

### 🟫 Triple Chocolate Brownies (Mini Bites)
| Size | Price |
|------|-------|
| 6's | ₱120 |
| 12's | ₱220 |
| 24's | ₱420 |

### 🥐 Croissants
| Item | Price |
|------|-------|
| Butter Croissant | ₱100 |
| Almond Croissant | ₱160 |

### 🥐🍪 Crookies (Croissant × Cookie)
| Item | Price |
|------|-------|
| Crookie | ₱160 |

---

## 🎨 Design

| Element | Value |
|---------|-------|
| Primary | `#FFB6D9` Soft Pink |
| Secondary | `#FFFDD0` Cream |
| Accent | `#D4A574` Light Brown |
| Font | Quicksand + Pacifico (Google Fonts) |
| Aesthetic | Kawaii / cute bakery |

---

## 🧱 Tech Stack

- ⚛️ **React 18** — Component-based UI
- ⚡ **Vite** — Fast dev server & build tool
- 🎨 **Vanilla CSS** — Custom design system with CSS variables
- 🖼️ **Inline SVG** — Kawaii mascot characters
- 📱 **Fully responsive** — Mobile + desktop

---

## 📁 Project Structure

```
TinybakerPH/
├── public/
│   ├── logo.png
│   ├── dark-choco-cookie.png
│   ├── red-velvet-cookie.png
│   ├── matcha-cookie.png
│   ├── midnight-oreo-cookie.png
│   ├── brownies.png
│   ├── butter-croissant.png
│   ├── almond-croissant.png
│   └── crookie.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Gallery.jsx / .css
│   │   ├── WhyChooseUs.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx
│   └── index.css
└── index.html
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/TinybakerPH.git
cd TinybakerPH

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📸 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Floating kawaii SVG mascots, CTA buttons, stats |
| **About** | Bakery story, animated baker illustration, mission & values |
| **Gallery** | Products grouped by category, hover overlays, sticker badges |
| **Why Choose Us** | Feature cards + customer testimonials |
| **Contact** | Info cards, social links, contact form |
| **Footer** | Links, menu, social icons, copyright |

---

## 📝 Notes

- Place product images in `/public/` (white/transparent backgrounds work best)
- Gallery uses `mix-blend-mode: multiply` for a sticker-like float effect
- Scroll reveal uses native `IntersectionObserver` — zero extra libraries

---

_Baked fresh. Delivered with love. ✨_
