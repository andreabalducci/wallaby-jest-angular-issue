import { ReflectiveInjector } from '@angular/core';

import { AnotherService } from './another.service';
import { TestService } from './test.service';

describe('test service', () => {
	let injector: ReflectiveInjector;

	beforeEach(() => {
		injector = ReflectiveInjector.resolveAndCreate([
            AnotherService,
            TestService
        ]);
    });

    it('should work', () => {
        const testService = injector.get(TestService);
        expect(testService).not.toBeNull();
    });
})