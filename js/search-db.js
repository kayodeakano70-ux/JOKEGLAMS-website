// JOKE GLAMS - Unified Search Database
// Client-side dataset of all goods (products) and beauty services.

const SEARCH_DATABASE = {
    products: [
        {
            id: "prod-foundation",
            name: "Professional Foundation",
            price: 5500,
            description: "Long-lasting liquid foundation for flawless coverage and custom skin tone match.",
            category: "Face",
            image: "images/foundation.jpg",
            keywords: ["foundation", "makeup", "face", "liquid", "skin", "coverage", "powder"]
        },
        {
            id: "prod-highlighter",
            name: "Luminous Highlighter",
            price: 3500,
            description: "Radiant glow with shimmer finish to highlight cheekbones and brow bones.",
            category: "Face",
            image: "images/highlighter.jpg",
            keywords: ["highlighter", "glow", "shimmer", "face", "shine", "luminous"]
        },
        {
            id: "prod-lipstick",
            name: "Matte Lipstick Set",
            price: 4200,
            description: "6 stunning colors with a long-wearing, non-drying matte formula.",
            category: "Lips",
            image: "images/lipstick.jpg",
            keywords: ["lipstick", "lips", "matte", "gloss", "colors", "red", "pink"]
        },
        {
            id: "prod-eyeshadow",
            name: "Eyeshadow Palette",
            price: 6500,
            description: "12-color premium palette featuring both matte and shimmer highly-pigmented shades.",
            category: "Eyes",
            image: "images/eyeshadow.jpg",
            keywords: ["eyeshadow", "palette", "eyes", "color", "matte", "shimmer", "pigment"]
        },
        {
            id: "prod-brush-set",
            name: "Professional Brush Set",
            price: 8000,
            description: "Complete 15-piece makeup brush collection with ultra-soft synthetic bristles.",
            category: "Tools",
            image: "images/brush_set.jpg",
            keywords: ["brush", "brushes", "set", "tools", "blend", "application", "professional"]
        },
        {
            id: "prod-eyeliner",
            name: "Precision Eyeliner",
            price: 2500,
            description: "Waterproof, smudge-proof eyeliner pen with a fine tip for sharp wings.",
            category: "Eyes",
            image: "images/eyeliner.jpg",
            keywords: ["eyeliner", "pencil", "eyes", "black", "waterproof", "precision", "wing"]
        },
        {
            id: "prod-primer",
            name: "Makeup Primer",
            price: 3800,
            description: "Pore-blurring base coat for long-lasting, smooth makeup application.",
            category: "Face",
            image: "images/primer.jpg",
            keywords: ["primer", "base", "pore", "face", "smooth", "prep"]
        },
        {
            id: "prod-blush",
            name: "Blush Compact",
            price: 2800,
            description: "Natural flush of color with buildable powder cheek blush.",
            category: "Face",
            image: "images/blush.jpg",
            keywords: ["blush", "pink", "cheeks", "powder", "face", "color"]
        },
        {
            id: "prod-setting-spray",
            name: "Makeup Setting Spray",
            price: 3200,
            description: "Hydrating setting spray that locks in makeup and keeps it fresh for up to 16 hours.",
            category: "Face",
            image: "images/setting_spray.jpg",
            keywords: ["spray", "setting", "finish", "mist", "lock", "hydration"]
        },
        {
            id: "prod-cleanser",
            name: "Makeup Cleanser",
            price: 2200,
            description: "Gentle makeup remover micellar water formulated for sensitive skin types.",
            category: "Skincare",
            image: "images/cleanser.jpg",
            keywords: ["cleanser", "remover", "skincare", "water", "micellar", "cleanse"]
        },
        {
            id: "prod-complete-kit",
            name: "Complete Makeup Kit",
            price: 15000,
            description: "All-in-one starter makeup kit with essential products for a full face look.",
            category: "Kits",
            image: "images/makeup_kit.jpg",
            keywords: ["kit", "complete", "combo", "starter", "palette", "full face"]
        },
        {
            id: "prod-glow-kit",
            name: "Glow Essentials Kit",
            price: 9500,
            description: "Highlighters, oils and glow products bundled together for a radiant skin finish.",
            category: "Kits",
            image: "images/glow_kit.jpg",
            keywords: ["glow", "shimmer", "kit", "oil", "highlighter", "radiant"]
        }
    ],
    services: [
        {
            id: "srv-bridal",
            name: "Bridal Makeup",
            price: 5000, // Deposit fee
            description: "Make your wedding day unforgettable with professional bridal makeup, contouring, lash application, and touch-ups.",
            category: "Makeup",
            image: "images/bridal_makeup.jpg",
            keywords: ["wedding", "bridal", "bride", "makeup", "glam", "traditional", "white wedding"]
        },
        {
            id: "srv-event",
            name: "Event Makeup",
            price: 5000, // Deposit fee
            description: "Perfect makeup application for parties, dinners, corporate gatherings, and other special social events.",
            category: "Makeup",
            image: "images/event_makeup.jpg",
            keywords: ["party", "dinner", "event", "celebration", "glam", "makeup", "birthday"]
        },
        {
            id: "srv-photo",
            name: "Photography Makeup",
            price: 5000, // Deposit fee
            description: "Specialized HD makeup designed to look flawless and non-reflective under studio flash and camera lenses.",
            category: "Makeup",
            image: "images/photography_makeup.jpg",
            keywords: ["photo", "shoot", "model", "camera", "studio", "hd", "video", "makeup"]
        },
        {
            id: "srv-lessons",
            name: "Makeup Lessons",
            price: 5000, // Deposit fee
            description: "Learn professional makeup application techniques from our leading artists. One-on-one sessions tailored for you.",
            category: "Education",
            image: "images/makeup_lessons.jpg",
            keywords: ["lesson", "class", "learn", "teach", "tutorial", "skills", "one-on-one", "course"]
        },
        {
            id: "srv-gele",
            name: "Gele Tying",
            price: 5000, // Deposit fee
            description: "Traditional and contemporary gele tying styling (pleated, infinity, rose gele, etc.) for cultural events.",
            category: "Styling",
            image: "images/gele_tying.jpg",
            keywords: ["gele", "headwrap", "tying", "traditional", "owambe", "asoebi", "yoruba"]
        },
        {
            id: "srv-consultation",
            name: "Beauty Consultation",
            price: 5000, // Deposit fee
            description: "Detailed skin assessment, product recommendations, and custom makeup recommendations matching your profile.",
            category: "Consultation",
            image: "images/beauty_consultation.jpg",
            keywords: ["consultation", "skin", "advice", "products", "tips", "routine", "coaching"]
        }
    ]
};
