import { Injectable } from '@angular/core';

import { AnotherService } from './another.service';
@Injectable()
export class TestService {
    constructor(private anotherService: AnotherService) { 
    }
}
