import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdSpinner } from '@angular/material';

import { StreamService } from '../stream.service';

import { AuthService } from '../auth.service';

declare var red5prosdk: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  public tokenInput: string;
  public streamInitialized: boolean = false;

  private streams: any[];

  constructor(public streamService: StreamService) { }

  ngOnInit() {
    this.streamService.getActiveStreams()
      .subscribe(data => {
        console.log('act streams: ', data);
        if(data) {
          this.streams = data.streams;
        }
      })
  }



  setupStream() {
    if(!this.tokenInput) {
      return;
    }

    // Create a new instance of the WebRTC subcriber.
    var subscriber = new red5prosdk.RTCSubscriber();

    // Create a view instance based on video element id.
    var viewer = new red5prosdk.PlaybackView('red5pro-subscriber');
    // Attach the subscriber to the view.
    viewer.attachSubscriber(subscriber);

    var protocol = window.location.protocol;
    var isSecure = protocol.charAt(protocol.length - 2);

    // Using Chrome/Google TURN/STUN servers.
    var iceServers = [{urls: 'stun:stun2.l.google.com:19302'}];

    var that = this;

    // Initialize
    subscriber.init({
        protocol: 'ws',
        host: 'localhost',
        port: 8081,
        app: 'live',
        streamName: this.tokenInput,
        iceServers: iceServers,
        subscriptionId: 'subscriber-' + Math.floor(Math.random() * 0x10000).toString(16),
      })
      .then(function() {
        // Invoke the playback action
        that.streamInitialized = true;
        return subscriber.play();
      })
      .catch(function(error) {
        // A fault occurred while trying to initialize and subscribe to the stream.
        console.error(error);
       // that.snackbar.open("Error initializing stream");
      });

  }

}
