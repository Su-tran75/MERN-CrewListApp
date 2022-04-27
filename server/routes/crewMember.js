const router = require('express').Router();
// Import crewMember model
const crewMemberModel = require('../models/crewMember')

// create our first route -- We will add CrewMember to our db
router.post('/api/crewMember', async (req, res) => {
  try {
    const newCrewMember = new crewMemberModel({
      name: req.body.name
    })
    // Save this crew member in the db
    const saveCrewMember = await newCrewMember.save()
    res.status(200).json('Crew Member Added Successfully.');
  } catch (err) {
    res.json(err)
  }
})


// Export router
module.exports = router;