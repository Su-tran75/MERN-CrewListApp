const router = require('express').Router();
const { route } = require('express/lib/router');
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
    res.status(200).json(saveCrewMember);
  } catch (err) {
    res.json(err)
  }
})

// create second route -- get data from db
router.get('/api/crewMembers', async (req, res) => {
  try {
    const allCrewMembers = await crewMemberModel.find({});
    res.status(200).json(allCrewMembers)
  } catch (err) {
    res.json(err)
  }
})

// update crew member
router.put('/api/crewMember/:id', async (req, res) => {
  try {
    // find crew member by its id and update it
    const updateCrewMember = await crewMemberModel.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json('CrewMember Updated')
  } catch (err) {
    res.json(err)
  }
})

// delete crew member from db
router.delete('/api/crewMember/:id', async (req, res) => {
  try {
    // find crew member by its id and delete it
    const deleteCrewMember = await crewMemberModel.findByIdAndDelete(req.params.id);
    res.status(200).json('CrewMember Deleted');
  } catch (err) {
    res.json(err)
  }
})


// Export router
module.exports = router;