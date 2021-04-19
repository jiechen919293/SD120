// Add a method to the MusicVideo prototype called watch() that
//  uses console.log to output a string like "You were Rick Rolled, again!".
// Create an instance of Video and call the play and watch methods
// Create an instance of MusicVideo and call the play and watch methodss

function Video(params) {
    this.title = [];
    this.uploader = [];
    this.seconds = [];
}
Video.prototype.play = function() {
    console.log('You played the video!');
}
Video.prototype.watch = function() {
    console.log('You watched every cat video on the internet!');
}

function MusicVideo() {
    this.artist = '';
    Video.call(this);
}
MusicVideo.prototype.watch = function() {
    console.log('You were Rick Rolled, again!');
}
const video = new Video();
const musicVideo = new MusicVideo();
video.watch();
video.play();
musicVideo.watch();
musicVideo.play();