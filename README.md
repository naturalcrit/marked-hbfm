# HBFM -- Homebrewery Flavored Markdown

This is a utility module for parsing Homebrewery flavored Markdown and producing HTML.

This is derived from the Homebrewery configuration of Marked.

## Members

### marked

This marked instance being used.

### render : (rawBrewText, pageNumber=0)

Processes a string of markdown and returns the corresponding HTML. Accepts a Number to insert into the ***HB_pageNumber*** Brew Variable.

### validate : (rawBrewText)

Validates a string of markdown for errors such as unclosed embedded HTML tags. Returns an array of error objects found.

## To Do

* Migrate the remaining embedded extensions ( mustache blocks, hard paragraph breaks ) into their own npm modules and reference that instead
* Come up with a methodology for users to insert, override, and/or append marked custom extensions in the **Marked.Use()** setup.
* Transfer ownership to naturalCrit project.
