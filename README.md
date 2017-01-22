420-EEISTI
==========

HTML5 rendition of naniso.re/420

Demo available at: http://420.fightthe.pw

# Usage

In `js/main.js`, look at how the `data` variable works and modify as you see fit. You can most likely feed an API to the variable if you prefer it that way.

- `NB_DECS` sets the amount of decorations on the background.
- `colors` contains the CSS colors the background can switch to.
- `images` defines the image names and URLs.
- `decorations` defines the decoration names and URLs.
- `songs` defines the songs and dictates specific rhythm-dependent behavior.

## Defining a song

#### URL

`loop` is the URL of the track that will be played over and over again.  
(Optional) `start`: is the URL of the track that will only be played once before the actual loop.

#### Content

`loop` is the mapping for the actual loop.  
(Optional) `start` is the mapping for a starting section before the actual loop.  

This is the rhythm display mapping. It has to be manually set and pretty much figured out by ear and instinct. If you don't have musical knowledge, my very basic suggestion is to focus on figuring out the right BPM. From there, experiment with random mappings, starting from 2 "notes" per beat. Increase this amount as you start figuring the song out, keep what looks/sounds good to you, and you should start getting plausible results.  

The mapping relies on 'x' and 'o' characters in order to change the elements and shake the display. For syncing purposes, the mapping has to cover all of the song.
You can replace the '.' filler character by anything else (excluding 'x' and 'o' of course) by having a look at the Background element and changing the "if this.props.rhythm.c != '.'" condition by your own. Also change the switch condition in FourTwenty.tick().  

If you really want to substitute the 'x' and 'o's by something else, have a look at the Background element, change/delete/add the div single-character containers, and change the CSS (where .x and .o classes are involved) according to your needs (wait, why would you need this?).  

#### Temporal

This is the temporal event mapping. The keys correspond to a position in the content string. It is mandatory that you at least have the "0" key mapped to an interval.  

To set an event, just add an item in the temporal object with the position as a key and either:  

- A number: to specify the interval between each tick/update. The interval is the amount of milliseconds between each update. You can calculate it from the song BPM:
```
interval = 1000 * (60/BPM) / <amount of "notes" per beat>
```
- A string: to specify an instruction. For now, the following instructions are available:
   - LOOP: Restarts the loop track and resets the time cursor

# To do

- *Actually* use React to update the view (right now it's relying on dirty props checking when I *really* should be defining states for each entity)
- Improve performance, sync and cross-browser/platform functionality
- Set up an easier way to define song mapping
- More themes, views so that it's not entirely ripped off naniso.re/420
- Explore WebGL
- More 420