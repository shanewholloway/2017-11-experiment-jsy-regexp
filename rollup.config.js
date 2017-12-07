import rpi_babel from 'rollup-plugin-babel'

const sourcemap = 'inline'
const external = ['fs']
const plugins = [jsy_plugin()]

export default [
	{ input: 'code/jsy_regexp.jsy',
		output: [
      { file: `dist/jsy_regexp.js`, format: 'cjs' },
      { file: `dist/jsy_regexp.mjs`, format: 'es' },
    ],
    sourcemap, plugins, external: []},

	{ input: 'code/demo.jsy',
		output: [{ file: `dist/demo.js`, format: 'cjs' }],
    sourcemap, plugins, external: []},
]


function jsy_plugin() {
  const jsy_preset = [ 'jsy/lean', { no_stage_3: true, modules: false } ]
  return rpi_babel({
    exclude: 'node_modules/**',
    presets: [ jsy_preset ],
    plugins: [],
    babelrc: false }) }

