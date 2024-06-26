//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/new/destination', (req, res) => {
    if(req.body.new.destination == 'Neither - I do not want to go to the Moon or Mars') {
      res.redirect('/new/cannot-travel')
    } else {
      if(req.query.returnUrl) {
        res.redirect(`${req.query.returnUrl}`)
      } else {
        res.redirect('/new/name')
      }
    }
  })


  router.post('/new/name', (req, res) => {
    if(req.query.returnUrl) {
      res.redirect(`${req.query.returnUrl}`)
    } else {
      res.redirect('/new/address')
    }
  })

  router.post('/new/address', (req, res) => {
    if(req.query.returnUrl) {
      res.redirect(`${req.query.returnUrl}`)
    } else {
      res.redirect('/new/check')
    }
  })


router.post('/new/check', (req, res) => {
    res.redirect('/new/confirmation')
})