# Prioritize It

A simple little productivity app

## Description

Help a person prioritize a list of to-do items using relative ranking of two items at a time.

## Priority Rating

- accept a written list of to-do items
- present items two at a time
- user selects which of the two items has higher priority
- show results to user ranked highest to lowest priority
- stored in browser

## Secondary goals

- delete / mark as done items on list
- after change in list, re-establish list?

## User Interface

- 3 screens
  1 Enter list
  2 Display and select relative priority
  3 View priority sorted list

- Screen 1

  - Text field
  - Should produce an array of objects (value, increment)

- Screen 2

  - Show user two buttons from array, user selects the button of higher priority

- Screen 3
  - Output ordered list

## Specific to dos

- Track user progress using local storage
  - At each iteration of incrementPair, save 'list' to local storage
  - on page load, pull 'list' from local storage
  - in 'paris', track which pairs have been already displayed, save in local storage
  - on page load, sort 'paris' arr for which pairs have not been displayed, send to updateBtnTxt
