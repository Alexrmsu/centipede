import cloudscraper from "cloudscraper";

export async function cloudflare(url: string): Promise<string> {
    return await cloudscraper(url);
}

