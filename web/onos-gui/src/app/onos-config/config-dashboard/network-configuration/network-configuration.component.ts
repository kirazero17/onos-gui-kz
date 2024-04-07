/*
 * SPDX-FileCopyrightText: 2020-present Open Networking Foundation <info@opennetworking.org>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeviceService} from '../../device.service';
import {KeyValue} from '@angular/common';
import {OnosConfigAdminService} from '../../../onos-api/onos-config-admin.service';
import {Object as EntityObject} from '../../../onos-api/onos/topo/topo_pb';

@Component({
    selector: '[onos-network-configuration]',
    templateUrl: './network-configuration.component.html',
    styleUrls: ['./network-configuration.component.css']
})
export class NetworkConfigurationComponent implements OnInit {
    @Input() deviceSortCriterion: (a: KeyValue<string, EntityObject>, b: KeyValue<string, EntityObject>) => number
        = DeviceService.entitySorterForwardAlpha;
    @Output() dsSelected = new EventEmitter<string>();

    constructor(
        public deviceService: DeviceService,
        public admin: OnosConfigAdminService
    ) {
    }

    ngOnInit() {
    }

    itemSelected(id: string) {
        this.dsSelected.emit(id);
    }
}
