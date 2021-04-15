# Bruh Lang

## Esoteric Language made with Typescript

# Symbols

-   < Decrease pointer
-   \> Increase pointer
-   \+ Increase value at pointer
-   \- Decrease value at pointer
-   ^ Squares the current vale of the pointer
-   0-9 Set pointer value to given number (works with multiple digits e.g. 35)
-   % Print value at pointer
-   $ Print value at pointer but as an ASCII character

Note: All symbols that do not have output write to the pointer.

# How to install

1. `git clone https://github.com/Gaurav-Ban22/BruhLang.git`
2. `cd ./bruhlang`
3. `npm run build && npm link`
4. Enjoy!

# How to use

## Just running a piece of code (e.g. 2%>1%)

Example: `bruh -c "2%>1%"` (there may be bugs if you don't use quotes)

## Running a bruh file (i.e. \*.bruh)

Example: `bruh -f ./main.bruh`

# Flags

-   -c, --code: Runs input string in BruhLang
-   -f, --file: Runs BruhLang file (.bruh)
