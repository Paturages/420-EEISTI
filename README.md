inferno.Hues - 0x40 Hues of Inferno
==========

An [Inferno](https://github.com/infernojs/inferno) port of [0x40 Hues](http://0x40hues.blogspot.fr/). Very much incomplete.  
Project on hold while I study [mon's 0x40-web](https://github.com/mon/0x40-web) implementation.  
[Legacy branch](https://github.com/Paturages/inferno.Hues/tree/legacy) contains old dirty implementation cooked up with absolutely no knowledge of the existing 0x40 Hues environment.

# Development

`npm install` to install dependencies.  
`npm start` to start webpack-dev-server  
`npm run build` to build deployable solution in a `dist` folder

# Goals and ideas

* Implement all existing features of original 0x40 Hues, including all themes. Will most likely be done by first trying to port [mon's implementation](https://github.com/mon/0x40-web), which is already pretty complete in itself, to Inferno. Yes I'm doing a port of a port, deal with it. In order of priority:  
  * Implement basic functional version of v5.11, with hard-coded settings, assets and beatmaps. Ensure compatibility with existing respacks.
  * Implement app settings features (only the option tab)
  * Implement respack import
  * Implement themes (low priority)
  * Implement beatmap editor (low priority)
* Optimize application for mobile devices. Maximize availability and make the thing *blazing* fast and *super* clean. The final goal is to meet the requirements of a [progressive web app](https://developers.google.com/web/progressive-web-apps/).
* Optimize sync of audio to beatmaps for seamless experience. Sub-second operations to ensure synchronization at all times. Need to explore [`timeupdate` events](https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate).
* Add variable BPMs to beatmaps. Other than syncing non-constant BPM songs, would allow fancy things such as dramatic pauses and stuff.
* Import assets by URL (YouTube, SoundCloud...)
