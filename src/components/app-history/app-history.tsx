import { Component, h, State } from '@stencil/core';
import { store } from "@stencil/redux";
import dayjs from 'dayjs';
import { getString } from '../../global/lang';


@Component({
  tag: 'app-history',
  styleUrl: 'app-history.css'
})
export class AppHistory {

  @State() recordings: Array<any>
  @State() lang: any

  componentWillLoad() {
    store.mapStateToProps(this, state => {
      const {
        history: { recordings },
        device: { lang }
      } = state;
      return {
        recordings,
        lang
      };
    });
  }

  computeTimeRecording(dateStart, dateEnd) {
    var diff = Math.abs(new Date(dateStart).getTime() - new Date(dateEnd).getTime());
    var seconds = Math.floor(diff/1000) % 60;
    var minutes = Math.floor((diff/1000)/60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>{getString('TAB_HISTORY', this.lang)}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        {this.recordings.length > 0 &&
        <ion-list>
          {this.recordings.slice().reverse().map((recording, index) =>
            <ion-item key={index}> 
              <ion-label>
                <h3>{dayjs(recording.dateStart).format('MMM DD, YYYY')}</h3>
                <p>{dayjs(recording.dateStart).format('hh:mm a')} - {dayjs(recording.dateEnd).format('hh:mm a')}</p>
                <div class="flex">
                  <div class="flex items-center">
                    <ion-icon name="time"></ion-icon>
                    <div class="ml-1">{this.computeTimeRecording(recording.dateStart, recording.dateEnd)}</div>
                  </div>
                  <div class="flex items-center ml-2">
                    <ion-icon name="map"></ion-icon>
                    <div class="ml-1">{recording.area} ha</div>
                  </div>
                </div>
              </ion-label>
              <ion-button 
                slot="end"
                href={`/history/${index}`}
              >
                <ion-icon name="play" slot="end"></ion-icon>
                Details
              </ion-button>
            </ion-item>
          )}
        </ion-list>
        }
        {this.recordings.length === 0 &&
          <div class="text-center ion-padding">{getString('HISTORY_NO_RECORDING', this.lang)}</div>
        }
      </ion-content>
    ];
  }
}
