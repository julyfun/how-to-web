import type { APIRoute } from "astro";

import { getCollection } from "astro:content";
import { getSnapshots } from "@/utils/post";
import { defaultLang } from "@/utils/i18n";

export const GET: APIRoute = async ({ params }) => {
  const rank = Number(params.rank);

  const posts = await getCollection("posts");
  const snapshots = await getSnapshots(posts, defaultLang);

  return new Response(
    JSON.stringify(
      snapshots.map((snapshot, index) => ({ rank: index + 1, ...snapshot }))[
        rank - 1
      ],
    ),
  );
};

export async function getStaticPaths() {
  const posts = await getCollection("posts");
  const snapshots = await getSnapshots(posts, defaultLang);

  return snapshots.map((_, index) => ({
    params: { rank: String(index + 1) },
  }));
}
