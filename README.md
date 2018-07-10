Standardize converts [Journey](https://2appstudio.com/journey) entries to [Standard Notes](https://standardnotes.org) entries.

1.  [Download](https://github.com/slymax/standardize/archive/master.zip) or clone this repository.
2.  Export your entries from Journey as ZIP and extract its contents.
3.  Run `node standardize.js [path/to/your/extracted/folder]`.
4.  Import the generated `notes.txt` file into Standard Notes.

Since Journey doesn't support note titles and Standard Notes does, markdown headers `#` on the first line of an entry followed by a blank line will be set as the note's title and removed from the note.

Standardize requires Node.js 8 or higher and has no other dependencies.
