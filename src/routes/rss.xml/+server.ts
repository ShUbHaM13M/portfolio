import { getBlogs } from '$lib/data/blogs/api';
import { description, siteBaseUrl, title } from '$lib/data/meta';
import { Blog } from '$lib/utils/types';
import { marked } from 'marked';

export const prerender = true;

export async function GET() {
	const blogs = await getBlogs();

	const promises = blogs.items.map(async (blog) => {
		blog.content = await marked.parse(
			blog.content.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, '')
		);

		blog.content = blog.content.replaceAll('<a href="/', `<a href="${siteBaseUrl}/`);
		blog.content = blog.content.replaceAll('<img src="/', `<img src="${siteBaseUrl}/`);
	});

	await Promise.all(promises);

	const body = xml(blogs.items);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	return new Response(body, { headers });
}

// TODO: Update favicons
// - add multiple sizes
const xml = (blogs: Blog[]) => `
<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	xmlns:georss="http://www.georss.org/georss"
	xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
>
  <channel>
    <atom:link href="http://wwww.shubham-maurya.vercel.app/rss.xml" rel="self" type="application/rss+xml" />
    <title>${title}</title>
    <link>${siteBaseUrl}</link>
    <description>${description}</description>
    <image>
      <url>${siteBaseUrl}/favicon.svg</url>
      <title>${title}</title>
      <link>${siteBaseUrl}</link>
      <width>32</width>
      <height>32</height>
    </image>
    ${blogs
		.map(
			(blog) => `
        <item>
          <guid>${siteBaseUrl}/${blog.slug}</guid>
          <title>${blog.title}</title>
          <description>${blog.excerpt}</description>
          <link>${siteBaseUrl}/${blog.slug}</link>
          <pubDate>${blog.date}</pubDate>
          ${blog.tags ? blog.tags.map((tag) => `<category>${tag}</category>`).join('') : ''}
          <content:encoded><![CDATA[
            <div style="margin: 50px 0; font-style: italic;">
              If anything looks wrong, 
              <strong>
                <a href="${siteBaseUrl}/${blog.slug}">
                  read on the site!
                </a>
              </strong>
            </div>

            ${blog.content}
          ]]></content:encoded>
          ${blog.coverImage ? `<media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="${siteBaseUrl}${blog.coverImage.src}"/>` : ''}
          ${blog.coverImage ? `<media:content xmlns:media="http://search.yahoo.com/mrss/" medium="image" url="${siteBaseUrl}${blog.coverImage.src}"/>` : ''}          
        </item>
      `
		)
		.join('')}
  </channel>
</rss>`;