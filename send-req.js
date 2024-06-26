const axios = require('axios');

// AutoScalingWithLoadBalancing-1-858215853.ap-south-1.elb.amazonaws.com

const DOMAIN = 'http://AutoScalingWithLoadBalancing-1-858215853.ap-south-1.elb.amazonaws.com';

async function sendRequests(val) {
    while (true) {
        try {
            const response = await axios.get(DOMAIN);
            console.log('Send request');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
}

async function main() {
    const concurrency = 300;
    const promises = [];
    
    for (let i = 0; i < concurrency; i++) {
        promises.push(sendRequests(i));
    }

    await Promise.all(promises);
}

main();
