/** 
*
* dete.js - A small library to detect files using file(1).
*     
* Copyright (c) 2016 by Hypsurus <hypsurus@mail.ru>   
*
* dete.js is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation; either version 3 of the License, or
* (at your option) any later version.
*
* dete.js is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
*/

const fs = require('fs');
const process = require('process');
const exec = require('child_process').execSync

function Dete(file) {
  this.file = file;
  this.mimeType = this.get(`file --mime-type ${this.file}`)
  this.fileEncoding = this.get(`file --mime-encoding ${this.file}`)
  this.fileInfo = this.getInfo(`file ${this.file}`)
  this.test();

  /* In case the file not found. */
  if ( this.mimeType == "cannot" ) {
    throw " No such file."
  }
}

/* get: return output of command and split the output.
    @command the command to execute.
*/
Dete.prototype.get = function get(command) {
  var output = exec(command).toString()
  return output.split(" ")[1].replace("\n", "");
}

/* getInfo: return output of the file command and return full informtion.
    @command the command to execute.
*/
Dete.prototype.getInfo = function getInfo(command) {
  var output = exec(command).toString()
  output = output.split(":")[1]
  return output.replace("\n", "");
}

Dete.prototype.isAudio = function isAudio() {
  if ( this.mimeType.split("/")[0] == "audio" )
    return true;
  return false;
}

Dete.prototype.isPicture = function isPicture() {
  if ( this.mimeType.split("/")[0] == "image" )
    return true;
  return false;
}

Dete.prototype.isVideo = function isVideo() {
  if ( this.mimeType.split("/")[0] == "video" ) 
    return true;
  return false;
}

Dete.prototype.isBinary = function isBinary() {
  if ( this.mimeType == "application/x-executable" )
    return true;
  return false;
}

Dete.prototype.isTextFile = function isTextFile() {
  if ( this.mimeType == "text/plain" )
    return true;
  return false;
}

/* test: check if file(1) command exits. */
Dete.prototype.test = function test() {
  try {
     fs.statSync("/bin/file");
  } catch(err) {
    throw "No file command"
  }
}

module.exports = Dete;
