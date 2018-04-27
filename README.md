mongoputer
==========

**Have you ever wanted to use your mongod to perform arbitrary computation?  Well now you can!**

This code implements various cellular automata, including Conway's Game of Life (which is Turing-complete).

All that's needed is a lightweight client to "crank the handle" by resubmitting the aggregation again each time it finishes.

Runs on any MongoDB server version 3.4 or higher.

In part inspired by [John Page's fractal-generating aggregation](https://ilearnasigoalong.blogspot.com.au/2013/12/mongo-aggregating-fractals.html).

Brought to you by the MongoDB APAC Engineering Offsite 2018 "Team 6 Passports":

- Adriana Janikova
- Akira Kurogane
- Conchi Bueno
- Kev Pulo
- Matt Fairbrass
- Sulabh Mahajan


Usage
-----

Just use the mongo shell to run the .js file of interest, connecting to any MongoDB cluster (v3.4+), eg:

    mongo --port 12345 mongoputer-ca-2d-gospergun.js

Depending on the size of the grid, you might need to make your font smaller and/or terminal bigger.  And wait a while for each frame to be generated.  And add `allowDiskUse: true` for grids with more than about 100k cells.


Examples
-----

* Gosper's gun:

    [![asciicast of mongoputer-ca-2d-gospergun.js](gospergun.png)](https://asciinema.org/a/Je1CWZ3zQ7Gch0il2LabcuLGd)

* Acorn (small):

    [![asciicast of mongoputer-ca-2d-acornsmall.js](acornsmall.png)](https://asciinema.org/a/jDgNWDMScsORNbS8WBf8cNoKj)

* Acorn (large):

    [![asciicast of mongoputer-ca-2d-acorn.js](https://asciinema.org/a/qeZS2OxExIvofcPTBew39YwOQ.png)](https://asciinema.org/a/qeZS2OxExIvofcPTBew39YwOQ)


Results
-------

Not surprisingly, it's a bit slow.

| Game of Life, 21x21 grid         | ~ms/frame |
|:---------------------------------|----------:|
| Local standalone (Mac laptop)    |       230 |

| Game of Life, 100x100 grid       | ~ms/frame |
|:---------------------------------|----------:|
| Atlas M0                         |      4700 |
| Atlas M5                         |      4250 |
| Atlas M10                        |      4400 |
| Local standalone (Mac laptop)    |      3300 |

| Game of Life, 300x300 grid       | ~ms/frame |
|:---------------------------------|----------:|
| Atlas M0                         |     37000 |


Details
-------

The schema is 1 document per cell, each with an `x` and `y` coordinate and a boolean value.

The coordinates are embedded in the `_id` field, to take advantage of the `_id: 1` index (for fast lookups of other cells).  The value could be an embedded document containing arbitrary state (up to the 16MB limit).

There is a 1 cell halo around the edge (ie. cells which don't have the cellular automata rules applied, and are always off), to simplify boundary conditions (ie. border cells don't need special handling).

The basic approach is:
- use normal db ops to create the empty grid
- setup the initial conditions
- for each timestep, the aggregation will:
    - compute the coordinates of the 8 neighbouring cells
    - use `$lookup` to get their values
    - apply the rules to compute the new value
    - `$out` into the same collection


TODO
----

There are a lot of things that could be done to take this further.

- Generally fix all the rubbish code.
- Factorise out all the code repeated between files.
- Optimise the aggregation.
    - eg. implement CA rules directly in aggregation (instead of in terms of a binary state string).
- See if the `$group` can be eliminated from the aggregation.
- ASCII display code should use an aggregation to generate the strings.
    - Write a display aggregation to generate PBM/PNM images.
- Proper graphical display eg. MongoDB Charts (with animation and [heatmap](https://vega.github.io/vega-editor/?mode=vega&spec=heatmap) hacked in).
- Ability to save all frames, eg. each into a different collection, or into an output collection with an `_id.t` field.
    - Corresponding display/animation scripts.
- A state bit to indicate if a cell has ever been on (like the display at http://web.stanford.edu/~cdebs/GameOfLife/).
- Figure out a way of making the server (or something, anything) auto-crank the handle.
- Other boundary conditions, eg:
    - Consume
    - Solid wall
    - Periodic (torus)
- Read and parse initial conditions from files, eg:
    - JSON
    - ASCII
    - PBM/PGM/PNM
    - Life 1.05/1.06
    - RLE
- Other Game of Life initial conditions, eg:
    - Spaceships
    - Puffers
    - Turing machine
- Other automata rules:
    - Prime number sieve
    - Critters
    - Dynamic simulation of multiple populations
- MongoDB 3.6 features:
    - Use the sub-query form of `$lookup` (as long as it can be used efficiently).
    - Logical sessions for resumability


See also
--------

- https://en.wikipedia.org/wiki/Cellular_automaton
- https://en.wikipedia.org/wiki/Conway's_Game_of_Life
- http://web.stanford.edu/~cdebs/GameOfLife/
- http://rendell-attic.org/gol/tm.htm
- https://en.wikipedia.org/wiki/Glider_(Conway's_Life)
- https://en.wikipedia.org/wiki/Rule_30
- https://en.wikipedia.org/wiki/Puffer_train


