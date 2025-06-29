import type { APIRoute } from "astro";
import { generateOgImageForPost } from "@/utils/og";
import { getCollection, getEntry } from "astro:content";
import { defaultLang } from "@/utils/i18n";

export async function getStaticPaths() {
  const posts = await getCollection("posts");

  const paths = [];
  for (const post of posts) {
    const slug = post.id;
    paths.push({
      params: { slug },
      props: { post },
    });
  }
  return paths;
}

export const GET: APIRoute = async ({ props, params }) => {
  let { post } = props;
  const { slug } = params;

  if (!post) {
    post = await getEntry("posts", slug as string);
  }

  return new Response(await generateOgImageForPost(defaultLang, post!), {
    headers: { "Content-Type": "image/png" },
  });
};
