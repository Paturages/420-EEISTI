// User-defined data

var data = {
    // Amount of decoration elements spread on the background
    NB_DECS: 30,

    // Background colors (CSS compliant format)
    // Add/remove colors according to your preferences. You could also have multiple sets of colors (gradients for example) somewhere that would change this property to provide more customization.
    colors: [
        '#ef9a9a',
        '#f48fb1',
        '#ce93d8',
        '#b39ddb',
        '#9fa8da',
        '#90caf9',
        '#81d4fa',
        '#80deea',
        '#80cbc4',
        '#a5d6a7',
        '#c5e1a5',
        '#e6ee9c',
        '#fff59d',
        '#ffe082',
        '#ffcc80',
        '#ffab91',
        '#bcaaa4',
        '#eeeeee',
        '#b0bec5'
    ],

    // Main images names and URLs. PNGs are recommended for transparency and general compatibility, but I think WebP is probably the most optimal way to go if you don't want to waste bandwidth.
    // For automation, I suppose you could have a script that feeds you an array from an 'ls data/image' call, for example.
    images: [
        {name: 'amane', url: 'http://420.fightthe.pw/data/image/amane.png'},
        {name: 'sachi', url: 'http://420.fightthe.pw/data/image/sachi.png'},
        {name: 'hitagi', url: 'http://420.fightthe.pw/data/image/hitagi.png'},
        {name: 'yumiko', url: 'http://420.fightthe.pw/data/image/yumiko.png'}
    ],

    // Decorations names and URLs. PNG/WebP, same as main images.
    // Automation could also apply here.
    decorations: [
        {name: 'weed', url: 'http://420.fightthe.pw/data/decoration/weed.png'},
        {name: 'sakamoto', url: 'http://420.fightthe.pw/data/decoration/sakamoto.png'},
        {name: 'pusheen', url: 'http://420.fightthe.pw/data/decoration/pusheen.png'},
        {name: 'harold', url: 'http://420.fightthe.pw/data/decoration/harold.png'},
        {name: 'doot', url: 'http://420.fightthe.pw/data/decoration/doot.png'}
    ],

    // Song data (name, URL, update interval and mapping).
    // This one requires a bit more effort to set up, and there's not really any reliable way to generate it automatically, as musical pattern recognition only goes so far (an Audiosurf-like system would probably be appropriate here, but implementing it is, well, an entire other project).

    // Properties:

    // URL:
    // "loop" is the URL of the track that will be played over and over again.
    // (Optional) "start": is the URL of the track that will only be played once before the actual loop.

    // Content:
    // "loop" is the mapping for the actual loop.
    // (Optional) "start" is the mapping for a starting section before the actual loop.
    // This is the rhythm display mapping. It has to be manually set and pretty much figured out by ear and instinct. If you don't have musical knowledge, my very basic suggestion is to focus on figuring out the right BPM. From there, experiment with random mappings, starting from 2 "notes" per beat. Increase this amount as you start figuring the song out, keep what looks/sounds good to you, and you should start getting plausible results.
    // The mapping relies on 'x' and 'o' characters in order to change the elements and shake the display. For syncing purposes, the mapping has to cover all of the song.
    // You can replace the '.' filler character by anything else (excluding 'x' and 'o' of course) by having a look at the Background element and changing the "if this.props.rhythm.c != '.'" condition by your own. Also change the switch condition in FourTwenty.tick().
    // If you really want to substitute the 'x' and 'o's by something else, have a look at the Background element, change/delete/add the div single-character containers, and change the CSS (where .x and .o classes are involved) according to your needs (wait, why would you need this?).

    // Temporal:
    // This is the temporal event mapping. The keys correspond to a position in the content string. It is mandatory that you at least have the "0" key mapped to an interval.
    // To set an event, just add an item in the temporal object with the position as a key and either:
    //  - A number: to specify the interval between each tick/update. The interval is the amount of milliseconds between each update. You can calculate it from the song BPM:
    //      interval = 1000 * (60/BPM) / <amount of "notes" per beat>
    //  - A string: to specify an instruction. The following instructions are available:
    //      - LOOP: Restarts the loop track and resets the time cursor
    songs: [
        {
            name: 'creative_exercise',
            url: {
                loop: 'http://420.fightthe.pw/data/music/creative_exercise.ogg'
            },
            content: {
                loop: 'o.x.o.x.oxox....oxox....oxox....o.x.o.x.oxox....oxox....oxox....o.x.o.x.o.xo....o.xo..x.o.xo....oxoxo.x.o.x.oxoxo.xo.xoxo.....oxo.oxo.oxo.oxoxoxo.oxo.oxo.oxoxoxo.oxo.oxo.oxo.oxo.o.o.ox....x.oxo.o.o.ox........x.......x.......x.......'
            },
            temporal: {
                "0": 227,
                "97": 228,
                "231": "LOOP"
            }
        },
        {
            name: 'jet_set_wario',
            url: {
                start: 'http://420.fightthe.pw/data/music/jet_set_wario_start.ogg',
                loop: 'http://420.fightthe.pw/data/music/jet_set_wario.ogg'
            },
            content: {
                start: '..........o..o..',
                loop: 'x.......x.......x...x...........o...............x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.......x.......x...x...x.x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...o...o...o...o...x......o.o..o...o...o...o...o...x...o.o.........o...o...o.......x......o.o..o...x.......x.......x...............x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..ox...x..o.o..o...x.x....o.o..o...x...x..o.o..o...x.x....o.o..o...x...o..o.o..o...x...o...x...o...x.......o...o...x...x...o...o...x...x...o...o...x...x.o.........x...o..o.o..o...x...o..o.o..o...x...............x...o...x...o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o...x.x....o.o..o.............o..o..'
            },
            temporal: {
                "start": {
                    "0": 115
                },
                "0": 110,
                "47": 1850, // I'm the number one!
                "48": 110,
                "169": 750, // Pre-verse
                "170": 110,
                "425": 1850, // Excellent!
                "426": 110,
                "553": 1850, // Let's go.
                "554": 110,
                "700": 111,
                "966": 440, // Stalling
                "967": 110,
                "1286": "LOOP"
            }
        }
    ]
};

// ########################################################################################### //

// React elements

/**
* Solid color background.
* - Changes color with fades on rhythm event
* - These changes are toggleable
* - A fixed color can be defined
*/
var Background = React.createFactory(
    React.createClass({
        render: function() {
            var curr_img = this.props.image;
            var curr_dec = this.props.decoration;
            var dec_positions = this.props.dec_positions;
            return React.createElement('div',
                // Properties of the background
                {
                    className: 'container '+(this.props.note != '.' ? 'shake '+this.props.note : ''),
                    style: {
                        backgroundColor: this.props.color
                    }
                },
                // Preloads all the images and only displays the current one
                data.images.map(function(e, k) {
                    return ImageOverlay({key: k, data: e, curr: curr_img});
                }),
                // Preloads all the decoration images
                data.decorations.map(function(e, k) {
                    return Decoration({key: k, data: e, pos: dec_positions, curr: curr_dec});
                }),
                // Scrolling rhythm display (top left)
                RhythmDisplay({key: '1', chunk: this.props.chunk, pos: 'left'}),
                // Scrolling rhythm display (top right)
                RhythmDisplay({key: '2', chunk: this.props.chunk, pos: 'right'}),
                // When the rhythm data consumes an 'x' or an 'o', this character appears in the middle, drops down and fades out.
                // These 2 div elements contain a single character that is only displayed when the current rhythm character matches it.
                React.createElement('div',{className: 'char_x '+this.props.note},'x'),
                React.createElement('div',{className: 'char_o '+this.props.note},'o'),
                // Status display
                StatusDisplay({
                    color: this.props.color,
                    image: this.props.image.name,
                    decoration: this.props.decoration.name,
                    song: this.props.song.name,
                    note: this.props.note,
                    time: this.props.time,
                    interval: this.props.interval,
                    input: this.props.input
                }),
                // Togglers
                Toggler({
                    input: this.props.input
                })
            );
        }
    })
);

/**
* Image on top of the background.
* - Switches with effects on rhythm event
* - These switches are toggleable
* - A fixed image can be defined
*/
var ImageOverlay = React.createFactory(
    React.createClass({
        render: function() {
            return React.createElement('img',
                {
                    className: 'image '+((this.props.curr.name == this.props.data.name) ? 'show' : ''),
                    src: this.props.data.url
                }
            );
        }
    })
);

/**
* Decoration behind the image, on top of the background.
* - Switches with effects on rhythm event
* - These switches are toggleable
* - A fixed kind of decoration can be defined
*/
var Decoration = React.createFactory(
    React.createClass({
        render: function() {
            var reference = React.createElement('img',
                {
                    className: 'decoration '+((this.props.curr.name == this.props.data.name) ? 'show' : ''),
                    src: this.props.data.url
                }
            );
            return React.createElement('div', {className: 'decoration-container'},
                this.props.pos.map(function(e,k) {
                    return React.cloneElement(reference, {key: k, style: e});
                })
            );
        }
    })
);

/**
* Rhythm display, at the top, on top of the background.
* - Content depends on music
* - Display toggleable
*/
var RhythmDisplay = React.createFactory(
    React.createClass({
        render: function() {
            // Using \u202e to mirror the rhythm display if necessary
            return React.createElement('div',
                {
                    className: 'rhythm '+this.props.pos
                },
                (this.props.pos == 'left' ? '\u202e' : '')+this.props.chunk
            );
        }
    })
);

/**
* Status display, bottom left.
* - Displays the current status of the application
* - Display toggleable
*/
var StatusDisplay = React.createFactory(
    React.createClass({
        render: function() {
            return React.createElement('div',
                {
                    className: 'status'
                },
                React.createElement('div',
                    {className: 'vars'},
                    React.createElement('p', {}, "color: "+this.props.color),
                    React.createElement('p', {}, "image: "+this.props.image),
                    React.createElement('p', {}, "decoration: "+this.props.decoration),
                    React.createElement('p', {}, "song: "+this.props.song),
                    React.createElement('p', {}, "note: "+this.props.note),
                    React.createElement('p', {}, "time: "+this.props.time),
                    React.createElement('p', {}, "interval: "+this.props.interval)
                ),
                Selector({input: this.props.input})
            );
        }
    })
);

/**
* Toggler.
* - Use for background changes
* - Use for image changes
* - Use for decoration changes
*/
var Toggler = React.createFactory(
    React.createClass({
        render: function() {
            return React.createElement('div',
                {
                    className: 'togglers'
                },
                React.createElement('p',
                    {
                        className: 't_colors',
                        onClick: function() {
                            FourTwenty.current.input.color = (FourTwenty.current.input.color < 0 ? FourTwenty.index.color : -1);
                        }
                    },
                    "colors: "+(this.props.input.color < 0 ? "all" : "one")
                ),
                React.createElement('p',
                    {
                        className: 't_images',
                        onClick: function() {
                            FourTwenty.current.input.image = (FourTwenty.current.input.image < 0 ? FourTwenty.index.image : -1);
                        }
                    },
                    "images: "+(this.props.input.image < 0 ? "all" : "one")
                ),
                React.createElement('p',
                    {
                        className: 't_decorations',
                        onClick: function() {
                            FourTwenty.current.input.decoration = (FourTwenty.current.input.decoration < 0 ? FourTwenty.index.decoration : -1);
                        }
                    },
                    "decorations: "+(this.props.input.decoration < 0 ? "all" : "one")
                )
            );
        }
    })
);

/**
* Selector.
* - Use for background definition
* - Use for image definition
* - Use for decoration definition
*/
var Selector = React.createFactory(
    React.createClass({
        getInitialState: function() {
            return {
                color: 'all',
                image: 'all',
                decoration: 'all',
                song: 'none'
            }
        },

        render: function() {
            return React.createElement('div',
                {
                    className: 'selectors'
                },
                // Color selection
                React.createElement('p', {}, React.createElement('select',
                    {
                        className: 's_colors',
                        onChange: function(e) {
                            FourTwenty.current.input.color = e.target.value;
                            FourTwenty.current.color = data.colors[e.target.value];
                        }
                    },
                    React.createElement('option', {value: -1}, 'all'),
                    data.colors.map(function(e, k) {
                        return React.createElement('option', {key: k, value: k, style: {backgroundColor: e}}, e);
                    })
                )),
                // Image selection
                React.createElement('p', {}, React.createElement('select',
                    {
                        className: 's_images',
                        onChange: function(e) {
                            FourTwenty.current.input.image = e.target.value;
                            FourTwenty.current.image = data.images[e.target.value];
                        }
                    },
                    React.createElement('option', {value: -1}, 'all'),
                    data.images.map(function(e, k) {
                        return React.createElement('option', {key: k, value: k}, e.name);
                    })
                )),
                // Decoration selection
                React.createElement('p', {}, React.createElement('select',
                    {
                        className: 's_decorations',
                        onChange: function(e) {
                            FourTwenty.current.input.decoration = e.target.value;
                            FourTwenty.current.decoration = data.decorations[e.target.value];
                        }
                    },
                    React.createElement('option', {value: -1}, 'all'),
                    data.decorations.map(function(e, k) {
                        return React.createElement('option', {key: k, value: k}, e.name);
                    })
                )),
                // Song selection
                React.createElement('p', {}, React.createElement('select',
                    {
                        className: 's_songs',
                        onChange: function(e) {
                            FourTwenty.index.song = e.target.value;
                            FourTwenty.stop();
                            if (e.target.value > -1) {
                                FourTwenty.update();
                            }
                        }
                    },
                    React.createElement('option', {value: -1}, 'none'),
                    data.songs.map(function(e, k) {
                        return React.createElement('option', {key: k, value: k}, e.name);
                    })
                ))
            );
        }
    })
);

// ########################################################################################### //

// Controller stuff

// Makes sure a randomly generated number will always be different than the previous one
var randomize = function(before, max) {
    return (before + 1 + Math.floor(Math.random()*(max-1))) % max;
};

var FourTwenty = {
    // Keeps track of the different elements.
    current: {
        color: null,
        image: null,
        decoration: null,
        song: null,

        input: {
            color: -1,
            image: -1,
            decoration: -1
        },

        chunk: '',
        note: '',

        dec_positions: [],

        time: 0,
        interval: 0
    },

    // Keeps track of the current index of the different elements.
    index: {
        color: 0,
        image: 0,
        decoration: 0,
        song: 1,
        note: 0
    },

    // Stores the length of the data variables.
    len: {
        colors: data.colors.length,
        images: data.images.length,
        decorations: data.decorations.length,
        songs: data.songs.length,
        content: 0
    },

    // Refreshes the song data
    update: function() {
        FourTwenty.current.song = data.songs[FourTwenty.index.song];
        FourTwenty.current.time = 0;
        FourTwenty.index.note = 0;
        FourTwenty.current.interval = FourTwenty.current.song.temporal[0];
        FourTwenty.len.content = FourTwenty.current.song.content.loop.length;

        // Fills the "chunk" with the 25 first "notes" for the rhythm display.
        var i;
        FourTwenty.current.chunk = '';
        FourTwenty.current.note = '';
        for (i = 0 ; i < 25 ; i++) {
            FourTwenty.current.chunk += FourTwenty.current.song.content.loop[FourTwenty.index.note];

            // If the mapping is shorter than 25 characters, just repeat the mapping over again
            FourTwenty.index.note = (FourTwenty.index.note < FourTwenty.len.content ? FourTwenty.index.note+1 : 0);
        }

        // "Switching" for a random initialization of everything else
        FourTwenty.switch();

        // At last, play the whole thing.
        React.render(Background(FourTwenty.current), document.getElementById('react-container'));
        FourTwenty.play();
    },

    // Initialization
    init: function() {
        // Song loading
        FourTwenty.loop = new SeamlessLoop();
        var i;
        for (i = 0 ; i < FourTwenty.len.songs ; i++) {
            console.log(data.songs[i]);
            FourTwenty.loop.addUri(data.songs[i].url.loop, data.songs[i].temporal[0], data.songs[i].name);
        }
        FourTwenty.loop.callback(function() {
            FourTwenty.update();
        });
    },

    // Switches the display to something else
    switch: function() {
        if (FourTwenty.current.input.color < 0) {
            FourTwenty.index.color = randomize(FourTwenty.index.color, FourTwenty.len.colors);
            FourTwenty.current.color = data.colors[FourTwenty.index.color];
        }

        if (FourTwenty.current.input.image < 0) {
            FourTwenty.index.image = randomize(FourTwenty.index.image, FourTwenty.len.images);
            FourTwenty.current.image = data.images[FourTwenty.index.image];
        }

        if (FourTwenty.current.input.decoration < 0) {
            FourTwenty.index.decoration = randomize(FourTwenty.index.decoration, FourTwenty.len.decorations);
            FourTwenty.current.decoration = data.decorations[FourTwenty.index.decoration];
        }

        // Randomly spreading the decoration positions
        var i;
        for (i = 0 ; i < data.NB_DECS ; i++) {
            FourTwenty.current.dec_positions[i] = {
                top: (Math.random()*25+(1 + 22*Math.floor(4*i/data.NB_DECS)))+'%',
                left: (Math.random()*(100/data.NB_DECS)+(1 + i % (data.NB_DECS/4) * (385/data.NB_DECS)))+'%'
            }
        }
    },

    // Goes to the next note in the mapping and acts accordingly
    tick: function() {
        // Ensuring the rhythm display loop
        if (FourTwenty.index.note == FourTwenty.len.content)
            FourTwenty.index.note = 0;

        // Following the temporal mapping
        switch (typeof FourTwenty.current.song.temporal[FourTwenty.current.time]) {
            // On tempo change, update the interval and refresh it
            case "number":
                console.log("interval: "+FourTwenty.current.song.temporal[FourTwenty.current.time]);
                console.log(performance.now());
                FourTwenty.current.interval = FourTwenty.current.song.temporal[FourTwenty.current.time];
                clearInterval(FourTwenty.interval);
                FourTwenty.interval = setInterval(FourTwenty.tick, FourTwenty.current.interval);
                FourTwenty.current.time++;
                break;
            // On instruction, handle it
            case "string":
                console.log("instruction: "+FourTwenty.current.song.temporal[FourTwenty.current.time]);
                console.log(performance.now());
                var instructions = FourTwenty.current.song.temporal[FourTwenty.current.time].split(' ');
                switch (instructions[0]) {
                    case "LOOP": // Restarts the music and sets the time cursor to the specified value
                        FourTwenty.loop.start('');
                        FourTwenty.current.time = 0;
                        break;
                    default:
                }
                break;
            default:
                FourTwenty.current.time++;
        }

        // Updating the current note
        FourTwenty.current.note = FourTwenty.current.chunk.charAt(0);

        // Ticking the rhythm display
        FourTwenty.current.chunk = FourTwenty.current.chunk.slice(1) + FourTwenty.current.song.content.loop.charAt(FourTwenty.index.note++);

        // If it's something else than filler, switch the display
        if (FourTwenty.current.note != '.')
            FourTwenty.switch();

        // Update the React container
        React.render(Background(FourTwenty.current), document.getElementById('react-container'));
    },

    // setInterval container
    interval: null,

    // SeamlessLoop container
    loop: null,

    // Puts the whole thing in motion
    play: function() {
        FourTwenty.loop.start(FourTwenty.current.song.name);
        setTimeout(function() {
            FourTwenty.tick();
        }, FourTwenty.current.interval);
    },

    // Stops the motion
    stop: function() {
        FourTwenty.loop.stop();
        clearInterval(FourTwenty.interval);
    }
};

// The initialization call
FourTwenty.init();