import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, SITE_TITLE, SITE_DESCRIPTION } from '../consts';
// Include full post content
// import sanitizeHtml from 'sanitize-html';
// import MarkdownIt from 'markdown-it';
// const parser = new MarkdownIt();

export async function GET(context) {
	const posts = await getCollection('notes');
	return rss({
		title: SITE.NAME,
		description: SITE.DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/notes/${post.id}/`,
		})),
	});
}
