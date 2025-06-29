import { fromMarkdown } from "mdast-util-from-markdown";
import { toString as mdastToString } from "mdast-util-to-string";

// 添加缓存
const descriptionCache = new Map<string, string>();

export function getDescFromMdString(mdString: string | undefined) {
  if (!mdString) {
    return "";
  }

  // 使用 md5 或其他哈希函数生成缓存键
  // 这里简化处理，直接使用前100个字符作为键
  const cacheKey = mdString.slice(0, 100);

  if (descriptionCache.has(cacheKey)) {
    return descriptionCache.get(cacheKey)!;
  }

  const mdast = fromMarkdown(mdString);
  const desc = mdastToString(mdast);
  const pos = desc.indexOf("<!--more-->");
  const result = desc.slice(0, pos);

  // 存入缓存
  descriptionCache.set(cacheKey, result);
  return result;
}

export function remarkDescPlugin() {
  return (tree: any, { data }: any) => {
    const textOnPage = mdastToString(tree);
    data.astro.frontmatter.desc = getDescFromMdString(textOnPage);
  };
}
