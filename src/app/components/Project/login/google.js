const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const app = express();

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('User', new mongoose.Schema({
  googleId: String,
  displayName: String,
}));

// Express session middleware
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
  clientID: "1059729643258-bnc8uk9a89iti9mndsg7bqmspoon958i.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: 'http://localhost:3000/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  // Check if user already exists in database
  const existingUser = await User.findOne({ googleId: profile.id });
  if (existingUser) {
    return done(null, existingUser);
  }

  // Create new user if not found
  const newUser = await User.create({
    googleId: profile.id,
    displayName: profile.displayName,
  });
  return done(null, newUser);
}));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Protect route example
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello, ${req.user.displayName}!`);
  } else {
    res.send('You are not logged in.');
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
