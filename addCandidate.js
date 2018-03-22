const request = require('request')

const candidates = [{
  name: 'Quach Trung Quan',
  pos: 'pre'
}, {
  name: 'Nguyen Hong Duc',
  pos: 'pre',
}, {
  name: 'Nguyen Dinh Le Dan',
  pos: 'pre'
}, {
  name: 'Quach Trung Quan',
  pos: 'vic'
}, {
  name: 'Nguyen Hong Duc',
  pos: 'vic',
}, {
  name: 'Nguyen Dinh Le Dan',
  pos: 'vic'
}, {
  name: 'Nguyen Bang Thanh Lam',
  pos: 'vic',
}, {
  name: 'Thai Gia Bach',
  pos: 'vic'
}, {
  name: 'Thai Gia Bach',
  pos: 'sec',
}, {
  name: 'Phan Thi Minh Ngan',
  pos: 'sec',
}]

const url = 'https://api.mrawesome.cloud/election/candidate/add'

candidates.forEach((candidate) => {
  candidate.name = encodeURIComponent(candidate.name)
  console.log(candidate)
  const form = candidate
  request.post({url, form}, (e, res, body) => {
    console.log(body)
  })
})
