# Grade 5 Content Files

Grade 5 Math is now split by unit.
Bible and Church History has a Christian planning shell ready for school curriculum alignment.

The app finds this curriculum through `../catalog.json` and `../catalog-data.js`.
That catalog is where future grades and subjects will be added.

Edit these files going forward:

- `math/index.json`
- `math/units/unit-1-whole-numbers-and-operations.json`
- `math/units/unit-2-fractions-decimals-and-percents.json`
- `math/units/unit-3-algebra-and-patterning.json`
- `math/units/unit-4-data-and-probability.json`
- `math/units/unit-5-spatial-sense.json`
- `math/units/unit-6-financial-literacy.json`

The matching browser files are in `math/index-data.js` and `math/unit-data/`.
Those browser files let the app load curriculum while testing from a local file.

Bible and Church History uses:

- `bible-church-history/index.json`
- `bible-church-history/index-data.js`

The shell is intentionally not treated as official Ontario curriculum. It is a custom Christian library that will be planned with the school before lessons are added.

The old `math.json` and `math-data.js` files are kept only as a backup from before the split.
