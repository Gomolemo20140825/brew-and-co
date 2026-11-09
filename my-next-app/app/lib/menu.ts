import { readFileSync } from "fs";
import { join } from "path";

export interface MenuItem {
  category: string;
  name: string;
  description: string;
  price: string;
  badge: string;
  image: string;
}

export interface MenuCategory {
  name: string;
  slug: string;
  items: MenuItem[];
}

const ITEM_IMAGES: Record<string, string> = {
  "Flat White": "/menu-flat-white.webp",
  Cortado: "/menu-cortado.webp",
  "Oat Cappuccino": "/menu-oat-cappuccino.webp",
  "Long Black": "/menu-long-black.webp",
  "Honey Lavender Latte": "/menu-honey-lavender-latte.webp",
  Piccolo: "/menu-piccolo.webp",
  "Cold Brew": "/menu-cold-brew.webp",
  "Iced Caramel Amber": "/menu-iced-caramel-amber.webp",
  "Sparkling Cascara": "/menu-sparkling-cascara.webp",
  "Still Lemonade": "/menu-still-lemonade.webp",
  "Almond Croissant": "/menu-almond-croissant.webp",
  "Pain au Chocolat": "/menu-pain-au-chocolat.webp",
  "Morning Bun": "/menu-morning-bun.webp",
  "Banana Bread": "/menu-banana-bread.webp",
  "Cardamom Knot": "/menu-cardamom-knot.webp",
  "Prosciutto & Pecorino": "/menu-prosciutto-pecorino.webp",
  "Roasted Mushroom & Gruyère": "/menu-roasted-mushroom.webp",
  "Smoked Salmon Bagel": "/menu-smoked-salmon-bagel.webp",
  "BLT on Brioche": "/menu-blt-brioche.webp",
  "Egg & Aged Cheddar": "/menu-egg-cheddar.webp",
};

const CATEGORY_ORDER = [
  "Espresso Drinks",
  "Cold Drinks",
  "Pastries",
  "Sandwiches",
];

export function getMenuItems(): MenuItem[] {
  const csvPath = join(process.cwd(), "docs", "menu -items.csv");
  const raw = readFileSync(csvPath, "utf-8");
  const lines = raw.trim().split("\n");

  return lines.slice(1).map((line) => {
    const parts = line.split(",");
    const category = parts[0].trim();
    const name = parts[1].trim();
    const price = parts.at(-2)?.trim() ?? "";
    const badge = parts.at(-1)?.trim() ?? "";
    const description = parts.slice(2, -2).join(",").trim();
    const image =
      ITEM_IMAGES[name] ??
      "/menu-flat-white.webp";

    return { category, name, description, price, badge, image };
  });
}

export function getMenuByCategory(items: MenuItem[]): MenuCategory[] {
  const map = new Map<string, MenuItem[]>();

  for (const item of items) {
    const list = map.get(item.category) ?? [];
    list.push(item);
    map.set(item.category, list);
  }

  return CATEGORY_ORDER.filter((cat) => map.has(cat)).map((cat) => ({
    name: cat,
    slug: cat.toLowerCase().replace(/\s+/g, "-"),
    items: map.get(cat)!,
  }));
}
