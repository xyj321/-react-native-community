/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
export declare enum NetInfoStateType {
    unknown = "unknown",
    none = "none",
    cellular = "cellular",
    wifi = "wifi",
    bluetooth = "bluetooth",
    ethernet = "ethernet",
    wimax = "wimax",
    vpn = "vpn",
    other = "other"
}
export declare enum NetInfoCellularGeneration {
    '2g' = "2g",
    '3g' = "3g",
    '4g' = "4g"
}
export interface NetInfoConnectedDetails {
    isConnectionExpensive: boolean;
}
interface NetInfoConnectedState<T extends NetInfoStateType, D extends object = {}> {
    type: T;
    isConnected: true;
    isInternetReachable: boolean | null | undefined;
    details: D & NetInfoConnectedDetails;
}
interface NetInfoDisconnectedState<T extends NetInfoStateType> {
    type: T;
    isConnected: false;
    isInternetReachable: false;
    details: null;
}
export declare type NetInfoUnknownState = NetInfoDisconnectedState<NetInfoStateType.unknown>;
export declare type NetInfoNoConnectionState = NetInfoDisconnectedState<NetInfoStateType.none>;
export declare type NetInfoDisconnectedStates = NetInfoUnknownState | NetInfoNoConnectionState;
export declare type NetInfoCellularState = NetInfoConnectedState<NetInfoStateType.cellular, {
    cellularGeneration: NetInfoCellularGeneration | null;
    carrier: string | null;
}>;
export declare type NetInfoWifiState = NetInfoConnectedState<NetInfoStateType.wifi, {
    ssid: string | null;
    ipAddress: string | null;
    subnet: string | null;
    frequency: number | null;
}>;
export declare type NetInfoBluetoothState = NetInfoConnectedState<NetInfoStateType.bluetooth>;
export declare type NetInfoEthernetState = NetInfoConnectedState<NetInfoStateType.ethernet, {
    ipAddress: string | null;
    subnet: string | null;
}>;
export declare type NetInfoWimaxState = NetInfoConnectedState<NetInfoStateType.wimax>;
export declare type NetInfoVpnState = NetInfoConnectedState<NetInfoStateType.vpn>;
export declare type NetInfoOtherState = NetInfoConnectedState<NetInfoStateType.other>;
export declare type NetInfoConnectedStates = NetInfoCellularState | NetInfoWifiState | NetInfoBluetoothState | NetInfoEthernetState | NetInfoWimaxState | NetInfoVpnState | NetInfoOtherState;
export declare type NetInfoState = NetInfoDisconnectedStates | NetInfoConnectedStates;
export declare type NetInfoChangeHandler = (state: NetInfoState) => void;
export declare type NetInfoSubscription = () => void;
export interface NetInfoConfiguration {
    reachabilityUrl: string;
    reachabilityTest: (response: Response) => Promise<boolean>;
    reachabilityLongTimeout: number;
    reachabilityShortTimeout: number;
    reachabilityRequestTimeout: number;
}
export {};
