import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../consts';
import { getPosts } from './posts';

export async function GET(context: APIContext) {
  const site = context.site!.toString().replace(/\/$/, '');
  const posts = await getPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      categories: post.data.categories,
      link: `/posts/${post.id}/`,
      // Feed readers need absolute URLs for images and links.
      content: post.rendered?.html.replace(/(src|href)="\//g, `$1="${site}/`),
    })),
  });
}
