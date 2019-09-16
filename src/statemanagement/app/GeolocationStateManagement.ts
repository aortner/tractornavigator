import { GeolocationPosition, Plugins } from "@capacitor/core";
import { geopositionToObject } from "../../helpers/utils";
const { Geolocation } = Plugins;

interface GeolocationState {
    position: GeolocationPosition;
}

const getInitialState = (): GeolocationState => {
    return {
        position: null
    };
};


const SET_POSITION = 'Geolocation/SET_POSITION';
//const GET_POSITION = 'Geolocation/GET_POSITION';

export function setPosition(position: GeolocationPosition) {
    return {
        type: SET_POSITION,
        payload: position
    }
}

export function getAndWatchPosition() {
    return (dispatch) => {
        Geolocation.getCurrentPosition({
            timeout: 15000
        }).then((position) => {
            // TODO handle error ?
            // Need to transform geoposition DOM element to normal object otherwise redux can't parse it reducer:
            dispatch(setPosition(geopositionToObject(position)));
        })

        Geolocation.watchPosition({
            enableHighAccuracy: true,
            timeout: 15000
        }, (position) => {
            // TODO dispatch watcher enabled
            if (position) {
                dispatch(setPosition(geopositionToObject(position)));
            } else {
                console.log('position null when watchPosition, todo need to dispatch onLocationError');
                // TODO do something
            }
        })
    }
}


const geolocationReducer = (
    state = getInitialState(),
    action: any
): GeolocationState => {
    switch (action.type) {
        case SET_POSITION: {
            return {
                ...state,
                position: action.payload
            };
        }
    }
    return state;
};

export default geolocationReducer;