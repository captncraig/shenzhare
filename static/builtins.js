var builtInSaves = {
    "fake surveillance camera":`[name] New design 1
[puzzle] Sz000
[production-cost] 600
[power-usage] 60

[traces] 
......................
......................
......................
......................
......................
......................
........1C............
.........34...........
......................
........1C............
.........34...........
......................
......................
......................

[chip] 
[type] UC4
[x] 10
[y] 3
[code] 
@ slp 4
  gen p0 2 1
  gen p0 1 4
#(asdas)

[chip] 
[type] UC4
[x] 10
[y] 6
[is-puzzle-provided] true
[code] 
  mov 0 p0
  slp 6
  mov 100 p0
  slp 6

# why is this
# so hard? :(

`,
"control signal amplifier":`[name] New design 1
[puzzle] Sz030
[production-cost] 600
[power-usage] 600120

[traces] 
......................
......................
......................
......................
......................
......................
........14.15C........
.......154.1CA........
........14.162........
......................
......................
......................
......................
......................

[chip] 
[type] UC4X
[x] 9
[y] 4
[code] 
  mov x0 acc
a: teq acc -999
- sub 1
  nop
  nop
- jmp a
s:mov 1 x0
  slp 1

[chip] 
[type] BRIDGE
[x] 8
[y] 5

[chip] 
[type] UC4
[x] 9
[y] 6
[code] 
  mov p0 acc
  mul 2
  mov acc p1
  mov 999 x0
  mov x0 acc
  slp 1

`,
"chip test":`[name] All Parts
[puzzle] SzSandbox

[traces] 
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................
......................

[chip] 
[type] PAD
[x] 1
[y] 1

[chip] 
[type] RNG
[x] 7
[y] 1

[chip] 
[type] LEDW
[x] 9
[y] 1

[chip] 
[type] LEDRGB
[x] 11
[y] 1

[chip] 
[type] DX3
[x] 1
[y] 3

[chip] 
[type] DX3
[x] 3
[y] 3
[rotated] true

[chip] 
[type] LEDR
[x] 5
[y] 3

[chip] 
[type] LEDA
[x] 7
[y] 3

[chip] 
[type] BUZ
[x] 9
[y] 3

[chip] 
[type] BRIDGE
[x] 14
[y] 3

[chip] 
[type] LEDG
[x] 6
[y] 5

[chip] 
[type] LCDNS
[x] 9
[y] 5

[chip] 
[type] UC4X
[x] 1
[y] 6
[code] 
  slp 3

[chip] 
[type] SWH
[x] 4
[y] 6

[chip] 
[type] LCDC
[x] 15
[y] 6
[custom-screen] 
test

[chip] 
[type] BTN
[x] 4
[y] 7

[chip] 
[type] XOR
[x] 6
[y] 7

[chip] 
[type] UC6
[x] 1
[y] 8
[code] 
  slp 2

[chip] 
[type] NOT
[x] 4
[y] 8

[chip] 
[type] BANK
[x] 4
[y] 9
[rom] 
0,0,0,0,0,0,0,0,0,0,0,0,0,0

[chip] 
[type] OR
[x] 7
[y] 9

[chip] 
[type] UC4
[x] 1
[y] 11
[code] 
  slp 1

[chip] 
[type] RAM
[x] 4
[y] 11

[chip] 
[type] AND
[x] 7
[y] 11

[chip] 
[type] PDIAL
[x] 9
[y] 12


`,
"trace test":`[name] All Wires
[puzzle] SzSandbox

[traces] 
......................
.9555555555555555555C.
.A..................A.
.A.....9DDC.95D5C...A.
.A.....BFFE.A.A.A...A.
.A..8..BFFE.B5F5E...A.
.A.1F4.3776.A.A.A...A.
.A..A.......35756...A.
.A.1F4.9DDC..1414...A.
.A..2..BFFE..1C8....A.
.A.....BFFE...22....A.
.A.....3776.........A.
.35555555555555555556.
......................

[chip] 
[type] RNG
[x] 8
[y] 3

[chip] 
[type] RNG
[x] 14
[y] 4

[chip] 
[type] BRIDGE
[x] 4
[y] 5

`
};