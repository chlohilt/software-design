
------------------------
LINE COUNT DOCUMENTATION
------------------------

The command line syntax for LineCount is:

	npx ts-node LineCount {-r} <dir> <fileSelectionPattern>

The command line argument "-r" is optional and indicates whether the search for files is recursive.

The directory name (dir) is an absolute or relative path name to a directory on the machine.

The fileSelectionPattern is a regular expression specifying which files to search.

Note: When typed on the command-line, the directory name and fileSelectionPattern arguments may need 
to be enclosed in quotes. This is especially important if they contain whitespace or other special 
characters. The shell strips off the quotes before passing the command-line arguments to the program.

Possible Errors:
	The directory name does not name a directory.
	The directory name names a directory but is not readable.
	A selected file in a directory is not readable.
	Command line is not of the proper syntax.
	
EXAMPLE:

The command line entry:

	npx ts-node src/LineCount -r ./ \.ts$

returned the output:

113 ./src/FileSearch.ts
83 ./src/LineCount.ts

TOTAL COUNT: 196

The $ at the end of the search pattern ensures that the line ends in '.ts', rather than only contains '.ts'.


-------------------------
FILE SEARCH DOCUMENTATION
-------------------------
The command line syntax for FileSearch is:

	npx ts-node FileSearch {-r} <dir> <fileSelectionPattern> <search-pattern>

The command line argument "-r" is optional and indicates whether the search for files is recursive.

The directory name (dir) is an absolute or relative path name to a directory on the machine.

The fileSelectionPattern is a regular expression specifying which files to search.

The search-pattern is a regular expression specifying which lines in a selected file we are to
match. A line is matched if it contains 1 or more substrings that match the search-pattern.

Note: When typed on the command-line, the directory name, fileSelectionPattern, and 
substringSelectionPattern arguments may need to be enclosed in quotes. This is especially important if 
they contain whitespace or other special characters. The shell strips off the quotes before  passing the
command-line arguments to the program.

Possible Errors:
	The directory name does not name a directory.
	The directory name names a directory but is not readable.
	A selected file in a directory is not readable.
	Command line is not of the proper syntax.

EXAMPLE:

The command line entry:

	npx ts-node src/FileSearch -r ./ \.ts$ false

returned the output:

FILE: ./src/FileSearch.ts
    recurse: boolean = false
let recurse = false;
  recurse = false;
MATCHES: 3


FILE: ./src/LineCount.ts
    recurse: boolean = false
let recurse = false;
  recurse = false;
MATCHES: 3


TOTAL MATCHES: 6

eve@DESKTOP-L2PL3VM MINGW64 ~/Documents/ta/exercises/Template - typescript
$ ts-node src/FileSearch -r ./ \.ts$ false

FILE: ./src/FileSearch.ts
        private searchDirectoryInnerWrapper(dirName: string, filePattern: string, searchPattern: string, recurse: boolean = false) : number{
let recurse = false;
        recurse = false;
MATCHES: 3


FILE: ./src/LineCount.ts
  countLinesInDirectoryInnerWrapper(dirName: string, fileName: string, recurse: boolean = false): void{
let recurse = false;
  recurse = false;
MATCHES: 3


TOTAL MATCHES: 6