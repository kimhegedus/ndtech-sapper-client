import posts from './_data.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

export function get(req, res, next) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}