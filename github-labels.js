/*
  1. Go to the labels page for a repo (https://github.com/user/repo/labels)
  2. Paste this script in your console and press enter
  3. Ta da! ✨
  ---
  Based on: https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4
*/

[
  {
    "name": "bug 🐛",
    "color": "fc624e",
    "description": "Something isn't working"
  },
  {
    "name": "dev-ops 🤓",
    "color": "ffb626",
    "description": "Dev environment and server setup"
  },
  {
    "name": "question❔",
    "color": "d33d9f",
    "description": "Ask the client!"  
  },
  {
    "name": "css 🎨",
    "color": "4efcb9",
    "description": ""  
  },
  {
    "name": "nice-to-have 💅",
    "color": "bbe000",
    "description": ""  
  },
  {
    "name": "design ✏️",
    "color": "fbca04",
    "description": ""  
  },
  {
    "name": "priority ⚠️",
    "color": "ff0000",
    "description": ""  
  },
  {
    "name": "content 📓",
    "color": "fef2c0",
    "description": ""  
  },
  {
    "name": "blocked 🛑",
    "color": "42dde5",
    "description": "We're blocked by something"  
  },
  {
    "name": "needs discussion 🏴",
    "color": "afafaf",
    "description": "Let's tawk"  
  }
].forEach(function(label) {
  addLabel(label)
})

function updateLabel (label) {
  var flag = false;
  [].slice.call(document.querySelectorAll(".labels-list-item"))
  .forEach(function(element) {
    if (element.querySelector('.label-link').textContent.trim() === label.name) {
      flag = true
      element.querySelector('.js-edit-label').click()
      element.querySelector('.js-new-label-name-input').value = label.name
      element.querySelector('.js-new-label-description-input').value = label.description
      element.querySelector('.js-new-label-color-input').value = '#' + label.color
      element.querySelector('.js-edit-label-cancel ~ .btn-primary').click()
    }
  })
  return flag
}

function addNewLabel (label) {
  document.querySelector('.js-new-label-name-input').value = label.name
  document.querySelector('.js-new-label-description-input').value = label.description
  document.querySelector('.js-new-label-color-input').value = '#' + label.color
  document.querySelector('.js-details-target ~ .btn-primary').disabled = false
  document.querySelector('.js-details-target ~ .btn-primary').click()
}

function addLabel (label) {
  if (!updateLabel(label)) addNewLabel(label)
}
