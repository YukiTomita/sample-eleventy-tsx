import "tsx/esm";
import { jsxToString } from "jsx-async-runtime";
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

import posts from './_src/_data/posts';
import rollupConfig from "./rollup.config";

const BASE_DIR = './_src';

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig: any) {
	eleventyConfig.addPassthroughCopy('_src/assets');
  eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx,11tydata.ts,md');
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
  });

  // vite
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      publicDir: '_src/public',
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern-compiler",
          },
        },
      },
      build: {
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              const cssRegex = new RegExp('\.css$', 'i');
              const imgRegex = new RegExp('\.(gif|jpeg|jpg|png|svg|webp)$', 'i');
              if(cssRegex.test(assetInfo.name)) {
                return 'assets/css/[name].min.[hash].[ext]';
              } else if(imgRegex.test(assetInfo.name)) {
                return 'assets/img/[name].[ext]';
              } else {
                return 'assets/[name].[ext]';
              }
            },
            chunkFileNames: 'assets/js/[name].[hash].js'
          }
        }
      },
    }
  });

  // data
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

