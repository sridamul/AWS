from multiprocessing import Pool

from requests import get

DOMAIN = 'ec2-3-110-207-156.ap-south-1.compute.amazonaws.com/'

def send_requests(val):
    while True:
        response = get(f'http://{DOMAIN}')
        data = response.json()
        print('Send request')
        print(data)

if __name__ == '__main__':
    with Pool(150) as p:
        p.map(send_requests,range(150))