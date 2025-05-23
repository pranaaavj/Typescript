"use strict";
class ServiceA {
    APICall() {
        console.log('API call going...');
    }
}
class ServiceB {
    constructor(service) {
        this.service = service;
    }
    execute() {
        this.service.APICall();
    }
}
const serviceA = new ServiceA();
const serviceB = new ServiceB(serviceA);
serviceB.execute();
