const lpName = 'beaxy';
const syntax = 'scss';
const directories = {
  src: './src/',
  dev: '../wp-content/themes/beaxy/assets/',
  public: `../wp-content/themes/beaxy/assets/`,
  css: 'css/',
  js: 'js/',
  fonts: 'fonts/',
  images: 'images/',
};
const path = {
  css: {
    src: `${directories.src + directories.css}`,
    watcher: `${directories.src + directories.css}**/*.${syntax}`,
    dev: `${directories.dev + directories.css}`,
    public: `${directories.public + directories.css}`
  },
  images: {
    src: `${directories.src + directories.images}**/*.*`,
    srcWebP: `${directories.src + directories.images}**/*.{img, png}`,
    dev: `${directories.dev + directories.images}`,
    devWebP: `${directories.dev + directories.images}webp/`,
    public: `${directories.public + directories.images}`,
    publicWebP: `${directories.public + directories.images}webp/`,
    watcher: `${directories.src + directories.images}**/*.*`
  },
  js: {
    watcher: `${directories.src + directories.js}**/*.js`,
    src: `${directories.src + directories.js}main.js`,
    dev: `${directories.dev + directories.js}`,
    public: `${directories.public + directories.js}`
  },
  fonts: {
    src: `${directories.src + directories.fonts}**/*.*`,
    dev: `${directories.dev + directories.fonts}`,
    public: `${directories.public + directories.fonts}`
  },
  html: {
    src: `${directories.src}*.html`,
    dev: directories.dev,
    public: directories.public
  },
  php: {
    src: `../wp-content/themes/beaxy/**/*.php`
  }
};

module.exports = { path, lpName, directories, syntax };
