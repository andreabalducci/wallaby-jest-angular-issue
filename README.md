Reproduces the issue of Wallaby + Angular 4 + Jest setup

1. Run with jest directly:

    npm test

    The test will pass

2. Run with Wallaby (I tested inside VSCode), you will get the following error:

    ​​Error: Cannot resolve all parameters for 'TestService'(?). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'TestService' is decorated with Injectable.​​
        at ​app/services/test.service.spec.ts:10:2​

