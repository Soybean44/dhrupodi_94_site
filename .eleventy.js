import twig from '@factorial/eleventy-plugin-twig'
import fg from 'fast-glob';

const imgs = fg.sync('**images/*', { cwd: 'public/gallery'});

const twigOptions = {
  twig: {
    namespaces: {},
  },
  images: {},
  dir: {
    input: "src",
    output: "dist",
    watch: "src/**/*.{css,js,twig}",
  },
};

export default function (config) {
  config.addPassthroughCopy({ 'public': './' })
  config.addPlugin(twig, twigOptions)
  config.addCollection('galleryImages', function(collection) {
    return imgs;
  });

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'twig',
  }
}
