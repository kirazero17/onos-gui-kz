/*
 * SPDX-FileCopyrightText: 2020-present Open Networking Foundation <info@opennetworking.org>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DeviceService} from '../../device.service';
import {Configuration} from '../../../onos-api/onos/config/configuration/device/types_pb';

@Component({
    selector: '[onos-device-configuration]',
    templateUrl: './device-configuration.component.html',
    styleUrls: ['./device-configuration.component.css']
})
export class DeviceConfigurationComponent {
    @Input() deviceConfiguration: Configuration;
    @Output() selected  = new EventEmitter<boolean>();

    constructor(
        public deviceService: DeviceService
    ) {
    }
}
