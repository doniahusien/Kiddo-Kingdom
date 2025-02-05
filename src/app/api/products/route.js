import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  const filePath = path.join(process.cwd(), 'public', 'products.json');
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const toys = JSON.parse(data);
    return new Response(JSON.stringify(toys), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to load toys data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
