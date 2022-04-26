// Import mongoose to create new Schema
const mongoose = require('mongoose');

// Create new Schema
const CrewMemberSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true
  }
})

// Export this Schema
module.exports = mongoose.model('CrewMember', CrewMemberSchema);