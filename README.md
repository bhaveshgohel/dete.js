dete.js - library to detect files.
-------------------------------------

Why?
-----

Let's say you build a website and you want to verify the user uploaded profile picture and not a python script!.

How do you verify it?

* Checking the file name.
* Checking the first bytes in the file
* etc...

or you can use `dete.js`!

the library uses the file(1) command in *nix to verify the file.

API
------

```javascript
const Dete = require('dete.js');

var d = new Dete('/home/user/Profile_picture.jpg');

if ( d.isPicture == false ) {
  console.log("This is not a picture file!, please try to upload picture file.!");
 }
}
```

API Functions
----------

####.isBinary()    - `true` if binary file (ELF, EXE, data etc..)

####.isPicture()   - `true` if picture (JPG, PNG, GIF etc..)

####.isAudio()     - `true` if audio file (MP3, WAV, OGG etc..)

####.isVideo()     - `true` if video file (AVI, MP4, MKV etc..)

####.isTextFile()  - `true` if plain text file or source code file.

Requirements
-------------

* file(1) command installed.
* nodejs.

Contributing
-------------

Contributions are very welcome!

do whatever you want and send a pull request :smile:

## Copying

Copyright 2016 (C) Hypsurus <hypsurus@mail.ru>

License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.
