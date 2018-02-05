import rpi_babel from 'rollup-plugin-babel'

const sourcemap = 'inline'
const external = ['fs']
const plugins = [jsy_plugin()]

export default [
	{ input: 'code/offside_scanner.jsy',
		output: [
      { file: `dist/offside_scanner.js`, sourcemap, format: 'cjs' },
      { file: `dist/offside_scanner.mjs`, sourcemap, format: 'es' },
    ],
    plugins, external: []},

	{ input: 'code/basic_scanner.jsy',
		output: [
      { file: `dist/basic_scanner.js`, sourcemap, format: 'cjs' },
      { file: `dist/basic_scanner.mjs`, sourcemap, format: 'es' },
    ],
    plugins, external: []},

	{ input: 'code/jsy_scanner.jsy',
		output: [
      { file: `dist/jsy_scanner.js`, sourcemap, format: 'cjs' },
      { file: `dist/jsy_scanner.mjs`, sourcemap, format: 'es' },
    ],
    plugins, external: []},

	{ input: 'code/bin.jsy',
		output: { file: `dist/bin.js`, format: 'cjs' },
    plugins, external: []},
]


function jsy_plugin() {
  const jsy_preset = [ 'jsy/lean', { no_stage_3: true, modules: false } ]
  return rpi_babel({
    exclude: 'node_modules/**',
    presets: [ jsy_preset ],
    plugins: [],
    babelrc: false }) }

