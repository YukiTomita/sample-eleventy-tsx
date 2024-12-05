import "tsx/esm";
import { jsxToString } from "jsx-async-runtime";
import posts from './_src/_data/posts';

const BASE_DIR = './_src';

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig: any) {
	eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx,11tydata.ts,md');
	eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
		key: "11ty.js",
	});

  eleventyConfig.addTransform("tsx", async (content: any) => {
    const result = await jsxToString(content);
    return `<!doctype html>\n${result}`;
  });

	eleventyConfig.addCollection('posts', (collectionsApi) => {
    return posts.map(page => ({
      id: page.id,
      data: page,
    }));
	});

	return {
		dir: {
			input: `${BASE_DIR}/pages`, 
			includes: '../_modules/_includes',
			layouts: '../_modules/_layouts', 
			data: '../_data',
			output: "_dist"
		},
	}
}

