import { Plugins } from '@capacitor/core';
import { simulateGeolocation } from './GeolocationStateManagement';
const { Device, Network } = Plugins;

interface DeviceState {
    deviceInfo: any
    offline: any,
    lang: any
}

const getInitialState = (): DeviceState => {
    return {
        deviceInfo: null,
        offline: false,
        lang: 'en'
    };
};

const SET_DEVICE_INFO = 'DEVICE/SET_DEVICE_INFO';
const SET_OFFLINE = 'DEVICE/SET_OFFLINE';
const SET_LANGUAGE = 'DEVICE/SET_LANGUAGE';

export function initNetworkListener() {
    return (dispatch) => {
        Network.addListener('networkStatusChange', (status) => {
            if(status.connected) {
                dispatch({
                    type: SET_OFFLINE,
                    payload: false
                })
            } else {
                dispatch({
                    type: SET_OFFLINE,
                    payload: true
                })
            }
        });
        Network.getStatus().then((status) => {
            if(!status.connected) {
                dispatch({
                    type: SET_OFFLINE,
                    payload: true
                })
            }
        });
    }
}

export function getDeviceInfo() {
    return (dispatch) => {
        Device.getInfo().then((deviceInfo) => {
            dispatch({
                type: SET_DEVICE_INFO,
                payload: deviceInfo
            })

            //console.log(deviceInfo);

            if(deviceInfo.platform === "web") {
                //Simulate geolocation
                console.log('simulateGeolocation')
                simulateGeolocation();
            } else {
                // enable do not sleep 
                // @ts-ignore
                window.plugins.insomnia.keepAwake();
            }
        });

        Device.getLanguageCode().then((languageCode) => {
            dispatch({
                type: SET_LANGUAGE,
                payload: languageCode.value
            })
        })
    }
}

const deviceStateReducer = (
    state = getInitialState(),
    action: any
): DeviceState => {
    switch (action.type) {
        case SET_DEVICE_INFO: {
            return {
                ...state,
                deviceInfo: action.payload
            };
        }
        case SET_OFFLINE: {
            return {
                ...state,
                offline: action.payload
            }
        }
        case SET_LANGUAGE: {
            return {
                ...state,
                lang: action.payload
            }
        }
    }
    return state;
};

export default deviceStateReducer;