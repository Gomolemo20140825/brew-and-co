import { getMenuByCategory, getMenuItems } from "../../lib/menu";

// Public, read-only menu feed (same CSV that powers /menu).
// Consumed by the n8n chatbot so it always quotes current prices.
export function GET() {
  const categories = getMenuByCategory(getMenuItems()).map((category) => ({
    name: category.name,
    items: category.items.map(({ name, description, price, badge }) => ({
      name,
      description,
      price: Number(price),
      badge: badge || null,
    })),
  }));

  return Response.json({ updated: new Date().toISOString(), categories });
}
