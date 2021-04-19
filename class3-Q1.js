// Create a new constructor called MusicVideo that inherits from the 
// Video constructor.This constructor should also take in an artist argument.
// Your MusicVideo prototype should inherit from the Video prototype.
// Add a method to the MusicVideo prototype called watch() that
//  uses console.log to output a string like "You were Rick Rolled, again!".
// Create an instance of Video and call the play and watch methods
// Create an instance of MusicVideo and call the play and watch methodss

function Video(params) {
    this.title = [];
    this.uploader = [];
    this.seconds = [];
}
Video.prototype.play() = function(params) {
    console.log('You played the video!');
}
Video.prototype.watch() = function(params) {
    console.log('You watched every cat video on the internet!');
}

function MusicVideo() {
    this.artist = '';
    Object.Video.call(this)
}
const video = new Video();
const musicVideo = new MusicVideo();