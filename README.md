# Bruh Lang

## Esoteric Language made with Typescript

# Symbols

-   < Decrease pointer
-   \> Increase pointer
-   \+ Increase value at pointer
-   \- Decrease value at pointer
-   % Print value at pointer
-   $ Print value at pointer but as an ASCII character
-   0-9 Set pointer value to given number (works with multiple digits e.g. 35)

# How to install

1. `git clone https://github.com/Gaurav-Ban22/BruhLang.git`
2. `cd ./bruhlang`
3. `npm build`
4. `npm link`

# How to use

## Just running a piece of code (e.g. 2%>1%)

Example: `bruh -m code -c "2%>1%"` (there may be bugs if you don't use quotes)

## Running a bruh file (i.e. \*.bruh)

Example: `bruh -m file -f ./main.bruh`

# Flags

-   -m, -mode: Tells the interpreter if the code is in a string or a file
-   -c, -code: Tells the interpreter what the code is if the -mode flag is "code"
-   -f, -file: Tells the interpreter where the file with the code is located if the -mode flag is "file"
