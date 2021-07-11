
module.exports = {
  mount: {
    public: "/",
    src: "/dist"
},
devOptions: {
    port: 8000,
    open: "none"
},
buildOptions: {
    out: "_build"
},
optimize: {
    bundle: true,
    minify: true,
    sourcemap: false
},
  plugins: ['tailwind-to-lit','@snowpack/plugin-typescript'],
};
