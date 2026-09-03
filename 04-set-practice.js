// ============================================================
// SET PRACTICE
// ============================================================
//
// A Set holds unique values — no duplicates allowed. Adding a
// value that's already in the Set does nothing.
//
//   const s = new Set([1, 2, 2, 3])   -> Set {1, 2, 3}
//   s.add(4)                          -> Set {1, 2, 3, 4}
//   s.has(2)                          -> true
//   s.size                            -> 4
//   [...s]                            -> [1, 2, 3, 4] (back to array)
//
// In data viz, Set is how you pull the unique categories out of
// raw data — the domain for a color scale, the labels for a
// legend, the distinct groups for small multiples.
//
// GOAL: get every check below to print ✅
// HOW TO RUN:  node 04-set-practice.js
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


console.log('1 --- make a set ----------------')

// PREDICT: how many items will this Set have? write your answer,
// then run the file and check.
//
const nums = new Set([1, 2, 2, 3, 3, 3])
check('1a size', nums.size, 3)

// TODO: use `.add()` to put 4 and 5 onto `nums`. Adding 3 again
// should change nothing.
nums.add(3)

check('1b after adds', [...nums], [1, 2, 3, 4, 5])

// TODO: use `.has()` to check whether 10 is in `nums`.
const hasTen = false

check('1c has ten', hasTen, false)


console.log('2 --- dedupe an array -----------')

// The #1 use of Set: strip duplicates from an array, in one line.
//   [...new Set(arr)]

const readings = [72, 68, 72, 75, 68, 70, 72]

// TODO: build `uniqueReadings` — the distinct values from
// `readings`, in first-seen order.
const uniqueReadings = readings

check('2a unique readings', uniqueReadings, [72, 68, 75, 70])


console.log('3 --- unique categories for a chart --------')

// This is the shape you'll see constantly: rows of data, and you
// need the distinct values of one field to build a color scale
// or a legend.

const sales = [
	{ region: 'north', amount: 120 },
	{ region: 'south', amount: 90 },
	{ region: 'north', amount: 60 },
	{ region: 'east', amount: 40 },
	{ region: 'south', amount: 110 },
	{ region: 'east', amount: 75 },
]

// TODO: build `regions` — the unique region names, in first-seen
// order. Use .map() to pull the field, then wrap in a Set, then
// spread back to an array.
const regions = sales

check('3a regions', regions, ['north', 'south', 'east'])

// TODO: same idea — `words` is a sentence split into tokens.
// Build `vocab`, the unique words, lowercased, in first-seen
// order. (Hint: .map() to lowercase, THEN dedupe.)
const words = ['Bar', 'chart', 'or', 'bar', 'graph', 'chart', 'BAR']
const vocab = words

check('3b vocab', vocab, ['bar', 'chart', 'or', 'graph'])


console.log('4 --- set math ------------------')

// Sets don't have built-in union/intersection methods (yet), but
// they're easy to write with array methods + has().

const groupA = new Set(['ada', 'grace', 'linus'])
const groupB = new Set(['grace', 'bjarne', 'linus'])

// TODO: build `both` — an array of names present in BOTH sets
// (the intersection). Use [...groupA].filter(...).
const both = []

check('4a intersection', both.sort(), ['grace', 'linus'])

// TODO: build `combined` — every name from either set, no
// duplicates. Spread both sets into one array, then dedupe with
// a Set again.
const combined = []

check('4b union', combined.sort(), ['ada', 'bjarne', 'grace', 'linus'])


console.log('5 --- why not just an array? ----')

// A Set's .has() is checked by identity, and lookups don't scan
// the whole collection like array.includes() does — that matters
// once a dataset gets big.

// TODO: write `countUnique(arr)` — return the number of unique
// values in arr. One line using Set.
const countUnique = (arr) => {

}

check('5a countUnique', countUnique([1, 1, 2, 3, 3, 3, 4]), 4)
check('5b countUnique strings', countUnique(['x', 'y', 'x']), 2)
