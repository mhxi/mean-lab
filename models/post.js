// POST MODEL

// Requirements
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Schema
var PostSchema = new Schema({
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date },
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true }
});

// MIDDLEWARE
PostSchema.pre('save', function (next) {
    // set a created_at and update updated_at
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

// Export Post Model
var Post = mongoose.model('Post', PostSchema);
module.exports = Post;