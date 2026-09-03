// ============================================================
// MAP PRACTICE
// ============================================================
//
// A Map is a key/value collection, like an object — but keys can
// be ANY type (not just strings), it keeps insertion order, and
// it tracks its own size.
//
//   const m = new Map()
//   m.set('a', 1)
//   m.get('a')      -> 1
//   m.has('a')       -> true
//   m.size            -> 1
//   [...m]            -> [['a', 1]]  (array of [key, value] pairs)
//
// In data viz, Map is how you GROUP and AGGREGATE rows of data —
// "sales by region", "count by category" — before charting them.
// D3's d3.group() and d3.rollup() both hand you back a Map.
//
// GOAL: get every check below to print ✅
// HOW TO RUN:  node 05-map-practice.js
//
// PAIR RULE: switch driver at every numbered section.
// Predict first, run second, fix third.
// ============================================================


// ---- test helper (do not edit) ----------------------------
const check = (label, actual, expected) => {
	const pass = JSON.stringify(actual) === JSON.stringify(expected)
	if (pass) {
		console.log(`✅ ${label}`)
	} else {
		console.log(`❌ ${label} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`)
	}
}


console.log('1 --- make a map ----------------')

const colors = new Map()

// TODO: use `.set()` to add these entries to `colors`:
//   'north' -> 'blue'
//   'south' -> 'orange'
//   'east'  -> 'green'

check('1a size', colors.size, 3)
check('1b get north', colors.get('north'), 'blue')

// PREDICT: what does .get() return for a key that was never set?
// write your answer, then check.
//
check('1c missing key', colors.get('west'), undefined)

// TODO: use `.has()` to check whether 'east' is a key in `colors`.
const hasEast = false

check('1d has east', hasEast, true)


console.log('2 --- map vs object -------------')

// A plain object only really works with string (or symbol) keys.
// A Map key can be a number, a boolean, an object, even a
// function — no coercion.

const lookup = new Map()
lookup.set(1, 'one')
lookup.set('1', 'ONE (string key)')

const numKey = lookup.get(1)
const strKey = lookup.get('1')

check('2a numeric key', numKey, 'one')
check('2b string key', strKey, 'ONE (string key)')


console.log('3 --- build a lookup table ------')

// A common viz pattern: turn an array of records into a Map keyed
// by id, so you can look up a record fast (e.g. matching a
// hovered chart element back to its data).

const points = [
	{ id: 'p1', label: 'Alpha', value: 42 },
	{ id: 'p2', label: 'Beta', value: 17 },
	{ id: 'p3', label: 'Gamma', value: 88 },
]

// TODO: build `byId` — a Map from id -> the full record. Use
// .forEach() or .reduce() to fill it. Do not hardcode the entries.
const byId = new Map()

check('3a lookup value', byId.get('p2')?.label, 'Beta')
check('3b lookup size', byId.size, 3)


console.log('4 --- group rows by a field -----')

// This is the big one: group raw rows by a category so each
// group can become one bar / one line / one slice.

const sales = [
	{ region: 'north', amount: 120 },
	{ region: 'south', amount: 90 },
	{ region: 'north', amount: 60 },
	{ region: 'east', amount: 40 },
	{ region: 'south', amount: 110 },
]

// TODO: build `grouped` — a Map from region -> array of amounts
// in that region. Start from an empty Map. For each row: if the
// region key isn't in the map yet, set it to []. Then push the
// amount onto that array.
//   { region: 'north', amount: 120 } -> grouped.get('north') === [120, 60]
const grouped = new Map()

check('4a north group', grouped.get('north'), [120, 60])
check('4b east group', grouped.get('east'), [40])
check('4c group count', grouped.size, 3)


console.log('5 --- aggregate each group ------')

// Once grouped, reduce each group down to one number — this is
// what you'd feed straight into a bar chart.

// TODO: build `totals` — a Map from region -> SUM of that
// region's amounts. Build it FROM `grouped` (section 4), using
// its entries. `[...grouped]` gives you [region, amounts] pairs.
const totals = new Map()

check('5a totals north', totals.get('north'), 180)
check('5b totals south', totals.get('south'), 200)
check('5c totals east', totals.get('east'), 40)

// TODO: chart libraries usually want an ARRAY of {label, value}
// objects, not a Map. Convert `totals` into `chartData`.
const chartData = []

check(
	'5d chart data',
	chartData,
	[
		{ label: 'north', value: 180 },
		{ label: 'south', value: 200 },
		{ label: 'east', value: 40 },
	]
)
